"use client"

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function Preloader({ onLoadingComplete }) {
  const preloaderRef = useRef();
  const progressBarRef = useRef();
  const progressTextRef = useRef();
  const logoTextRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    // Create the loading sequence timeline
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(preloaderRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            onLoadingComplete();
          }
        });
      }
    });

    // Initial setup - hide everything
    gsap.set([progressBarRef.current, progressTextRef.current], { opacity: 0, scale: 0.8 });
    gsap.set(logoTextRef.current?.children || [], { opacity: 0, y: 20 });
    
    // Split the text into spans for animation
    const text = "LIFE SPORTS";
    logoTextRef.current.innerHTML = text.split('').map(char => 
      `<span class="inline-block">${char}</span>`
    ).join('');

    // Create the loading sequence
    tl.to(progressBarRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "power2.out"
    })
    .to(progressTextRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.3");

    // Animate each letter of the logo text
    gsap.to(logoTextRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: "power2.out",
      delay: 0.5
    });

    // Animate the progress bar
    tl.to(progressBarRef.current.querySelector('.progress-fill'), {
      width: "100%",
      duration: 2,
      ease: "power2.inOut"
    })
    .to(progressTextRef.current, {
      innerText: "100%",
      snap: "innerText",
      duration: 2,
    }, "-=2");

    // Cleanup
    return () => {
      tl.kill();
    };
  }, [onLoadingComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0f0f0f]"
    >
      <div 
        ref={containerRef}
        className="relative flex flex-col items-center"
      >
        {/* Logo Text */}
        <h1
          ref={logoTextRef}
          className="text-5xl font-bold tracking-widest mb-12 bg-gradient-to-r from-[#f39318] to-[#FF5500] text-transparent bg-clip-text"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          LIFE SPORTS
        </h1>

        {/* Progress Bar Container */}
        <div
          ref={progressBarRef}
          className="w-[300px] h-[3px] bg-white/10 rounded-full overflow-hidden relative mb-6"
        >
          <div 
            className="progress-fill absolute top-0 left-0 h-full w-0 bg-gradient-to-r from-[#f39318] to-[#FF5500]"
            style={{ boxShadow: '0 0 20px rgba(243, 147, 24, 0.5)' }}
          />
        </div>

        {/* Progress Text */}
        <div
          ref={progressTextRef}
          className="text-[#f39318] text-sm font-medium tracking-wider"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          0%
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(243,147,24,0.1)_0%,transparent_60%)]" />
        </div>

        {/* Decorative Lines */}
        <div className="absolute -z-10 w-[600px] h-[600px] opacity-20">
          <div className="absolute inset-0 border border-[#f39318]/20 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-[50px] border border-[#f39318]/15 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          <div className="absolute inset-[100px] border border-[#f39318]/10 rounded-full animate-[spin_10s_linear_infinite]" />
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