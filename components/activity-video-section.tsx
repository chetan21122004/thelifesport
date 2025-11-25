"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play, X } from "lucide-react"
import Image from "next/image"

interface ActivityVideoSectionProps {
  videoUrl?: string
  thumbnailUrl?: string
  title?: string
  description?: string
}

export function ActivityVideoSection({
  videoUrl,
  thumbnailUrl,
  title = "Watch Our Training",
  description = "See our expert coaching in action"
}: ActivityVideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showModal, setShowModal] = useState(false)

  // Extract video ID from YouTube/Vimeo URL
  const getVideoId = (url?: string) => {
    if (!url) return null
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)
      return match ? match[1] : null
    }
    if (url.includes("vimeo.com")) {
      const match = url.match(/vimeo\.com\/(?:.*\/)?(\d+)/)
      return match ? match[1] : null
    }
    return null
  }

  const videoId = getVideoId(videoUrl)
  const isYouTube = videoUrl?.includes("youtube") || videoUrl?.includes("youtu.be")
  const isVimeo = videoUrl?.includes("vimeo")

  const handlePlay = () => {
    setIsPlaying(true)
    setShowModal(true)
  }

  const handleClose = () => {
    setIsPlaying(false)
    setShowModal(false)
  }

  if (!videoUrl && !thumbnailUrl) {
    return null
  }

  return (
    <>
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {title}
              </h2>
              <p className="text-gray-600 text-lg">
                {description}
              </p>
            </div>

            {/* Video Thumbnail */}
            <div
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
              onClick={handlePlay}
            >
              {thumbnailUrl ? (
                <Image
                  src={thumbnailUrl}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#f39318] to-[#FF5500] flex items-center justify-center">
                  <Play className="w-20 h-20 text-white" />
                </div>
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-10 h-10 md:w-12 md:h-12 text-[#f39318] ml-1" fill="currentColor" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {showModal && videoId && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            {isYouTube && (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
            {isVimeo && (
              <iframe
                src={`https://player.vimeo.com/video/${videoId}?autoplay=1`}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            )}
            
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors z-10"
              onClick={handleClose}
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

