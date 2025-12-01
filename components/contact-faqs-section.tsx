"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Search } from "lucide-react"

const faqs = [
  {
    category: "Booking",
    question: "How do I book a court?",
    answer: "You can book a court online through our booking portal at booking.thelifesports.in or call us at +91 9767755977. Online booking is available 24/7 for your convenience."
  },
  {
    category: "Booking",
    question: "Can I cancel my booking?",
    answer: " No cancellation, no refund, and no extension once a booking is confirmed. Our Reschedule Policy Rescheduling is only allowed within 30 minutes from the time the booking is made."
  },

  {
    category: "Membership",
    question: "Do you offer trial sessions?",
    answer: "Yes, we provide Coaching Trial Check Sessions so you can experience the training and facilities before enrolling."
   },
  {
    category: "Payment",
    question: "What payment methods do you accept?",
    answer: "We accept UPI, cash, and pay on-site. For online hourly bookings, we accept cash, UPI, credit/debit cards, and online bank transfers."
  },
  {
    category: "Payment",
    question: "Are there any discounts available?",
    answer: "Yes,Monthly Booking Discount: Save more when you book for the entire month. Online Booking Bonus: Earn loyalty points when you book online, which can be redeemed for future savings."
  },
  {
    category: "General",
    question: "What are your operating hours?",
    answer: "We are open from 6:00 AM to 11:00 PM, Monday through Sunday. Our facilities are available for booking during these hours."
  },
  {
    category: "General",
    question: "Do you provide equipment?",
    answer: "Yes, we provide basic equipment for most activities. However, we recommend bringing your own equipment for personal use. Equipment rental is also available."
  },
  {
    category: "General",
    question: "Is parking available?",
    answer: "Yes, we have ample parking space available for all visitors. Parking is free and secure."
  },
  {
    category: "General",
    question: "Do you offer coaching for beginners?",
    answer: "Absolutely! We welcome players of all skill levels, from complete beginners to advanced players. Our coaches are experienced in training players at every level."
  },
]

const categories = ["All", "Booking", "Membership", "Payment", "General"]

export function ContactFAQsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory
    const matchesSearch = searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-[#f39318] to-[#FF5500]"></div>
            <span className="mx-4 text-3xl md:text-4xl uppercase tracking-wider font-semibold bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
              FAQs
            </span>
            <div className="h-px w-8 bg-gradient-to-r from-[#FF5500] to-[#f39318]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our services
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f39318]"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <motion.button
                className="flex items-center justify-between w-full px-6 py-5 text-left"
                onClick={() => toggleAccordion(index)}
                whileHover={{ x: 5 }}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="px-3 py-1 rounded-full bg-[#f39318]/10 text-[#f39318] text-xs font-semibold">
                      {faq.category}
                    </span>
                  </div>
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                </div>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#f39318] ml-4"
                >
                  <ChevronDown className="h-6 w-6" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 py-5 bg-gradient-to-br from-[#f39318]/5 to-[#FF5500]/5 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No FAQs found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  )
}

