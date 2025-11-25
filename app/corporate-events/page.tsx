"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { EventPackagesSection } from "@/components/event-packages-section"
import { CorporateGallerySection } from "@/components/corporate-gallery-section"
import { ClientLogosSection } from "@/components/client-logos-section"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

export default function CorporateEventsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/box-cricket.jpg"
            alt="Corporate Events at The Life Sports"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-5 py-2 backdrop-blur-sm mb-6"
              variants={fadeInUp}
            >
              <span className="h-2 w-2 rounded-full bg-[#f39318] animate-pulse"></span>
              <span className="text-sm font-medium text-white">Corporate Excellence</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Corporate Events & Team Building
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Host unforgettable corporate events, team building activities, and tournaments at Pune's premier sports facility
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Packages */}
      <EventPackagesSection />

      {/* Corporate Gallery */}
      <CorporateGallerySection />

      {/* Client Logos */}
      <ClientLogosSection />

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gradient-to-r from-[#f39318] to-[#FF5500]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Plan Your Corporate Event?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today to discuss your requirements and get a customized quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <button className="bg-white text-[#f39318] font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg">
                  Get a Quote
                </button>
              </a>
              <a href="tel:+919767755977">
                <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg">
                  Call Now
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

