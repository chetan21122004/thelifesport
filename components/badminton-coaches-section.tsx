"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useInView } from "react-intersection-observer"

const coaches = [
  {
    name: "Kranti Vir",
    designation: "Chief Coach",
    photo: "https://k9badmintonworld.in/wp-content/uploads/2024/12/Untitled-300-x-400-px-1.png"
  },
  {
    name: "Deepak Verma",
    designation: "Senior Coach",
    photo: "https://k9badmintonworld.in/wp-content/uploads/2024/11/4.jpeg"
  },
  {
    name: "Junior Coach",
    designation: "Junior Coach",
    photo: "https://k9badmintonworld.in/wp-content/uploads/2024/11/3-scaled.jpeg"
  },
  {
    name: "Dishant Thalor",
    designation: "Senior Coach",
    photo: "https://k9badmintonworld.in/wp-content/uploads/2024/11/5.jpeg"
  }
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

export function BadmintonCoachesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section
      ref={ref}
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <motion.div
              className="h-px w-8 bg-gradient-to-r from-[#f39318] to-[#FF5500]"
              initial={{ width: 0 }}
              animate={inView ? { width: 32 } : { width: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
            <motion.span
              className="mx-4 text-3xl md:text-4xl uppercase tracking-wider font-semibold bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Expert Team
            </motion.span>
            <motion.div
              className="h-px w-8 bg-gradient-to-r from-[#FF5500] to-[#f39318]"
              initial={{ width: 0 }}
              animate={inView ? { width: 32 } : { width: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
          </div>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Meet Our Expert Coaches
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Learn from certified professionals dedicated to your badminton journey
          </motion.p>
        </motion.div>

        {/* Coaches Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {coaches.map((coach, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full overflow-hidden group transition-all duration-500 hover:shadow-2xl border border-gray-100 bg-white">
                <CardContent className="p-0">
                  {/* Coach Photo */}
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image
                      src={coach.photo}
                      alt={coach.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    
                    {/* Designation Badge */}
                    <div className="absolute top-4 left-4 right-4">
                      <Badge className="bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white font-semibold text-xs px-3 py-1.5 border-none">
                        {coach.designation}
                      </Badge>
                    </div>
                    
                    {/* Name Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                      <h3 className="text-xl md:text-2xl font-bold mb-1">
                        {coach.name}
                      </h3>
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

