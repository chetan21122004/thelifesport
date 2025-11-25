"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Heart, Award } from "lucide-react"

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
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
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

export function FamilySportsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  // Family photos - using existing images as placeholders
  const familyImages = [
    "/images/badminton_plyr1.jpg",
    "/images/badminton_plyr2.jpg",
    "/images/badminton_plyr3.jpg",
    "/images/badminton_plyr4.jpg",
  ]

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#f39318]/5 to-[#FF5500]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#f39318]/5 to-[#FF5500]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side - Images */}
          <motion.div
            className="flex-1 w-full lg:max-w-2xl"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {/* Sophisticated Image Layout - Masonry Style */}
            <div className="relative">
              {/* Main Featured Image - Large */}
              <motion.div
                variants={fadeInUp}
                className="relative mb-4 rounded-3xl overflow-hidden shadow-2xl group"
                style={{ aspectRatio: '16/10' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Image
                  src={familyImages[0]}
                  alt="Family sports training at The Life Sports"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500"></div>
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-[#f39318] animate-pulse"></div>
                      <span className="text-white/90 text-sm font-semibold uppercase tracking-wider">
                        Featured
                      </span>
                    </div>
                    <h3 className="text-white text-xl md:text-2xl font-bold">
                      Family Training Together
                    </h3>
                  </motion.div>
                </div>
              </motion.div>

              {/* Secondary Images Grid - 3 Column Layout */}
              <div className="grid grid-cols-3 gap-4">
                {familyImages.slice(1, 4).map((image, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="relative rounded-2xl overflow-hidden shadow-xl group"
                    style={{ aspectRatio: '4/5' }}
                    whileHover={{ scale: 1.05, y: -5, zIndex: 10 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <Image
                      src={image}
                      alt={`Family sports activity ${index + 2}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-115"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                    {/* Hover Effect - Shine */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                    />
                   
                  </motion.div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#f39318]/10 to-[#FF5500]/10 rounded-full blur-2xl opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-[#f39318]/10 to-[#FF5500]/10 rounded-full blur-2xl opacity-50"></div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="flex-1 max-w-2xl"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#f39318]/10 to-[#FF5500]/10 border border-[#f39318]/20 mb-4">
                <Heart className="w-4 h-4 text-[#f39318]" />
                <span className="text-sm font-semibold text-[#f39318] uppercase tracking-wide">
                  Family First
                </span>
              </div>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              A Sports Academy for the{" "}
              <span className="bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                Entire Family
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              At The Life Sports, we believe sports bring families together. Our unique
              programs allow kids and adults to train side-by-side, creating lasting bonds
              while building strength, skill, and confidence.
            </motion.p>

            {/* Key Features */}
            <motion.div
              variants={staggerContainer}
              className="space-y-4 mb-8"
            >
              {[
                {
                  icon: Users,
                  title: "Family Badminton Coaching",
                  description: "Parents and children train together in our specialized family programs"
                },
                {
                  icon: Award,
                  title: "All Skill Levels Welcome",
                  description: "From beginners to advanced players, everyone finds their place"
                },
                {
                  icon: Heart,
                  title: "Bond Through Sports",
                  description: "Create unforgettable memories while achieving fitness goals together"
                }
              ].map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:border-[#f39318]/30 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#f39318]/10 to-[#FF5500]/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#f39318]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeInUp}>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white font-bold px-8 py-6 text-lg min-w-[250px] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <motion.span
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  />
                  <span className="relative z-10">Book Family Trial</span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

