"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

const eventImages = [
  {
    src: "/images/box-cricket.jpg",
    title: "Corporate Cricket Tournament",
    type: "Tournament"
  },
  {
    src: "/images/badminton_plyr1.jpg",
    title: "Team Building Badminton",
    type: "Team Building"
  },
  {
    src: "/images/gymnastics1.jpg",
    title: "Corporate Sports Day",
    type: "Sports Day"
  },
  {
    src: "/images/dance-1.jpg",
    title: "Corporate Event Celebration",
    type: "Event"
  },
  {
    src: "/images/hero-1.jpg",
    title: "Corporate Tournament",
    type: "Tournament"
  },
  {
    src: "/images/hero-2.jpg",
    title: "Team Building Activity",
    type: "Team Building"
  },
]

const eventTypes = ["All", "Tournament", "Team Building", "Sports Day", "Event"]

export function CorporateGallerySection() {
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredImages = selectedFilter === "All"
    ? eventImages
    : eventImages.filter(img => img.type === selectedFilter)

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-[#f39318] to-[#FF5500]"></div>
            <span className="mx-4 text-3xl md:text-4xl uppercase tracking-wider font-semibold bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
              Past Events
            </span>
            <div className="h-px w-8 bg-gradient-to-r from-[#FF5500] to-[#f39318]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Corporate Events Gallery
          </h2>
          <p className="text-lg text-gray-600">
            See how we've helped companies create memorable team building experiences
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {eventTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedFilter(type)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedFilter === type
                  ? 'bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-[#f39318] text-white text-xs font-semibold">
                  {image.type}
                </span>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-lg mb-1">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full h-full max-h-[90vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <Image
                src={selectedImage}
                alt="Corporate Event"
                fill
                className="object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(null)
                }}
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

