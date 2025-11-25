"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Play, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const videoTestimonials = [
  {
    title: "Parent Testimonial - Badminton Training",
    thumbnail: "/images/badminton_plyr1.jpg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    author: "Parent Name",
    type: "Parent"
  },
  {
    title: "Student Success Story",
    thumbnail: "/images/badminton_plyr2.jpg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    author: "Student Name",
    type: "Student"
  },
  {
    title: "Family Badminton Experience",
    thumbnail: "/images/badminton_plyr3.jpg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    author: "Family Member",
    type: "Family"
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

export function VideoTestimonialsSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [selectedFilter, setSelectedFilter] = useState<string>("All")

  const filteredVideos = selectedFilter === "All"
    ? videoTestimonials
    : videoTestimonials.filter(v => v.type === selectedFilter)

  const getVideoId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)
    return match ? match[1] : null
  }

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-[#f39318] to-[#FF5500]"></div>
            <span className="mx-4 text-3xl md:text-4xl uppercase tracking-wider font-semibold bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
              Video Testimonials
            </span>
            <div className="h-px w-8 bg-gradient-to-r from-[#FF5500] to-[#f39318]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hear From Our Community
          </h2>
          <p className="text-lg text-gray-600">
            Watch real stories from parents, students, and families
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["All", "Parent", "Student", "Family"].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedFilter(type)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedFilter === type
                  ? 'bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {filteredVideos.map((video, index) => {
            const videoId = getVideoId(video.videoUrl)
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card
                  className="overflow-hidden cursor-pointer group border border-gray-100 hover:shadow-xl transition-all duration-300"
                  onClick={() => setSelectedVideo(video.videoUrl)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="w-8 h-8 text-[#f39318] ml-1" fill="currentColor" />
                      </motion.div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
                        <p className="text-white text-sm font-semibold">{video.title}</p>
                        <p className="text-white/80 text-xs mt-1">{video.author}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {getVideoId(selectedVideo) && (
                <iframe
                  src={`https://www.youtube.com/embed/${getVideoId(selectedVideo)}?autoplay=1&rel=0`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors z-10"
                onClick={() => setSelectedVideo(null)}
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

