"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, Award, Users, Building, Trophy, Target } from "lucide-react"

const milestones = [
  {
    year: "2006",
    title: "Academy Founded",
    description: "The Life Sports Academy was established with a vision to create champions and promote sports excellence in Pune.",
    icon: Building,
    color: "from-[#f39318] to-[#FF5500]"
  },
  {
    year: "2010",
    title: "Facility Expansion",
    description: "Expanded facilities to include multiple sports disciplines and state-of-the-art infrastructure.",
    icon: Building,
    color: "from-[#f39318] to-[#FF5500]"
  },
  {
    year: "2015",
    title: "BWF Certification",
    description: "Achieved BWF (Badminton World Federation) certification for our badminton courts, meeting international standards.",
    icon: Award,
    color: "from-[#f39318] to-yellow-500"
  },
  {
    year: "2018",
    title: "5000+ Members Milestone",
    description: "Reached a significant milestone of training over 5000 athletes across various sports disciplines.",
    icon: Users,
    color: "from-[#f39318] to-[#FF5500]"
  },
  {
    year: "2020",
    title: "Multi-Sport Hub",
    description: "Transformed into a comprehensive multi-sport hub offering 8+ different sports activities.",
    icon: Trophy,
    color: "from-[#f39318] to-yellow-500"
  },
  {
    year: "2025",
    title: "20 Years of Excellence",
    description: "Celebrating two decades of excellence, continuing to shape champions and build India's sporting future.",
    icon: Target,
    color: "from-[#f39318] to-[#FF5500]"
  },
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
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

export function AboutTimelineSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

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
              Our Journey
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
            20 Years of Excellence
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            From humble beginnings to Pune's premier sports academy
          </motion.p>
        </motion.div>

        {/* Timeline - Desktop: Horizontal, Mobile: Vertical */}
        <motion.div
          className="relative"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#f39318] via-[#FF5500] to-[#f39318] transform -translate-y-1/2"></div>
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f39318] via-[#FF5500] to-[#f39318]"></div>

          {/* Timeline Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4 relative">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 top-8 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 z-10">
                    <motion.div
                      className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-[#f39318] to-[#FF5500] border-4 border-white shadow-lg"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className="md:mt-16 ml-0 md:ml-0 pt-16 md:pt-0"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center mb-4 mx-auto md:mx-0`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Year */}
                      <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent mb-2 text-center md:text-left">
                        {milestone.year}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center md:text-left">
                        {milestone.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center md:text-left">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

