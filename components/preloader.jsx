"use client"

import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Float} from '@react-three/drei';
import { ShuttlecockModel } from './ShuttlecockModel';
import Image from 'next/image';
import gsap from 'gsap';

export function Preloader({ onLoadingComplete }) {
  const preloaderRef = useRef();
  const containerRef = useRef();
  const logoRef = useRef();
  const logoTextRef = useRef();
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  // Main loading animation
  useEffect(() => {
    // Create the loading sequence timeline
    const tl = gsap.timeline();

    // Initial setup - hide everything
    gsap.set(logoTextRef.current, { opacity: 0, scale: 0.8 });
    gsap.set(logoRef.current, { opacity: 0, y: 20 });

    // Create the loading sequence
    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    })
      .to(logoTextRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5");

    // Create background animation
    gsap.to(".bg-overlay", {
      backgroundPosition: '100% 100%',
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Logo subtle animation
    gsap.to(logoRef.current, {
      y: -5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Simulate loading progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 10;
      if (progress > 100) progress = 100;

      setLoadingPercentage(Math.round(progress));

      if (progress >= 100) {
        clearInterval(interval);

        // Call onLoadingComplete without fade animations after a short delay
        setTimeout(() => {
          onLoadingComplete();
        }, 500);
      }
    }, 200);

    // Cleanup
    return () => {
      clearInterval(interval);
      tl.kill();
    };
  }, [onLoadingComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/lifebg.jpg"
          alt="Life Sports Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
        <div className="absolute inset-0 bg-overlay"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(243, 147, 24, 0.3) 0%, rgba(255, 85, 0, 0.3) 100%)',
            backgroundSize: '200% 200%',
            backgroundPosition: '0% 0%'
          }}></div>
      </div>

      {/* Content Container */}
      <div
        ref={containerRef}
        className="relative z-10 flex flex-col items-center max-w-2xl w-full px-6"
      >
        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Logo Side */}
          <div className="flex flex-col items-center">
            {/* Logo Image */}
            <div
              ref={logoRef}
              className="mb-4 relative w-44 h-72 flex items-center justify-center transform hover:scale-105 transition-transform duration-300"
            >
              <Image
                src="/logo.jpg"
                alt="Life Sports Logo"
                width={176}
                height={315}
                className="object-contain drop-shadow-[0_0_15px_rgba(243,147,24,0.5)]"
                priority
              />
            </div>

            {/* Logo Text */}
            <h1
              ref={logoTextRef}
              className="text-5xl md:text-6xl font-bold tracking-widest  bg-gradient-to-r from-[#f39318] to-[#FF5500] text-transparent bg-clip-text text-center"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              LIFE SPORTS
            </h1>
          </div>

          {/* 3D Model Side */}
          <div className="w-64 h-fit md:w-80  flex items-center justify-center relative">
            <Canvas
              camera={{ position: [5, 5, 5], fov: 35 }}
              dpr={[1, 2]}
              gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}
              style={{ background: 'transparent' }}
            >
              {/* Matching hero section lighting */}
              <ambientLight intensity={0.5} />
              <spotLight 
                position={[10, 10, 10]} 
                angle={0.15} 
                penumbra={1} 
                intensity={1} 
              />

              {/* Main container for controlled rotation - matching hero style */}
              <Float
                speed={1.5}
                rotationIntensity={0.5}
                floatIntensity={0.5}
              >
                <ShuttlecockModel 
                  position={[0, -0.5, 0]} 
                  scale={40} 
                  rotation={[-Math.PI / 6, Math.PI / 3, 0]}
                />
              </Float>

              {/* Improved environment for better reflections */}
              <Environment preset="sunset" background={false} />
            </Canvas>
            {/* Subtle glow effect around model */}
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-[#f3931840] to-transparent opacity-60 blur-lg pointer-events-none"></div>
          </div>
        </div>

        {/* Tagline with modern design */}
        <div className="text-center ">
          <div className="relative inline-block">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
              <span className="text-[#f39318]">Invest</span> One Hour a Day
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full"></div>
          </div>
          <p className="text-white/90 text-lg md:text-xl font-medium">
            Transform Your <span className="text-[#f39318] font-semibold">Life</span>
          </p>
        </div>

        {/* Modern Loading Indicator */}
        <div className="mt-12 relative">
          {/* Progress Circle */}
          <div className="w-32 h-32 relative mx-auto">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                className="text-gray-700"
                strokeWidth="8"
                stroke="currentColor"
                fill="transparent"
                r="58"
                cx="64"
                cy="64"
              />
              <circle
                className="text-[#f39318]"
                strokeWidth="8"
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="58"
                cx="64"
                cy="64"
                style={{
                  strokeDasharray: `${2 * Math.PI * 58}`,
                  strokeDashoffset: `${2 * Math.PI * 58 * (1 - loadingPercentage / 100)}`,
                  transition: 'stroke-dashoffset 0.5s ease'
                }}
              />
            </svg>
            {/* Percentage Text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="text-2xl font-bold text-white">{loadingPercentage}%</span>
            </div>
          </div>
          
         
        </div>
      </div>

      {/* Add Montserrat font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </div>
  );
} 