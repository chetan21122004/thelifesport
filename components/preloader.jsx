"use client"

import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import { ShuttlecockModel } from './ShuttlecockModel';
import Image from 'next/image';
import gsap from 'gsap';

export function Preloader({ onLoadingComplete }) {
  const preloaderRef = useRef();
  const containerRef = useRef();
  const logoRef = useRef();
  const logoTextRef = useRef();
  const counterRef = useRef(0);
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const particlesRef = useRef([]);
  const [isMounted, setIsMounted] = useState(false);

  // Create particles for background effect
  useEffect(() => {
    if (!isMounted) return;
    
    const particleContainer = document.querySelector('.particles-container');
    if (!particleContainer) return;
    
    // Clear any existing particles
    particleContainer.innerHTML = '';
    
    // Create new particles
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Randomize particle properties
      const size = Math.random() * 6 + 2;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;
      
      // Set particle styles
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = Math.random() * 0.6 + 0.2;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;
      
      particleContainer.appendChild(particle);
      particlesRef.current.push(particle);
    }
    
    return () => {
      particlesRef.current = [];
    };
  }, [isMounted]);

  // Main loading animation
  useEffect(() => {
    setIsMounted(true);
    
    // Create the loading sequence timeline
    const tl = gsap.timeline();
    const mainTl = gsap.timeline();

    // Initial setup - hide everything
    gsap.set(logoTextRef.current, { opacity: 0, scale: 0.8 });
    gsap.set(logoRef.current, { opacity: 0, y: 20 });
    
    // Preloader initial animation
    mainTl.fromTo(preloaderRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    // Create the loading sequence
    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "back.out(1.7)"
    })
    .to(logoTextRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "back.out(1.2)"
    }, "-=0.7");

    // Create background animation
    gsap.to(".bg-overlay", {
      backgroundPosition: '100% 100%',
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Logo subtle float animation
    gsap.to(logoRef.current, {
      y: -8,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    
    // Progress bar glow animation
    gsap.to(".progress-glow", {
      boxShadow: "0 0 25px rgba(243,147,24,0.8)",
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut"
    });

    // Simulate loading progress with a smoother acceleration
    let progress = 0;
    const interval = setInterval(() => {
      // Eased progression for more realistic loading simulation
      if (progress < 70) {
        progress += Math.random() * 5 + 1;
      } else if (progress < 90) {
        progress += Math.random() * 2 + 0.5;
      } else {
        progress += Math.random() * 0.8 + 0.1;
      }
      
      if (progress > 100) progress = 100;

      setLoadingPercentage(Math.round(progress));
      counterRef.current = Math.round(progress);

      if (progress >= 100) {
        clearInterval(interval);

        // Final animation before completion
        const completionTl = gsap.timeline({
          onComplete: () => {
            setTimeout(() => onLoadingComplete(), 300);
          }
        });

        completionTl
          .to(".progress-container", {
            scale: 1.1,
            duration: 0.4,
            ease: "power2.out"
          })
          .to(".progress-container", {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            ease: "back.in(2)"
          })
          .to([logoRef.current, logoTextRef.current, '.tagline-container'], {
            y: -20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.in"
          }, "-=0.3")
          .to(preloaderRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut"
          }, "-=0.3");
      }
    }, 200);

    // Cleanup
    return () => {
      clearInterval(interval);
      tl.kill();
      mainTl.kill();
      gsap.killTweensOf(".bg-overlay");
      gsap.killTweensOf(logoRef.current);
      gsap.killTweensOf(".progress-glow");
    };
  }, [onLoadingComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Particles Container */}
      <div className="particles-container absolute inset-0 z-0 overflow-hidden"></div>
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/lifebg.jpg"
          alt="Life Sports Background"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40"></div>
        <div className="absolute inset-0 bg-overlay"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(243, 147, 24, 0.15) 0%, rgba(255, 85, 0, 0.15) 100%)',
            backgroundSize: '300% 300%',
            backgroundPosition: '0% 0%'
          }}></div>
      </div>

      {/* Content Container */}
      <div
        ref={containerRef}
        className="relative z-10 flex flex-col items-center max-w-3xl w-full px-6"
      >
        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-8">
          {/* Logo Side */}
          <div className="flex flex-col items-center">
            {/* Logo Image */}
            <div
              ref={logoRef}
              className="mb-6 relative w-44 h-72 flex items-center justify-center transform hover:scale-105 transition-transform duration-500"
            >
              <Image
                src="/logo.jpg"
                alt="Life Sports Logo"
                width={176}
                height={315}
                className="object-contain drop-shadow-[0_0_20px_rgba(243,147,24,0.6)]"
                priority
              />
              {/* Logo glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-radial from-[#f3931830] to-transparent opacity-70 blur-xl"></div>
            </div>

            {/* Logo Text */}
            <h1
              ref={logoTextRef}
              className="text-5xl md:text-6xl font-bold tracking-widest bg-gradient-to-r from-[#f39318] via-[#ff8c00] to-[#FF5500] text-transparent bg-clip-text text-center"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              LIFE SPORTS
            </h1>
          </div>

          {/* 3D Model Side */}
          <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center relative">
            <Canvas
              camera={{ position: [5, 5, 5], fov: 35 }}
              dpr={[1, 2]}
              gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}
              style={{ background: 'transparent' }}
            >
              {/* Enhanced lighting */}
              <ambientLight intensity={0.6} />
              <spotLight 
                position={[10, 10, 10]} 
                angle={0.15} 
                penumbra={1} 
                intensity={1.2} 
                color="#f8f8f8"
              />
              <pointLight 
                position={[-10, -5, -10]} 
                intensity={0.5} 
                color="#f39318" 
              />

              {/* Enhanced float animation */}
              <Float
                speed={1.8}
                rotationIntensity={0.7}
                floatIntensity={0.8}
              >
                <ShuttlecockModel 
                  position={[0, -0.5, 0]} 
                  scale={42} 
                  rotation={[-Math.PI / 6, Math.PI / 3, 0]}
                />
              </Float>

              {/* Better environment for improved reflections */}
              <Environment preset="sunset" background={false} />
            </Canvas>
            
            {/* Enhanced glow effect around model */}
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-[#f3931850] to-transparent opacity-70 blur-2xl pointer-events-none"></div>
          </div>
        </div>

        {/* Tagline with modern design */}
        <div className="text-center mb-12 tagline-container">
          <div className="relative inline-block">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
              <span className="text-[#f39318]">Invest</span> One Hour a Day
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full"></div>
          </div>
          <p className="text-white/90 text-lg md:text-xl font-medium mt-4">
            Transform Your <span className="text-[#f39318] font-semibold">Life</span>
          </p>
        </div>

        {/* Modern Loading Indicator */}
        <div className="mt-4 relative progress-container">
          {/* Progress Bar - Redesigned */}
          <div className="w-80 h-3 bg-gray-800/60 rounded-full overflow-hidden backdrop-blur-sm p-0.5">
            <div 
              className="h-full bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full progress-glow transition-all duration-300 ease-out"
              style={{ 
                width: `${loadingPercentage}%`,
                boxShadow: '0 0 10px rgba(243,147,24,0.5)'
              }}
            ></div>
          </div>
          
          {/* Percentage Text */}
          <div className="mt-3 text-center">
            <span className="text-xl font-medium text-white/90">
              <span className="text-2xl font-bold text-[#f39318]">{loadingPercentage}</span>%
            </span>
            <span className="ml-2 text-sm text-white/60">LOADING</span>
          </div>
        </div>
      </div>

      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      
      {/* Additional styles for particles */}
      <style jsx global>{`
        .particles-container {
          pointer-events: none;
        }
        
        .particle {
          position: absolute;
          background: linear-gradient(135deg, rgba(243, 147, 24, 0.4) 0%, rgba(255, 85, 0, 0.4) 100%);
          border-radius: 50%;
          animation: float-particle infinite linear;
          pointer-events: none;
          box-shadow: 0 0 4px rgba(243, 147, 24, 0.3);
        }
        
        @keyframes float-particle {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          33% {
            transform: translate(30px, -50px) rotate(120deg) scale(1.2);
          }
          66% {
            transform: translate(-20px, -20px) rotate(240deg) scale(0.8);
          }
          100% {
            transform: translate(0, 0) rotate(360deg) scale(1);
          }
        }
      `}</style>
    </div>
  );
} 