"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import {
  ChevronRight,
  ChevronDown,

  ArrowUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CorporateEventsSection } from "@/components/corporate-events-section"
import { TestimonialsSection } from "@/components/testimonials-section"

import { Hero3DScene } from "@/components/Hero3DScene"

// Animation variants for scroll effects
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

const clipReveal = {
  hidden: { 
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
    opacity: 0
  },
  visible: { 
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

// Simplified letter animation - reduced complexity
function AnimatedText({ text, className, once = true }: { text: string, className?: string, once?: boolean }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: once,
  });

  return (
    <motion.h2
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {text}
    </motion.h2>
  );
}

function CountUpAnimation({ end, duration = 2000, label }: { end: number, duration?: number, label: string }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (!inView) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / duration

      if (progress < 1) {
        setCount(Math.floor(end * progress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, inView])

  return (
    <motion.div 
      ref={ref} 
      className="text-center transform transition-all duration-500 hover:scale-105"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={scaleIn}
    >
      <div className="relative">
        <div className="text-5xl font-bold text-[#f39318]">
          {count}+
        </div>
      </div>
      <div className="mt-2 text-sm font-medium text-gray-600 uppercase tracking-wider">{label}</div>
    </motion.div>
  )
}

// Function to throttle scroll events
function useThrottledScrollY(delay = 50) {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    let lastCall = 0;
    
    const handleScroll = () => {
      const now = Date.now();
      
      if (now - lastCall >= delay) {
        setScrollY(window.scrollY);
        lastCall = now;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [delay]);
  
  return scrollY;
}

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  
  // Use throttled scroll position instead of raw scroll events
  const scrollY = useThrottledScrollY(30);
  
  // Animation hooks for different sections with proper thresholds
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [activitiesRef, activitiesInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    setShowScrollTop(scrollY > 400)
  }, [scrollY])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Calculate parallax values with reduced intensity
  const calculateParallax = (factor: number) => {
    return scrollY * factor * 0.3
  }

  return (
    <div className="flex min-h-screen flex-col">

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] overflow-hidden">
          {/* Background Image and Overlay */}
          <div className="absolute inset-0">
            <div className="relative h-full w-full">
              <motion.div 
                className="absolute inset-0 will-change-transform"
                style={{ y: calculateParallax(-0.05) }}
              >
                <Image
                  src="https://www.thelifesports.in/wp-content/uploads/2018/12/Life-Sports-Banner.jpg"
                  alt="The Life Sports Facility"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
              
              {/* Reduced decorative elements - only keep one animation */}
              <div className="absolute inset-0">
                <motion.div 
                  className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#f39318]/30 rounded-full blur-3xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                ></motion.div>
              </div>
            </div>
          </div>
          
          {/* 3D Shuttlecock Model - no parallax for better performance */}
          <Hero3DScene />

          {/* Content */}
          <div className="container relative z-10 mx-auto flex h-[90vh] flex-col items-center justify-center px-4">
            <motion.div 
              ref={heroRef}
              className="max-w-5xl text-center"
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              {/* Subtitle */}
              <motion.div 
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-sm"
                variants={fadeIn}
              >
                <span className="h-2 w-2 rounded-full bg-[#f39318] animate-pulse"></span>
                <span className="text-sm font-medium text-white">Welcome to The Life Sports Academy</span>
              </motion.div>

              {/* Main Title - simplified animation */}
              <div className="mb-6">
                <AnimatedText 
                  text="Invest One Hour a Day" 
                  className="mb-2 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl drop-shadow-lg"
                />
                <AnimatedText 
                  text="Transform Your Life" 
                  className="bg-gradient-to-r from-[#f39318] via-yellow-400 to-[#f39318] bg-clip-text text-transparent drop-shadow-lg text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
                />
              </div>

              {/* Description */}
              <motion.p 
                className="mb-8 max-w-2xl mx-auto text-lg text-white md:text-xl drop-shadow-md"
                variants={fadeInUp}
              >
                Join our premier sports facility and experience immediate results with long-term benefits for you and your family.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                variants={fadeInUp}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button className="group relative overflow-hidden bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white font-bold px-8 py-6 text-lg min-w-[200px] transition-all duration-300 shadow-lg">
                    <motion.span 
                      className="absolute inset-0 bg-white/20" 
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                    />
                    <span className="relative z-10">Start Free Trial</span>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button className="relative overflow-hidden bg-gradient-to-l from-[#f39318] to-[#FF5500] backdrop-blur-sm text-white font-bold px-3 py-6 text-lg min-w-[200px] transition-all duration-300 shadow-lg">
                    <motion.span 
                      className="absolute inset-0 bg-white/20" 
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                    />
                    <span className="relative z-10 flex items-center justify-center gap-1">
                      Explore Programs
                      <ChevronRight className="h-5 w-5" />
                    </span>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80"
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div>
              <ChevronDown className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">Scroll to explore</span>
          </motion.div>
        </section>

        {/* Activities Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              ref={activitiesRef}
              className="mb-12 text-center"
              initial="hidden"
              animate={activitiesInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <div className="text-center max-w-3xl mx-auto mb-4">
                <div className="inline-flex items-center justify-center">
                  <motion.div 
                    className="h-px w-8 bg-gradient-to-r from-[#f39318] to-[#FF5500]"
                    variants={slideInLeft}
                  ></motion.div>
                  <motion.span 
                    className="mx-4 text-3xl uppercase tracking-wider font-semibold bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent"
                    variants={scaleIn}
                  >Activities</motion.span>
                  <motion.div 
                    className="h-px w-8 bg-gradient-to-r from-[#FF5500] to-[#f39318]"
                    variants={slideInRight}
                  ></motion.div>
                </div>
              </div>
              <AnimatedText 
                text="TOP SPORTS COACHING IN PUNE"
                className="text-3xl font-bold text-gray-900 md:text-4xl"
              />
            </motion.div>

            <motion.div 
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              animate={activitiesInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              {[
                {
                  title: "BADMINTON COURT | BADMINTON ACADEMY IN PUNE",
                  description: "Smash it up with the World Badminton Federation approved synthetic flooring. The Life Sports welcomes players from all age groups to join the fun.",
                  image: "https://www.thelifesports.in/wp-content/uploads/2020/02/best-football-club-in-pune-1.jpg",
                },
                {
                  title: "TABLE TENNIS COURT IN PUNE",
                  description: "Rooted in the core principles of excellence and passion, the Life Sports Academy aspires to offer the best Table Tennis Coaching in Pune.",
                  image: "https://www.thelifesports.in/wp-content/uploads/2020/02/WhatsApp-Image-2022-05-10-at-5.52.45-PM.jpg",
                },
                {
                  title: "GYMNASTICS CLASSES | GYMNASTICS ACADEMY IN PUNE",
                  description: "The Life Sport is one of the best academy for Gymnastics Coaching in Pune. At Life Sports Gymnastics Academy in Pune, each student is trained diversion better and without limitations.",
                  image: "https://www.thelifesports.in/wp-content/uploads/2020/02/DSC_0569-1__1582550125_103.51.93.157.jpg",
                },
                {
                  title: "DANCE",
                  description: "Standing among the reputed dance classes in Pune, the Life sports academy provides a platform to learn various dance forms and encourages various dancers to showcase their talent through various competitions.",
                  image: "https://www.thelifesports.in/wp-content/uploads/2020/02/Lifesports-Banner-2-1.jpg",
                },
                {
                  title: "BOX CRICKET",
                  description: "Cricket in India needs no introduction! The passion, thrill, and craze are just unmatchable. Cricket is one such game that can be played both socially and competitively.",
                  image: "https://www.thelifesports.in/wp-content/uploads/2020/02/best-football-club-in-pune-1.jpg",
                },
                {
                  title: "CRICKET NET",
                  description: "Cricket net is a practice net used by players to improve cricketing techniques. Cricket nets are enclosed by nets on either side and optionally the roof.",
                  image: "https://www.thelifesports.in/wp-content/uploads/2020/02/WhatsApp-Image-2022-05-10-at-5.52.45-PM.jpg",
                },
              ].map((activity, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  custom={index % 3} // Only use 3 different animation delays
                  transition={{ delay: (index % 3) * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm border-0 ring-1 ring-black/5 flex flex-col">
                    <CardHeader className="p-0">
                      <div className="relative h-56 w-full overflow-hidden">
                        <Image
                          src={activity.image}
                          alt={activity.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          priority={index < 3}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-white/90 hover:bg-white text-[#f39318] backdrop-blur-sm border-0 text-xs font-medium px-2.5 py-0.5 tracking-wide">
                            Sports Academy
                          </Badge>
                        </div>

                        {/* Floating Title */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#f39318] transition-colors duration-300">
                            {activity.title}
                          </h3>
                        </div>
                      </div>
                    </CardHeader>
                    <div className="flex flex-col flex-1">
                      <CardContent className="p-6 flex-1">
                        <div className="space-y-4">
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                            {activity.description}
                          </p>
                          
                          {/* Features List - simplified */}
                          <div className="flex flex-wrap gap-2 pt-2">
                            {['Professional Coaching', 'All Age Groups', 'Modern Facilities'].map((feature, idx) => (
                              <Badge 
                                key={idx}
                                variant="secondary" 
                                className="bg-[#f39318]/10 text-[#f39318] hover:bg-[#f39318]/20"
                              >
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 pt-0 flex gap-3 mt-auto border-t border-gray-100">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="flex-1"
                        >
                          <Button 
                            className="w-full bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:opacity-90 text-white transition-all duration-300 shadow-lg font-medium"
                          >
                            <span className="relative z-10">Enquire Now</span>
                          </Button>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="flex-[0.6]"
                        >
                          <Button 
                            variant="outline" 
                            className="w-full border border-[#f39318]/30 hover:border-[#f39318] hover:bg-gradient-to-r hover:from-[#f39318] hover:to-[#FF5500] hover:text-white transition-all duration-300 font-medium"
                          >
                            Details
                          </Button>
                        </motion.div>
                      </CardFooter>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Corporate Events Section */}
        <div id="corporate-events">
        <CorporateEventsSection />
        </div>

        {/* About Section */}
        <section id="about" className="relative py-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
          {/* Background Pattern - no parallax for better performance */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.2"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '60px 60px' }}></div>
          </div>

          <div className="container mx-auto px-4">
            {/* Section Header */}
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-4"
              ref={aboutRef}
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <div className="inline-flex items-center justify-center">
                <motion.div 
                  className="h-px w-8 bg-[#f39318]"
                  variants={slideInLeft}
                ></motion.div>
                <motion.span 
                  className="mx-4 text-3xl uppercase tracking-wider font-semibold text-[#f39318]"
                  variants={scaleIn}
                >About Us</motion.span>
                <motion.div 
                  className="h-px w-8 bg-[#f39318]"
                  variants={slideInRight}
                ></motion.div>
              </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* Left Content */}
              <motion.div 
                className="flex-1 max-w-2xl"
                initial="hidden"
                animate={aboutInView ? "visible" : "hidden"}
                variants={staggerContainer}
              >
                <motion.div className="inline-block" variants={fadeInUp}>
                  <span className="text-sm uppercase tracking-wider font-semibold bg-gradient-to-r from-[#f39318] to-yellow-500 bg-clip-text text-transparent">
                    Discover Our Legacy
                  </span>
                </motion.div>

                <div className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
                  <AnimatedText 
                    text="Pune's Premier" 
                    className="inline-block"
                  />
                  <span className="relative inline-block px-2">
                    <AnimatedText 
                      text="Sports Academy" 
                      className="relative z-10 bg-gradient-to-r from-[#f39318] to-yellow-500 bg-clip-text text-transparent"
                    />
                    <motion.div 
                      className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-yellow-500/30 to-[#f39318]/30 -rotate-2"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </span>
                </div>

                <motion.div 
                  className="space-y-6 text-lg text-gray-600"
                  variants={fadeInUp}
                >
                  <p className="leading-relaxed">
                    For over a decade, Life Sports has been at the forefront of sports excellence in Pune, Maharashtra. Our commitment goes beyond training – we're dedicated to making India a sporting nation, one athlete at a time.
                  </p>
                  <p className="leading-relaxed">
                    We provide a comprehensive sports environment where both children and adults can enhance their physical abilities and mental fortitude. Our state-of-the-art facilities and expert coaching create the perfect platform for athletic development.
                  </p>
                </motion.div>

                <motion.div 
                  className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8"
                  variants={fadeInUp}
                >
                  <CountUpAnimation end={10} label="Years of Excellence" />
                  <CountUpAnimation end={5000} duration={3000} label="Happy Athletes" />
                  <CountUpAnimation end={20} label="Expert Coaches" />
                </motion.div>
              </motion.div>

              {/* Right Images - simplified animation */}
              <motion.div 
                className="flex-1 relative w-full max-w-xl aspect-square"
                initial="hidden"
                animate={aboutInView ? "visible" : "hidden"}
                variants={scaleIn}
              >
                {/* Main Image */}
                <motion.div 
                  className="absolute w-[80%] h-[80%] top-0 right-0 transform transition-all duration-700 hover:scale-105"
                  initial={{ x: 50, opacity: 0 }}
                  animate={aboutInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="https://www.thelifesports.in/wp-content/uploads/2020/02/best-football-club-in-pune-1.jpg"
                      alt="Sports Training at Life Sports"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </motion.div>

                {/* Secondary Image */}
                <motion.div 
                  className="absolute w-[60%] h-[60%] bottom-0 left-0 transform transition-all duration-700 hover:scale-105"
                  initial={{ x: -50, opacity: 0 }}
                  animate={aboutInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="https://www.thelifesports.in/wp-content/uploads/2020/02/WhatsApp-Image-2022-05-10-at-5.52.45-PM.jpg"
                      alt="Indoor Sports Facility"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </motion.div>

                {/* Decorative Elements - only one subtle animation */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-yellow-500/10 to-[#f39318]/10 rounded-full blur-2xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <div id="testimonials">
        <TestimonialsSection  maxItems={4} />
        </div>
      </main>


      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <motion.div
          animate={{
            scale: showScrollTop ? 1 : 0.8,
            opacity: showScrollTop ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button 
            onClick={scrollToTop}
            className="h-14 w-14 rounded-full bg-[#f39318] p-0 shadow-lg hover:bg-[#f39318]/90 transition-all duration-300"
          >
            <ArrowUp className="h-6 w-6" />
          </Button>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="h-14 w-14 rounded-full bg-[#f39318] p-0 shadow-lg hover:bg-[#f39318]/90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
