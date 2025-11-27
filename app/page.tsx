"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import {
  ChevronRight,
  ChevronDown,
  ArrowUp,
} from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { CorporateEventsSection } from "@/components/corporate-events-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { FamilySportsSection } from "@/components/family-sports-section"
import { PromotionalBannersSection } from "@/components/promotional-banners-section"
import { MobileStickyBar } from "@/components/mobile-sticky-bar"

import { Hero3DScene } from "@/components/Hero3DScene"

// AutoplayCarousel Component
function AutoplayCarousel() {
  const [api, setApi] = useState<any>()
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!api) return

    let autoplay: NodeJS.Timeout

    const startAutoplay = () => {
      autoplay = setInterval(() => {
        api.scrollNext()
      }, 3000)
    }

    const stopAutoplay = () => {
      if (autoplay) {
        clearInterval(autoplay)
      }
    }

    if (!isHovered) {
      startAutoplay()
    } else {
      stopAutoplay()
    }

    return () => stopAutoplay()
  }, [api, isHovered])

  const activities = [
    {
      title: "Badminton Academy",
      description: "Train with Olympic certified coaches at K9 Badminton World. 6 BWF approved courts with expert coaching by Krantivir. Programs: Beginner, Basic, Higher Basic, Intermediate & Corporate batches available.",
      image: "/images/badminton_plyr1.jpg",
      href: "/activities/badminton",
    },
    {
      title: "Table Tennis Courts",
      description: "Rooted in the core principles of excellence and passion, the Life Sports Academy aspires to offer the best Table Tennis Coaching in Pune.",
      image: "/images/ttcourt.jpg",
      href: "/activities/table-tennis",
    },
    {
      title: "Gymnastics Classes",
      description: "The Life Sport is one of the best academy for Gymnastics Coaching in Pune. At Life Sports Gymnastics Academy in Pune, each student is trained diversion better and without limitations.",
      image: "/images/gymnastics1.jpg",
      href: "/activities/gymnastics",
    },
    {
      title: "Dance Classes",
      description: "Standing among the reputed dance classes in Pune, the Life sports academy provides a platform to learn various dance forms and encourages various dancers to showcase their talent through various competitions.",
      image: "/images/dance-1.jpg",
      href: "/activities/dance",
    },
    {
      title: "Cricket Net and Cricket Net with Bowling Machine",
      description: "Professional cricket nets with auto bowling machines for practice. Perfect for improving batting techniques with consistent ball delivery and expert coaching support.",
      image: "/images/cricket-net2.jpg",
      href: "/activities/cricketNet",
    },
    {
      title: "Pickle Ball Courts",
      description: "Experience the fastest-growing paddle sport at our premium pickle ball courts. Professional equipment, expert coaching, and a welcoming community for all skill levels.",
      image: "/images/bg-7.JPG",
      href: "/activities/pickle-ball",
    },
    {
      title: "Mini Pro Turf Facility",
      description: "Premium synthetic turf designed for multiple sports. Weather-resistant, professional-grade surface perfect for football, cricket, and various outdoor activities.",
      image: "/images/mini-turf.jpg",
      href: "/activities/mini-pro-turf",
    },
    {
      title: "Boxing Fitness - Fittera Collaboration",
      description: "Experience the best 1-hour boxing fitness in town with Fittera The Boxing Gym. Train with National and International level players under expert guidance.",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=500&auto=format&fit=crop&q=60",
      href: "/activities/boxing",
    },
  ]

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {activities.map((activity, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
            <motion.div
              variants={fadeInUp}
              custom={index % 3}
              transition={{ delay: (index % 3) * 0.1 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="group relative overflow-hidden transition-all duration-500 hover:shadow-2xl bg-white/80 backdrop-blur-sm border-0 ring-1 ring-black/5 hover:ring-2 hover:ring-transparent hover:bg-gradient-to-br hover:from-[#f39318]/5 hover:to-[#FF5500]/5 flex flex-col h-full">
                {/* Gradient Border on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#f39318] to-[#FF5500] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg -z-10 blur-sm"></div>
                <CardHeader className="p-0">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority={index < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 hover:bg-white text-[#f39318] backdrop-blur-sm border-0 text-xs font-medium px-2.5 py-0.5 tracking-wide">
                        Sports Academy
                      </Badge>
                    </div>

                    {/* Floating Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-lg md:text-xl font-extrabold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-[#f39318] group-hover:to-[#FF5500] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                        {activity.title}
                      </h3>
                    </div>
                  </div>
                </CardHeader>
                <div className="flex flex-col flex-1">
                  <CardContent className="p-6 flex-1">
                    <div className="space-y-4">
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-2">
                        {activity.description}
                      </p>

                      {/* Features List - simplified */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {['All Age Groups', 'Modern Facilities'].map((feature, idx) => (
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
                      <Link href="/contact">
                        <Button
                          className="w-full bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:opacity-90 text-white transition-all duration-300 shadow-lg font-medium"
                        >
                          <span className="relative z-10">Enquire Now</span>
                        </Button>
                      </Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="flex-[0.6]"
                    >
                      <Link href={activity.href}>
                        <Button
                          variant="outline"
                          className="w-full border border-[#f39318]/30 hover:border-[#f39318] hover:bg-gradient-to-r hover:from-[#f39318] hover:to-[#FF5500] hover:text-white transition-all duration-300 font-medium"
                        >
                          Details
                        </Button>
                      </Link>
                    </motion.div>
                  </CardFooter>
                </div>
              </Card>
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex -left-12 bg-white/90 hover:bg-white border-[#f39318]/30 hover:border-[#f39318] text-[#f39318] hover:text-[#f39318]" />
      <CarouselNext className="hidden md:flex -right-12 bg-white/90 hover:bg-white border-[#f39318]/30 hover:border-[#f39318] text-[#f39318] hover:text-[#f39318]" />
    </Carousel>
  )
}

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Use throttled scroll position instead of raw scroll events
  const scrollY = useThrottledScrollY(30);

  // Hero background images for slider
  const heroImages = [
    "/images/bg-1.JPG",
    "/images/bg-2.JPG",
    "/images/bg-3.JPG",
    "/images/bg-4.JPG",
    "/images/bg-5.JPG",
    "/images/bg-6.JPG",
    "/images/bg-7.JPG",

  ]

  // Auto-advance background slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [heroImages.length])

  // Animation hooks for different sections with proper thresholds
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [activitiesRef, activitiesInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    setShowScrollTop(scrollY > 400)
  }, [scrollY])

  // Handle initial hash navigation
  useEffect(() => {
    const handleHashScroll = () => {
      if (window.location.hash) {
        const id = window.location.hash.replace("#", "")
        const element = document.getElementById(id)
        if (element) {
          setTimeout(() => {
            const yOffset = -80 // Navbar height offset
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({ top: y, behavior: "smooth" })
          }, 100)
        }
      }
    }

    handleHashScroll()
    window.addEventListener('hashchange', handleHashScroll)
    return () => window.removeEventListener('hashchange', handleHashScroll)
  }, [])

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
        <section className="relative min-h-[90vh] overflow-hidden ">
          {/* Background Video/Image and Overlay */}
          <div className="absolute inset-0">
            <div className="relative h-full w-full">
              <motion.div
                className="absolute inset-0 will-change-transform"
                style={{ y: calculateParallax(-0.05) }}
              >
                {/* Background Image Slider */}
                {heroImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: index === currentImageIndex ? 1 : 0,
                      scale: index === currentImageIndex ? 1 : 1.1,
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut"
                    }}
                  >
                    <Image
                      src={image}
                      alt={`The Life Sports Facility ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      quality={90}
                      onError={(e) => {
                        // Fallback to first image if any image fails to load
                        const target = e.target as HTMLImageElement
                        if (target.src !== heroImages[0]) {
                          target.src = heroImages[0]
                        }
                      }}
                    />
                  </motion.div>
                ))}

                {/* Video Background - overlays images if available (optional) */}
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-1000"
                  poster={heroImages[0]}
                >
                  <source src="/videos/hero-video.webm" type="video/webm" />
                  <source src="/videos/hero-video.mp4" type="video/mp4" />
                </video>
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
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
              </div>
            </div>
          </div>

          {/* Slider Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className="group relative"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                    ? "w-8 bg-[#f39318]"
                    : "w-2 bg-white/40 hover:bg-white/60"
                    }`}
                />
              </button>
            ))}
          </div>

          {/* 3D Shuttlecock Model - no parallax for better performance */}
          <Hero3DScene />

          {/* Content */}
          <div className="container relative z-10 mx-auto flex h-[90vh] flex-col items-center justify-start px-4 sm:px-6 lg:px-8">
            <motion.div
              ref={heroRef}
              className="max-w-6xl w-full"
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              {/* Top Section: Main Content */}
              <div className="text-center mb-12">
                {/* Elegant Badge */}
                <motion.div
                  className="inline-flex items-center gap-2.5 mt-24 rounded-full border border-white/25 bg-black/20 backdrop-blur-md px-5 py-2 mb-8"
                  variants={fadeIn}
                >

                  <span className="text-xs font-medium text-white/95 tracking-wider uppercase">Pune's Premier Sports Academy</span>
                </motion.div>

                {/* Main Headline */}
                <motion.div variants={fadeInUp} className="mb-6">

                  <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-[#f39318] via-yellow-400 to-[#f39318] bg-clip-text text-transparent leading-tight tracking-tight">
                    Bas Ek Ghanta. Zindagi Badal Jaayegi.
                  </h2>
                </motion.div>

                {/* Description */}
                <motion.p
                  variants={fadeInUp}
                  className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed font-light mb-10"
                >
                  Join our premier sports facility and experience immediate results with long-term benefits for you and your family.
                </motion.p>

                {/* Trust Indicators - Horizontal Bar */}
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-10"
                >
                  {[
                    { value: "20+", label: "Years Excellence" },
                    { value: "5000+", label: "Happy Members" },
                    { value: "6", label: "BWF Courts" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl md:text-4xl font-black text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs md:text-sm text-white/80 font-medium uppercase tracking-widest">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Bottom Section: CTA Buttons */}
              <motion.div
                className="flex  flex-col sm:flex-row gap-4 justify-center mb-5 items-center"
                variants={fadeInUp}
              >
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="group relative overflow-hidden bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white font-bold px-4 py-6 text-base md:text-lg min-w-[200px] md:min-w-[220px] shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      <motion.span
                        className="absolute inset-0 bg-white/25"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                      <span className="relative z-10">Book Free Trial</span>
                    </Button>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Button
                    onClick={() => {
                      const activitiesSection = document.getElementById('activities')
                      if (activitiesSection) {
                        activitiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }
                    }}
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/40 bg-white/10 backdrop-blur-md text-white font-bold  py-6 text-base md:text-lg min-w-[150px] md:min-w-[220px] hover:bg-white/20 hover:border-white hover:shadow-xl transition-all duration-300"
                  >
                    Explore Activities
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>


        </section>

        {/* Promotional Banners */}
        <PromotionalBannersSection />

        {/* Section Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#f39318]/30 to-transparent"></div>

        {/* Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* Section Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#FF5500]/30 to-transparent"></div>

        {/* Family Sports Section */}
        <FamilySportsSection />

        {/* Section Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#f39318]/30 to-transparent"></div>

        {/* Activities Section */}
        <section id="activities" className="py-20 md:py-24 bg-gray-50">
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
                  >
                  </motion.div>
                  <motion.span
                    className="mx-4 text-3xl uppercase tracking-wider font-semibold bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent"
                    variants={scaleIn}
                  >Activities</motion.span>
                  <motion.div
                    className="h-px w-8 bg-gradient-to-r from-[#FF5500] to-[#f39318]"
                    variants={slideInRight}
                  >
                  </motion.div>
                </div>
              </div>
              <AnimatedText
                text="TOP SPORTS COACHING IN PUNE"
                className="text-4xl font-bold text-gray-900 md:text-5xl"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              animate={activitiesInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <AutoplayCarousel />
            </motion.div>
          </div>
        </section>

        {/* Corporate Events Section */}
        <div id="corporate-events">
          <CorporateEventsSection />
        </div>

        {/* Section Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#FF5500]/30 to-transparent"></div>

        {/* About Section */}
        <section id="about" className="relative py-20 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
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
                  className="mx-4 text-4xl md:text-5xl uppercase tracking-wider font-semibold text-[#f39318]"
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
                    Established in 2006, Life Sports has been at the forefront of sports excellence in Pune, Maharashtra for over 20 years. Our commitment goes beyond training – we're dedicated to making India a sporting nation, one athlete at a time.
                  </p>
                  <p className="leading-relaxed">
                    We provide a comprehensive sports environment where both children and adults can enhance their physical abilities and mental fortitude. Our state-of-the-art facilities and expert coaching create the perfect platform for athletic development.
                  </p>
                </motion.div>

                <motion.div
                  className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8"
                  variants={fadeInUp}
                >
                  <CountUpAnimation end={20} label="Years of Excellence" />
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
                      src="/images/badminton-p-2.jpg"
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
                      src="/images/badminton-p-1.jpg"
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
          <TestimonialsSection maxItems={4} />
        </div>
      </main>


      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
        {/* WhatsApp Button */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            href="https://wa.me/919767755977?text=Hi, I'm interested in learning more about The Life Sports"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
          >
            <Button
              className="h-14 w-14 rounded-full bg-[#25D366] p-0 shadow-lg hover:bg-[#25D366]/90 transition-all duration-300"
            >
              <WhatsAppIcon className="h-6 w-6 text-white" size={24} />
            </Button>
          </a>
        </motion.div>

        {/* Scroll to Top Button */}
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
      </div>
    </div>
  )
}
