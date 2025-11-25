"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Building2 } from "lucide-react"

// Placeholder client logos - replace with actual client logos
const clients = [
  { name: "Tech Corp", logo: "/placeholder-logo.png" },
  { name: "Finance Solutions", logo: "/placeholder-logo.png" },
  { name: "Healthcare Plus", logo: "/placeholder-logo.png" },
  { name: "Education Group", logo: "/placeholder-logo.png" },
  { name: "Manufacturing Co", logo: "/placeholder-logo.png" },
  { name: "Retail Chain", logo: "/placeholder-logo.png" },
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

export function ClientLogosSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <Building2 className="w-6 h-6 text-[#f39318] mr-2" />
            <span className="text-2xl md:text-3xl font-bold text-gray-900">
              Corporate Clients We Served
            </span>
          </div>
          <p className="text-lg text-gray-600">
            Trusted by leading companies in Pune for their corporate events and team building activities
          </p>
        </motion.div>

        {/* Logos Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
            >
              <div className="relative w-full h-20">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                />
              </div>
              {/* Tooltip on hover */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-gray-900 text-white text-xs px-3 py-1 rounded whitespace-nowrap">
                  {client.name}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Message */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-600 text-lg">
            Join these leading companies and create unforgettable team experiences
          </p>
        </motion.div>
      </div>
    </section>
  )
}

