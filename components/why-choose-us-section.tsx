"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Calendar, MapPin, Users, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Award,
    title: "6 BWF-Certified Courts",
    description: "Professional badminton courts approved by Badminton World Federation",
    stat: "6",
    statLabel: "Courts"
  },
  {
    icon: Calendar,
    title: "20+ Years Academy",
    description: "Two decades of excellence in sports training and athlete development",
    stat: "20+",
    statLabel: "Years"
  },
  {
    icon: MapPin,
    title: "Multi-Sport Hub",
    description: "Premier location in Baner–Aundh with world-class facilities",
    stat: "8+",
    statLabel: "Sports"
  },
  {
    icon: Users,
    title: "Family-Friendly",
    description: "Perfect environment for kids and adults to train together",
    stat: "5000+",
    statLabel: "Members"
  },
  {
    icon: CheckCircle,
    title: "Complete Services",
    description: "Coaching, membership, and court bookings all in one place",
    stat: "100%",
    statLabel: "Satisfaction"
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

export function WhyChooseUsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-24 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.2"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '60px 60px' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
              Why Choose Us
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
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Your Premier Sports Destination
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Experience excellence with our world-class facilities, expert coaching, and commitment to your success
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="relative overflow-hidden h-full group transition-all duration-500 hover:shadow-2xl border border-gray-100 bg-white">
                  {/* Gradient Border on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f39318] to-[#FF5500] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                  
                  <CardContent className="p-6 md:p-8 text-center h-full flex flex-col items-center">
                    {/* Icon */}
                    <motion.div
                      className="relative mb-6"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#f39318]/10 to-[#FF5500]/10 flex items-center justify-center group-hover:from-[#f39318]/20 group-hover:to-[#FF5500]/20 transition-all duration-500">
                        <Icon className="w-10 h-10 text-[#f39318] group-hover:text-[#FF5500] transition-colors duration-500" />
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-br from-[#f39318]/20 to-[#FF5500]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </motion.div>

                    {/* Stat */}
                    <div className="mb-4">
                      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                        {feature.stat}
                      </div>
                      <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">
                        {feature.statLabel}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#f39318] transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-grow">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

