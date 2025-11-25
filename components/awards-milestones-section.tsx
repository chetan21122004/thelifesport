"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Award, Trophy, Star, Medal, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const awards = [
  {
    title: "BWF Certified Courts",
    description: "6 Badminton World Federation approved courts meeting international standards",
    icon: Award,
    image: "/images/badminton_plyr1.jpg",
    year: "2015"
  },
  {
    title: "20 Years Excellence",
    description: "Two decades of continuous service in sports training and athlete development",
    icon: Trophy,
    image: "/images/badminton-p-2.jpg",
    year: "2025"
  },
  {
    title: "5000+ Happy Athletes",
    description: "Successfully trained over 5000 athletes across multiple sports disciplines",
    icon: Star,
    image: "/images/badminton-p-1.jpg",
    year: "2018"
  },
  {
    title: "Multi-Sport Excellence",
    description: "Recognized as Pune's premier multi-sport facility with 8+ sports activities",
    icon: Medal,
    image: "/images/gymnastics1.jpg",
    year: "2020"
  },
]

const milestones = [
  "First BWF Certification in Pune Region",
  "5000+ Athletes Trained Milestone",
  "Multi-Sport Hub Recognition",
  "20 Years of Continuous Excellence",
  "Family-Friendly Sports Academy Award",
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export function AwardsMilestonesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-24 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <motion.div
              className="h-px w-8 bg-gradient-to-r from-[#f39318] to-[#FF5500]"
              initial={{ width: 0 }}
              animate={isInView ? { width: 32 } : { width: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
            <motion.span
              className="mx-4 text-3xl md:text-4xl uppercase tracking-wider font-semibold bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Awards & Milestones
            </motion.span>
            <motion.div
              className="h-px w-8 bg-gradient-to-r from-[#FF5500] to-[#f39318]"
              initial={{ width: 0 }}
              animate={isInView ? { width: 32 } : { width: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
          </div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Recognitions & Achievements
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Celebrating our journey of excellence and recognition
          </motion.p>
        </motion.div>

        {/* Awards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {awards.map((award, index) => {
            const Icon = award.icon
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="relative overflow-hidden h-full group transition-all duration-500 hover:shadow-2xl border border-gray-100 bg-white cursor-pointer"
                  onClick={() => setSelectedImage(award.image)}
                >
                  <CardContent className="p-0">
                    {/* Award Image */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={award.image}
                        alt={award.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Year Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#f39318] text-white font-semibold">
                          {award.year}
                        </Badge>
                      </div>

                      {/* Icon */}
                      <div className="absolute bottom-4 right-4">
                        <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#f39318]" />
                        </div>
                      </div>
                    </div>

                    {/* Award Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#f39318] transition-colors duration-300">
                        {award.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Milestones List */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Key Milestones
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-[#f39318]/5 to-[#FF5500]/5 border border-[#f39318]/10 hover:border-[#f39318]/30 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <CheckCircle className="w-6 h-6 text-[#f39318] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">{milestone}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full h-full max-h-[90vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <Image
                src={selectedImage}
                alt="Award"
                fill
                className="object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(null)
                }}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

