"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users2, Trophy, Target, X } from "lucide-react"
import { motion } from "framer-motion"
import { useRef, useState } from "react"
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
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    age: "",
    sport: "",
    batchTime: "",
    date: "",
    day: ""
  })

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // WhatsApp number from contact page
    const whatsappNumber = "919767755977"
    const message = `Corporate Event Enquiry:%0A
Name: ${formData.name}%0A
Contact: ${formData.contact}%0A
Age: ${formData.age}%0A
Sport: ${formData.sport}%0A
Preferred Time: ${formData.batchTime}%0A
Date: ${formData.date}%0A
Day: ${formData.day}`

    const url = `https://wa.me/${whatsappNumber}?text=${message}`
    // open in new tab
    window.open(url, "_blank", "noopener,noreferrer")
    setIsSubmitting(false)
    setIsFormOpen(false)
    // reset
    setFormData({
      name: "",
      contact: "",
      age: "",
      sport: "",
      batchTime: "",
      date: "",
      day: ""
    })
  }
  
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
              src="/images/yuss.jpg"
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
              <Button 
                onClick={() => setIsFormOpen(true)}
                className="bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:opacity-90 text-white transition-all duration-300 hover:scale-105 shadow-lg px-8 py-6 text-base md:text-lg rounded-xl"
              >
                Enquire About Corporate Events
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => !isSubmitting && setIsFormOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-[61] w-full max-w-2xl rounded-2xl bg-white shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Corporate Event Enquiry</h3>
              <button
                onClick={() => !isSubmitting && setIsFormOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="px-6 py-5">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="flex flex-col text-sm font-medium text-gray-700">
                    Name
                    <input
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange("name")}
                      required
                      className="mt-2 rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-[#f39318] focus:outline-none focus:ring-2 focus:ring-[#f39318]/30"
                    />
                  </label>
                  <label className="flex flex-col text-sm font-medium text-gray-700">
                    Contact Number
                    <input
                      type="tel"
                      value={formData.contact}
                      onChange={handleInputChange("contact")}
                      required
                      className="mt-2 rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-[#f39318] focus:outline-none focus:ring-2 focus:ring-[#f39318]/30"
                    />
                  </label>
                  <label className="flex flex-col text-sm font-medium text-gray-700">
                    Age
                    <input
                      type="number"
                      min="1"
                      value={formData.age}
                      onChange={handleInputChange("age")}
                      required
                      className="mt-2 rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-[#f39318] focus:outline-none focus:ring-2 focus:ring-[#f39318]/30"
                    />
                  </label>
                  <label className="flex flex-col text-sm font-medium text-gray-700">
                    Sports
                    <input
                      type="text"
                      value={formData.sport}
                      onChange={handleInputChange("sport")}
                      required
                      className="mt-2 rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-[#f39318] focus:outline-none focus:ring-2 focus:ring-[#f39318]/30"
                    />
                  </label>
                  <label className="flex flex-col text-sm font-medium text-gray-700">
                    Preferred Batch Time
                    <input
                      type="text"
                      value={formData.batchTime}
                      onChange={handleInputChange("batchTime")}
                      required
                      className="mt-2 rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-[#f39318] focus:outline-none focus:ring-2 focus:ring-[#f39318]/30"
                    />
                  </label>
                  <label className="flex flex-col text-sm font-medium text-gray-700">
                    Date
                    <input
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange("date")}
                      required
                      className="mt-2 rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-[#f39318] focus:outline-none focus:ring-2 focus:ring-[#f39318]/30"
                    />
                  </label>
                  <label className="flex flex-col text-sm font-medium text-gray-700 md:col-span-2">
                    Day
                    <input
                      type="text"
                      value={formData.day}
                      onChange={handleInputChange("day")}
                      required
                      className="mt-2 rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-[#f39318] focus:outline-none focus:ring-2 focus:ring-[#f39318]/30"
                    />
                  </label>
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-gradient-to-r from-[#f39318] to-[#FF5500] px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:from-[#e8840f] hover:to-[#e54d00] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit & Send on WhatsApp"}
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Your details will open in WhatsApp to send directly to our team.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
} 