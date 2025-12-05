"use client"

import { useState, useEffect } from "react"
import { Phone, Calendar } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

export function MobileStickyBar() {
  const [isVisible, setIsVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show on mobile only
      if (window.innerWidth >= 768) {
        setIsVisible(false)
        return
      }

      // Show when scrolling down, hide when scrolling up
      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsVisible(true)
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Always show on mobile, hide on desktop
  if (typeof window !== "undefined" && window.innerWidth >= 768) {
    return null
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-2xl"
        >
          <div className="grid grid-cols-3 gap-0">
            {/* Call Button */}
            <a
              href="tel:+919767755977"
              className="flex flex-col items-center justify-center py-3 px-2 bg-white hover:bg-gray-50 active:bg-gray-100 transition-colors"
            >
              <Phone className="w-6 h-6 text-[#f39318] mb-1" />
              <span className="text-xs font-semibold text-gray-900">Call</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919767755977?text=Hi, I'm interested in learning more about The Life Sports"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center py-3 px-2 bg-white hover:bg-gray-50 active:bg-gray-100 transition-colors border-x border-gray-200"
            >
              <WhatsAppIcon className="w-6 h-6 text-green-600 mb-1" size={24} />
              <span className="text-xs font-semibold text-gray-900">WhatsApp</span>
            </a>

            {/* Book Trial Button */}
            <Link
              href="https://booking.thelifesports.in/bookings"
              className="flex flex-col items-center justify-center py-3 px-2 bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white hover:from-[#e8840f] hover:to-[#e54d00] transition-colors"
            >
              <Calendar className="w-6 h-6 mb-1" />
              <span className="text-xs font-semibold">Book my Court</span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

