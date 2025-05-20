"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import {
  Play,
  ChevronRight,
  ChevronDown,
  Phone,
  MapPin,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  ArrowUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CorporateEventsSection } from "@/components/corporate-events-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero3DScene } from "@/components/Hero3DScene"
import { cn } from "@/lib/utils"

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
    <div ref={ref} className="text-center transform transition-all duration-700 hover:scale-110">
      <div className="relative">
        <div className="text-5xl font-bold text-[#f39318]">
          {count}+
        </div>
        <div className="absolute -inset-1 rounded-lg group-hover:opacity-30 transition-all duration-500"></div>
      </div>
      <div className="mt-2 text-sm font-medium text-gray-600 uppercase tracking-wider">{label}</div>
    </div>
  )
}

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] overflow-hidden">
          {/* Background Image and Overlay */}
          <div className="absolute inset-0">
            <div className="relative h-full w-full">
              <div className="absolute inset-0">
                <Image
                  src="https://www.thelifesports.in/wp-content/uploads/2018/12/Life-Sports-Banner.jpg"
                  alt="The Life Sports Facility"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
              
              {/* Decorative Elements */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#f39318]/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF5500]/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
          
          {/* 3D Shuttlecock Model */}
          <Hero3DScene />

          {/* Content */}
          <div className="container relative z-10 mx-auto flex h-[90vh] flex-col items-center justify-center px-4">
            <div className="max-w-5xl text-center">
              {/* Subtitle */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#f39318] animate-pulse"></span>
                <span className="text-sm font-medium text-white">Welcome to The Life Sports Academy</span>
              </div>

              {/* Main Title */}
              <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                <span className="block mb-2 drop-shadow-lg">Invest One Hour a Day</span>
                <span className="bg-gradient-to-r from-[#f39318] via-yellow-400 to-[#f39318] bg-clip-text text-transparent drop-shadow-lg">
                  Transform Your Life
                </span>
              </h1>

              {/* Description */}
              <p className="mb-8 max-w-2xl mx-auto text-lg text-white md:text-xl drop-shadow-md">
                Join our premier sports facility and experience immediate results with long-term benefits for you and your family.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="group relative overflow-hidden bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white font-bold px-8 py-6 text-lg min-w-[200px] transition-all duration-300 hover:scale-105 shadow-lg">
                  <span className="relative z-10">Start Free Trial</span>
                </Button>
                <Button  className="relative overflow-hidden  bg-gradient-to-l from-[#f39318] to-[#FF5500] backdrop-blur-sm text-white font-bold px-3 py-6 text-lg min-w-[200px] transition-all duration-300 hover:scale-105 hover:text-white shadow-lg">
                  Explore Programs
                  <ChevronRight className=" h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80">
            <div className="animate-bounce">
              <ChevronDown className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">Scroll to explore</span>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <div className="text-center max-w-3xl mx-auto mb-4">
                <div className="inline-flex items-center justify-center">
                  <div className="h-px w-8 bg-gradient-to-r from-[#f39318] to-[#FF5500]"></div>
                  <span className="mx-4 text-3xl uppercase tracking-wider font-semibold bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">Activities</span>
                  <div className="h-px w-8 bg-gradient-to-r from-[#FF5500] to-[#f39318]"></div>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">TOP SPORTS COACHING IN PUNE</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                <Card key={index} className="group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl bg-white/80 backdrop-blur-sm border-0 ring-1 ring-black/5 flex flex-col">
                  <CardHeader className="p-0">
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={activity.image}
                        alt={activity.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
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
                        
                        {/* Features List */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          <Badge variant="secondary" className="bg-[#f39318]/10 text-[#f39318] hover:bg-[#f39318]/20">
                            Professional Coaching
                          </Badge>
                          <Badge variant="secondary" className="bg-[#f39318]/10 text-[#f39318] hover:bg-[#f39318]/20">
                            All Age Groups
                          </Badge>
                          <Badge variant="secondary" className="bg-[#f39318]/10 text-[#f39318] hover:bg-[#f39318]/20">
                            Modern Facilities
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0 flex gap-3 mt-auto border-t border-gray-100">
                      <Button 
                        className="flex-1 bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:opacity-90 text-white transition-all duration-300 hover:scale-[1.02] shadow-lg font-medium"
                      >
                        Enquire Now
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-[0.6] border border-[#f39318]/30 hover:border-[#f39318] hover:bg-gradient-to-r hover:from-[#f39318] hover:to-[#FF5500] hover:text-white transition-all duration-300 hover:scale-[1.02] font-medium"
                      >
                        Details
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Events Section */}
        <CorporateEventsSection />

        {/* About Section */}
        <section className="relative py-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.2"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '60px 60px' }}></div>
          </div>

          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-4">
              <div className="inline-flex items-center justify-center">
                <div className="h-px w-8 bg-[#f39318]"></div>
                <span className="mx-4 text-3xl uppercase tracking-wider font-semibold text-[#f39318]">About Us</span>
                <div className="h-px w-8 bg-[#f39318]"></div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* Left Content */}
              <div className="flex-1 max-w-2xl">
                <div className="inline-block">
                  <span className="text-sm uppercase tracking-wider font-semibold bg-gradient-to-r from-[#f39318] to-yellow-500 bg-clip-text text-transparent">
                    Discover Our Legacy
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
                  Pune's Premier
                  <span className="relative inline-block px-2">
                    <span className="relative z-10 bg-gradient-to-r from-[#f39318] to-yellow-500 bg-clip-text text-transparent">Sports Academy</span>
                    <div className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-yellow-500/30 to-[#f39318]/30 -rotate-2"></div>
                  </span>
                </h2>

                <div className="space-y-6 text-lg text-gray-600">
                  <p className="leading-relaxed">
                    For over a decade, Life Sports has been at the forefront of sports excellence in Pune, Maharashtra. Our commitment goes beyond training – we're dedicated to making India a sporting nation, one athlete at a time.
                  </p>
                  <p className="leading-relaxed">
                    We provide a comprehensive sports environment where both children and adults can enhance their physical abilities and mental fortitude. Our state-of-the-art facilities and expert coaching create the perfect platform for athletic development.
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
                  <CountUpAnimation end={10} label="Years of Excellence" />
                  <CountUpAnimation end={5000} duration={3000} label="Happy Athletes" />
                  <CountUpAnimation end={20} label="Expert Coaches" />
                </div>
              </div>

              {/* Right Images */}
              <div className="flex-1 relative w-full max-w-xl aspect-square">
                {/* Main Image */}
                <div className="absolute w-[80%] h-[80%] top-0 right-0 transform transition-all duration-700 hover:scale-105">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="https://www.thelifesports.in/wp-content/uploads/2020/02/best-football-club-in-pune-1.jpg"
                      alt="Sports Training at Life Sports"
                      fill
                      className="object-cover transform transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>

                {/* Secondary Image */}
                <div className="absolute w-[60%] h-[60%] bottom-0 left-0 transform transition-all duration-700 hover:scale-105">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="https://www.thelifesports.in/wp-content/uploads/2020/02/WhatsApp-Image-2022-05-10-at-5.52.45-PM.jpg"
                      alt="Indoor Sports Facility"
                      fill
                      className="object-cover transform transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-yellow-500/20 to-[#f39318]/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-gradient-to-br from-[#800020]/20 to-red-600/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection maxItems={4} />
      </main>

      <Footer />

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <Button 
          onClick={scrollToTop}
          className={cn(
            "h-14 w-14 rounded-full bg-[#f39318] p-0 shadow-lg hover:bg-[#f39318]/90 transition-all duration-300",
            showScrollTop ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
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
      </div>
    </div>
  )
}
