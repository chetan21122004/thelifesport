"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { GoogleReviewsWidget } from "@/components/google-reviews-widget"
import { VideoTestimonialsSection } from "@/components/video-testimonials-section"
import { TestimonialsFilter } from "@/components/testimonials-filter"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/badminton_plyr1.jpg"
            alt="Testimonials - The Life Sports"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-5 py-2 backdrop-blur-sm mb-6"
              variants={fadeInUp}
            >
              <span className="h-2 w-2 rounded-full bg-[#f39318] animate-pulse"></span>
              <span className="text-sm font-medium text-white">What Our Members Say</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Testimonials
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Real stories from our members, parents, and athletes about their journey with The Life Sports
            </p>
          </motion.div>
        </div>
      </section>

      {/* Google Reviews Widget */}
      <GoogleReviewsWidget />

      {/* Video Testimonials */}
      <VideoTestimonialsSection />

      {/* Text Testimonials with Filter */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="h-px w-8 bg-gradient-to-r from-[#f39318] to-[#FF5500]"></div>
              <span className="mx-4 text-3xl md:text-4xl uppercase tracking-wider font-semibold bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                Member Testimonials
              </span>
              <div className="h-px w-8 bg-gradient-to-r from-[#FF5500] to-[#f39318]"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Stories of Success
            </h2>
            <p className="text-lg text-gray-600">
              Read what our community has to say about their experience
            </p>
          </div>

          <TestimonialsFilter />
        </div>
      </section>
    </div>
  )
}

