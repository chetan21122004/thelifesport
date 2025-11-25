"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star, Search } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const testimonials = [
  {
    name: "Rajesh Kumar",
    activity: "Badminton",
    rating: 5,
    text: "Excellent badminton facility with professional courts. The coaching is top-notch and the staff is very helpful. Highly recommended!",
    photo: "/images/badminton_plyr1.jpg",
    date: "2 weeks ago"
  },
  {
    name: "Priya Sharma",
    activity: "Badminton",
    rating: 5,
    text: "My kids love coming here for badminton classes. The coaches are patient and skilled. Great environment for learning sports.",
    photo: "/images/badminton_plyr2.jpg",
    date: "1 month ago"
  },
  {
    name: "Amit Patel",
    activity: "Cricket",
    rating: 5,
    text: "Best sports academy in Pune! World-class facilities and expert coaching. Worth every rupee spent.",
    photo: "/images/hero-1.jpg",
    date: "3 weeks ago"
  },
  {
    name: "Sneha Desai",
    activity: "Dance",
    rating: 4,
    text: "Great place for dance classes. Clean studios and good maintenance. Would love to see more parking space though.",
    photo: "/images/dance-1.jpg",
    date: "1 month ago"
  },
  {
    name: "Vikram Singh",
    activity: "Badminton",
    rating: 5,
    text: "Professional coaching and excellent facilities. My game has improved significantly since joining. Thank you!",
    photo: "/images/badminton_plyr3.jpg",
    date: "2 weeks ago"
  },
  {
    name: "Anjali Mehta",
    activity: "Table Tennis",
    rating: 5,
    text: "Amazing table tennis coaching! The facilities are world-class and the coaches are very experienced.",
    photo: "/images/ttcourt.jpg",
    date: "3 weeks ago"
  },
]

const activities = ["All", "Badminton", "Cricket", "Dance", "Table Tennis", "Gymnastics"]

export function TestimonialsFilter() {
  const [selectedActivity, setSelectedActivity] = useState("All")
  const [selectedRating, setSelectedRating] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<"newest" | "highest">("newest")

  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesActivity = selectedActivity === "All" || testimonial.activity === selectedActivity
    const matchesRating = selectedRating === null || testimonial.rating === selectedRating
    const matchesSearch = searchQuery === "" || 
      testimonial.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.text.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesActivity && matchesRating && matchesSearch
  }).sort((a, b) => {
    if (sortBy === "highest") {
      return b.rating - a.rating
    }
    return 0 // For newest, keep original order
  })

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 space-y-4">
        {/* Search */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search testimonials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f39318]"
          />
        </div>

        {/* Activity Filter */}
        <div className="flex flex-wrap justify-center gap-3">
          {activities.map((activity) => (
            <button
              key={activity}
              onClick={() => setSelectedActivity(activity)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedActivity === activity
                  ? 'bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {activity}
            </button>
          ))}
        </div>

        {/* Rating Filter & Sort */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-600 font-medium">Filter by rating:</span>
            <div className="flex gap-2">
              {[5, 4, 3].map((rating) => (
                <button
                  key={rating}
                  onClick={() => setSelectedRating(selectedRating === rating ? null : rating)}
                  className={`px-3 py-1 rounded-full text-sm font-semibold transition-all flex items-center gap-1 ${
                    selectedRating === rating
                      ? 'bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Star className="w-3 h-3 fill-current" />
                  {rating}
                </button>
              ))}
            </div>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "newest" | "highest")}
            className="px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f39318]"
          >
            <option value="newest">Newest First</option>
            <option value="highest">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTestimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Card className="h-full border border-gray-100 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                {/* Author Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.activity} • {testimonial.date}</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? "fill-[#f39318] text-[#f39318]"
                          : "fill-gray-300 text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredTestimonials.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No testimonials found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}

