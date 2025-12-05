"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const banners = [
  {
    id: 1,
    title: "Get 5% OFF – Post Google Review",
    description: "Share your experience and get 5% discount on your next booking",
    cta: "Post Review",
    link: "https://share.google/769YQKGrvx9c1GG5P",
    bgColor: "from-[#f39318] to-[#FF5500]",
    textColor: "text-white"
  },
  {
    id: 2,
    title: "Family Badminton Coaching",
    description: "Kids + Adults Together - Train as a family and create lasting memories",
    cta: "Book Family Trial",
    link: "https://booking.thelifesports.in/bookings",
    bgColor: "from-blue-600 to-purple-600",
    textColor: "text-white"
  },
  {
    id: 3,
    title: "Corporate Events & Tournaments Available",
    description: "Host your next corporate event or tournament at our world-class facility",
    cta: "Learn More",
    link: "/corporate-events",
    bgColor: "from-green-600 to-teal-600",
    textColor: "text-white"
  },
  {
    id: 4,
    title: "Premium Digital LED Advertising",
    description: "Advertise your brand at The Life Sports - Reach active sports enthusiasts",
    cta: "Contact Us",
    link: "/contact",
    bgColor: "from-purple-600 to-pink-600",
    textColor: "text-white"
  },
]

export function PromotionalBannersSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dismissedBanners, setDismissedBanners] = useState<number[]>([])
  const [isPaused, setIsPaused] = useState(false)

  const visibleBanners = banners.filter(b => !dismissedBanners.includes(b.id))

  useEffect(() => {
    if (visibleBanners.length === 0 || isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % visibleBanners.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [visibleBanners.length, isPaused])

  const handleDismiss = (bannerId: number) => {
    setDismissedBanners((prev) => [...prev, bannerId])
    if (currentIndex >= visibleBanners.length - 1) {
      setCurrentIndex(0)
    }
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + visibleBanners.length) % visibleBanners.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % visibleBanners.length)
  }

  if (visibleBanners.length === 0) return null

  const currentBanner = visibleBanners[currentIndex]

  return (
    <section
      className="relative py-4 bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBanner.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between gap-4"
          >
            {/* Content */}
            <div className="flex-1 flex items-center gap-4">
              <div className={`flex-1 bg-gradient-to-r ${currentBanner.bgColor} rounded-lg px-6 py-3 ${currentBanner.textColor}`}>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{currentBanner.title}</h3>
                    <p className="text-sm opacity-90">{currentBanner.description}</p>
                  </div>
                  <Link href={currentBanner.link}>
                    <Button
                      variant="secondary"
                      className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                    >
                      {currentBanner.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Controls */}
            {visibleBanners.length > 1 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevious}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Previous banner"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-1">
                  {visibleBanners.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/40'
                      }`}
                      aria-label={`Go to banner ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Next banner"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Dismiss Button */}
            <button
              onClick={() => handleDismiss(currentBanner.id)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

