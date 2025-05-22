"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users2, Trophy, Target } from "lucide-react"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const features = [
  {
    icon: Building2,
    title: "Corporate Sports Events",
    description: "Organize team building sports events for your company with our world-class facilities.",
  },
  {
    icon: Users2,
    title: "Team Building Activities",
    description: "Custom-designed activities to strengthen team bonding and improve workplace dynamics.",
  },
  {
    icon: Trophy,
    title: "Corporate Tournaments",
    description: "Host inter-corporate tournaments and championships in various sports.",
  },
  {
    icon: Target,
    title: "Wellness Programs",
    description: "Comprehensive wellness programs designed for corporate employees.",
  },
]

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8 }
  }
}

export function CorporateEventsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  
  return (
    <section ref={sectionRef} className="py-12 pt-6 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="text-center max-w-3xl mx-auto mb-6">
              <div className="inline-flex items-center justify-center">
                <div className="h-px w-8 bg-gradient-to-r from-[#f39318] to-[#FF5500]"></div>
                <span className="mx-4 text-3xl md:text-4xl uppercase tracking-wider font-semibold bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">Corporate Events</span>
                <div className="h-px w-8 bg-gradient-to-r from-[#FF5500] to-[#f39318]"></div>
              </div>
              
            </div>
          
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Transform your corporate events into memorable experiences with our state-of-the-art facilities and professional organization.
          </p>
        </motion.div>

        <motion.div 
          className="grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
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
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full"
              >
                <Card className="text-center hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden rounded-xl bg-white h-full group">
                  <CardContent className="pt-8 pb-6 px-6 relative h-full flex flex-col">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f39318] to-[#FF5500] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                    <div className="flex items-center justify-center">
                    <motion.div 
                      className="rounded-full bg-gradient-to-r from-[#f39318]/10 to-[#FF5500]/10 p-4 w-16 h-16 mx-auto  flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      <Icon className="w-8 h-8 text-[#f39318]" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    </div>

                    <p className="text-gray-600 flex-grow">{feature.description}</p>
                   
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div 
          className="mt-20 grid gap-8 md:grid-cols-2 items-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          transition={{ delay: 0.3, staggerChildren: 0.3 }}
        >
          <motion.div 
            className="relative h-[300px] sm:h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl order-2 md:order-1"
            variants={fadeIn}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="https://www.thelifesports.in/wp-content/uploads/2020/02/best-football-club-in-pune-1.jpg"
              alt="Corporate Events"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </motion.div>
          <motion.div 
            className="flex flex-col justify-center order-1 md:order-2"
            variants={fadeInUp}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
              Why Choose The Life Sports for Corporate Events?
            </h3>
            <motion.ul 
              className="space-y-4"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {[
                "Professional event management and coordination",
                "Multiple indoor and outdoor sports facilities",
                "Customizable packages to suit your requirements",
                "Expert coaches and event facilitators"
              ].map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start gap-3 group"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { 
                      opacity: 1, 
                      x: 0,
                      transition: { duration: 0.4, delay: index * 0.1 }
                    }
                  }}
                >
                  <motion.div 
                    className="rounded-full bg-gradient-to-r from-[#f39318]/20 to-[#FF5500]/20 p-2 mt-1 flex-shrink-0"
                    whileHover={{ scale: 1.2, rotate: 45 }}
                  >
                    <svg className="w-4 h-4 text-[#f39318]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300 text-base sm:text-lg">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div 
              className="mt-10"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <Button className="bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:opacity-90 text-white transition-all duration-300 hover:scale-105 shadow-lg px-8 py-6 text-base md:text-lg rounded-xl">
                Enquire About Corporate Events
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 