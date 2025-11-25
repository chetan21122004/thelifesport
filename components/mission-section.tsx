"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Target, Heart, Award, Users, Zap, Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Striving for the highest standards in everything we do"
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Love for sports drives our commitment to your success"
  },
  {
    icon: Award,
    title: "Integrity",
    description: "Honest, transparent, and ethical in all our practices"
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a supportive sports community for everyone"
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Constantly evolving our methods and facilities"
  },
  {
    icon: Trophy,
    title: "Achievement",
    description: "Celebrating every milestone, big or small"
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
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export function MissionSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-24 bg-gradient-to-br from-[#f39318]/5 via-white to-[#FF5500]/5 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#f39318]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#FF5500]/10 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Mission Statement */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#f39318]/10 to-[#FF5500]/10 border border-[#f39318]/20 mb-6"
            variants={fadeInUp}
          >
            <Target className="w-5 h-5 text-[#f39318]" />
            <span className="text-sm font-semibold text-[#f39318] uppercase tracking-wide">
              Our Mission
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
            variants={fadeInUp}
          >
            Create Champions for{" "}
            <span className="bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
              Life
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light mb-4"
            variants={fadeInUp}
          >
            Our mission is to nurture athletic excellence while building character, discipline, and lifelong values.
          </motion.p>
          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            variants={fadeInUp}
          >
            We believe that sports transform lives, and through dedicated coaching, world-class facilities, and unwavering support, we create champions who excel both on and off the field.
          </motion.p>
        </motion.div>

        {/* Core Values */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full group transition-all duration-500 hover:shadow-xl border border-gray-100 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 md:p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f39318]/10 to-[#FF5500]/10 flex items-center justify-center mx-auto mb-4 group-hover:from-[#f39318]/20 group-hover:to-[#FF5500]/20 transition-all duration-500">
                      <Icon className="w-8 h-8 text-[#f39318] group-hover:text-[#FF5500] transition-colors duration-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#f39318] transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          className="mt-16 text-center max-w-3xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg md:text-xl leading-relaxed opacity-95">
              To be India's most trusted and respected sports academy, recognized for producing champions who excel in sports and life, while building a stronger, healthier, and more active nation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

