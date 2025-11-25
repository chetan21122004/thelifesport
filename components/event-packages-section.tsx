"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Trophy, Calendar, Utensils, Building } from "lucide-react"
import Link from "next/link"

const packages = [
  {
    name: "Basic Package",
    price: "₹15,000",
    duration: "Half Day",
    icon: Users,
    features: [
      "Court/Turf access (4 hours)",
      "Basic equipment provided",
      "Water & refreshments",
      "Event coordinator",
      "Up to 30 participants"
    ],
    popular: false
  },
  {
    name: "Premium Package",
    price: "₹35,000",
    duration: "Full Day",
    icon: Trophy,
    features: [
      "Full facility access (8 hours)",
      "All equipment provided",
      "Lunch & refreshments",
      "Dedicated event manager",
      "Up to 60 participants",
      "Photography service",
      "Awards & certificates"
    ],
    popular: true
  },
  {
    name: "Enterprise Package",
    price: "Custom",
    duration: "Multi-day",
    icon: Building,
    features: [
      "Customized event planning",
      "Full facility access",
      "Premium catering",
      "Dedicated support team",
      "Unlimited participants",
      "Professional photography/videography",
      "Custom branding options",
      "Post-event follow-up"
    ],
    popular: false
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

export function EventPackagesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50"
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
              Event Packages
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
            Choose Your Package
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Flexible packages designed to meet your corporate event needs
          </motion.p>
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {packages.map((pkg, index) => {
            const Icon = pkg.icon
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className={`h-full relative overflow-hidden transition-all duration-500 ${
                  pkg.popular 
                    ? 'border-2 border-[#f39318] shadow-2xl scale-105 bg-gradient-to-br from-white to-[#f39318]/5' 
                    : 'border border-gray-200 hover:shadow-xl bg-white'
                }`}>
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                      MOST POPULAR
                    </div>
                  )}

                  <CardHeader className="text-center pb-4 pt-8">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-[#f39318] to-[#FF5500] flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                      {pkg.name}
                    </CardTitle>
                    <div className="mb-2">
                      <span className="text-4xl font-black text-[#f39318]">
                        {pkg.price}
                      </span>
                    </div>
                    <Badge className="bg-[#f39318]/10 text-[#f39318] border border-[#f39318]/20">
                      {pkg.duration}
                    </Badge>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#f39318] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button
                        className={`w-full ${
                          pkg.popular
                            ? 'bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white'
                            : 'border-2 border-[#f39318] text-[#f39318] hover:bg-[#f39318] hover:text-white'
                        }`}
                      >
                        {pkg.price === "Custom" ? "Get Custom Quote" : "Book This Package"}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-600 mb-4">
            All packages can be customized based on your specific requirements. Contact us for personalized quotes.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#f39318]" />
              <span>Flexible Scheduling</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#f39318]" />
              <span>Custom Group Sizes</span>
            </div>
            <div className="flex items-center gap-2">
              <Utensils className="w-4 h-4 text-[#f39318]" />
              <span>Catering Options</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

