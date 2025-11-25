"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Star, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Sample reviews - replace with actual Google Reviews API integration
const reviews = [
  {
    author: "Rajesh Kumar",
    rating: 5,
    text: "Excellent badminton facility with professional courts. The coaching is top-notch and the staff is very helpful. Highly recommended!",
    date: "2 weeks ago",
    photo: "/placeholder-avatar.png"
  },
  {
    author: "Priya Sharma",
    rating: 5,
    text: "My kids love coming here for badminton classes. The coaches are patient and skilled. Great environment for learning sports.",
    date: "1 month ago",
    photo: "/placeholder-avatar.png"
  },
  {
    author: "Amit Patel",
    rating: 5,
    text: "Best sports academy in Pune! World-class facilities and expert coaching. Worth every rupee spent.",
    date: "3 weeks ago",
    photo: "/placeholder-avatar.png"
  },
  {
    author: "Sneha Desai",
    rating: 4,
    text: "Great place for family badminton. Clean courts and good maintenance. Would love to see more parking space though.",
    date: "1 month ago",
    photo: "/placeholder-avatar.png"
  },
  {
    author: "Vikram Singh",
    rating: 5,
    text: "Professional coaching and excellent facilities. My game has improved significantly since joining. Thank you!",
    date: "2 weeks ago",
    photo: "/placeholder-avatar.png"
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
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export function GoogleReviewsWidget() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [selectedRating, setSelectedRating] = useState<number | null>(null)

  const averageRating = 4.8
  const totalReviews = 127

  const filteredReviews = selectedRating
    ? reviews.filter(r => r.rating === selectedRating)
    : reviews

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50"
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
            <div className="h-px w-8 bg-gradient-to-r from-[#f39318] to-[#FF5500]"></div>
            <span className="mx-4 text-3xl md:text-4xl uppercase tracking-wider font-semibold bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
              Google Reviews
            </span>
            <div className="h-px w-8 bg-gradient-to-r from-[#FF5500] to-[#f39318]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What People Are Saying
          </h2>
          
          {/* Rating Badge */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-100">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.floor(averageRating)
                        ? "fill-[#f39318] text-[#f39318]"
                        : "fill-gray-300 text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900 ml-2">
                {averageRating}
              </span>
            </div>
            <div className="text-gray-600">
              <span className="font-semibold">{totalReviews}</span> reviews
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedRating(null)}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                selectedRating === null
                  ? 'bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Reviews
            </button>
            {[5, 4, 3].map((rating) => (
              <button
                key={rating}
                onClick={() => setSelectedRating(rating)}
                className={`px-4 py-2 rounded-full font-semibold transition-all flex items-center gap-2 ${
                  selectedRating === rating
                    ? 'bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Star className="w-4 h-4 fill-current" />
                {rating} Stars
              </button>
            ))}
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {filteredReviews.map((review, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full border border-gray-100 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  {/* Author Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f39318] to-[#FF5500] flex items-center justify-center text-white font-bold">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{review.author}</div>
                      <div className="text-xs text-gray-500">{review.date}</div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "fill-[#f39318] text-[#f39318]"
                            : "fill-gray-300 text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Link */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="https://www.google.com/maps/place/The+Life+Sports"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#f39318] font-semibold hover:text-[#FF5500] transition-colors"
          >
            View all reviews on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

