"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { AboutTimelineSection } from "@/components/about-timeline-section"
import { CoachesSection } from "@/components/coaches-section"
import { MissionSection } from "@/components/mission-section"
import { AwardsMilestonesSection } from "@/components/awards-milestones-section"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/badminton-p-2.jpg"
            alt="The Life Sports Academy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70"></div>
        </div>

        {/* Content */}
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
              <span className="text-sm font-medium text-white">Our Story</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              About The Life Sports
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Two decades of excellence in sports training, shaping champions and building a sporting nation since 2006
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <MissionSection />

      {/* Timeline Section */}
      <AboutTimelineSection />

      {/* Coaches Section */}
      <CoachesSection />

      {/* Awards & Milestones Section */}
      <AwardsMilestonesSection />

      {/* Legacy Section */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Building Champions for Life
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                Established in 2006, The Life Sports has been at the forefront of sports excellence in Pune, Maharashtra for over 20 years. Our commitment goes beyond training – we're dedicated to making India a sporting nation, one athlete at a time.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                We provide a comprehensive sports environment where both children and adults can enhance their physical abilities and mental fortitude. Our state-of-the-art facilities and expert coaching create the perfect platform for athletic development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

