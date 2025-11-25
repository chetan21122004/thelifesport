"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Trophy, Star, User } from "lucide-react"

// Sample coach data - replace with actual data
const coaches = [
  {
    name: "Krantivir",
    specialization: "Badminton",
    photo: "/images/badminton_plyr1.jpg",
    achievements: ["BWF Certified", "Olympic Level Coach", "National Player"],
    experience: "15+ Years",
    description: "Expert badminton coach with international experience and BWF certification."
  },
  {
    name: "Expert Coach",
    specialization: "Table Tennis",
    photo: "/images/ttcourt.jpg",
    achievements: ["State Level", "Professional Trainer"],
    experience: "10+ Years",
    description: "Professional table tennis coach specializing in technique and strategy."
  },
  {
    name: "Fitness Expert",
    specialization: "Gymnastics",
    photo: "/images/gymnastics1.jpg",
    achievements: ["National Level", "Certified Trainer"],
    experience: "12+ Years",
    description: "Experienced gymnastics coach focused on flexibility and strength training."
  },
  {
    name: "Dance Instructor",
    specialization: "Dance",
    photo: "/images/dance-1.jpg",
    achievements: ["Professional Dancer", "Choreographer"],
    experience: "8+ Years",
    description: "Creative dance instructor teaching various dance forms and styles."
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

export function CoachesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
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
              Our Expert Coaches
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
            Meet Our Champions
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            World-class coaches dedicated to your success
          </motion.p>
        </motion.div>

        {/* Coaches Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {coaches.map((coach, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="relative overflow-hidden h-full group transition-all duration-500 hover:shadow-2xl border border-gray-100 bg-white">
                {/* Gradient Border on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#f39318] to-[#FF5500] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                
                <CardContent className="p-0">
                  {/* Coach Photo */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={coach.photo}
                      alt={coach.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Experience Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-[#f39318] text-white font-semibold">
                        {coach.experience}
                      </Badge>
                    </div>

                    {/* Specialization */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-white/90 text-[#f39318] font-semibold mb-2">
                        {coach.specialization}
                      </Badge>
                    </div>
                  </div>

                  {/* Coach Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#f39318] transition-colors duration-300">
                      {coach.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {coach.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {coach.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-[#f39318] flex-shrink-0" />
                          <span className="text-sm text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

