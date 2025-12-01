"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  FaDumbbell,
  FaChild,
  FaChalkboardTeacher,
  FaAppleAlt,
  FaChevronDown,
  FaChevronUp,
  FaStar,
  FaPlay,
  FaAward,
  FaUsers,
  FaClock,
} from "react-icons/fa"
import Link from "next/link"

const testimonials = [
  {
    name: "Isha Navave",
    text: "The coaches are amazing and the facilities are top-notch. My daughter has improved tremendously in just 6 months!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Tanush Nihalani",
    text: "Professional coaching with patience and dedication. The progress tracking system is excellent.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Divya Dongare",
    text: "State-of-the-art equipment and safety measures. Highly recommend for serious gymnastics training.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Tanuya Sharma",
    text: "Both coaches are very experienced and create a positive learning environment for all students.",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Sumedha Ajit Sandbhor",
    text: "The best gymnastics academy in Pune. My son loves coming here and has gained so much confidence.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
]

const faqs = [
  {
    question: "What is the best place for Gymnastics training in Pune?",
    answer:
      "The Life Sports provide the best gymnastics training in Pune. We provide students with the right classes in Gymnastics which help them achieve their goals and strength. We offer state-of-art hall and all the up-to-date equipment for gymnastics classes.",
  },
  {
    question: "What are the benefits of Gymnastics Classes?",
    answer:
      "Gymnastics classes have many benefits like: Increased coordination, Stronger Bones, Better self-discipline, Increased cognitive skills, and Increased self-esteem.",
  },
  {
    question: "What is the average age of children to start Gymnastics training in Pune?",
    answer:
      "Our coaches recommend waiting until your child is 3 or 4 before enrolling in a serious gymnastics program.",
  },
  {
    question: "What is the best gymnastics classes in Pune for kids?",
    answer:
      "The Life Sports offers state-of-art hall and all the up-to-date equipment for gymnastics classes in Pune. Special attention and care are provided to the smaller kids at Beginner Levels, Intermediate and Advance.",
  },
]

const stats = [
  { number: "500+", label: "Happy Students", icon: FaUsers },
  { number: "15+", label: "Expert Coaches", icon: FaChalkboardTeacher },
  { number: "8+", label: "Years Experience", icon: FaClock },
  { number: "50+", label: "Awards Won", icon: FaAward },
]

export default function GymnasticsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://www.thelifesports.in/wp-content/uploads/2020/06/img19-.jpg"
            alt="Gymnastics Training"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-center pt-20">
          <div className="text-white max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center bg-gradient-to-r from-[#f39318] to-[#FF5500] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <FaAward className="mr-2" />
                Pune's #1 Gymnastics Academy
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Master the Art of
              <span className="block bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                Gymnastics
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl leading-relaxed"
            >
              Transform your potential into excellence with professional coaching, state-of-the-art facilities, and
              personalized training programs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <button className="bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Book Trial
                </button>
              </Link>

            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <FaChevronDown className="text-2xl" />
        </motion.div>
      </section>



      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                Why Choose The Life Sport?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                With over 8 years of excellence in gymnastics training, we've helped hundreds of students achieve their
                dreams through our comprehensive programs and world-class facilities.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: FaDumbbell,
                    title: "Modern Equipment",
                    description: "Latest gymnastics apparatus and safety equipment",
                  },
                  {
                    icon: FaChild,
                    title: "Comprehensive Training for kids upto 14age",
                    description: "Programs from toddlers to competitive athletes",
                  },
                  {
                    icon: FaChalkboardTeacher,
                    title: "Certified Coaches",
                    description: "Internationally trained and experienced instructors",
                  },
                  {
                    icon: FaAppleAlt,
                    title: "Holistic Approach",
                    description: "Physical, mental, and nutritional development",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-gradient-to-r from-[#f39318] to-[#FF5500] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-lg mx-auto lg:max-w-none"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] w-full">
                <Image
                  src="/images/gymnastics1.jpg"
                  alt="Gymnastics Facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">State-of-the-Art Facility</h3>
                  <p className="text-base md:text-lg opacity-90">Professional training environment</p>
                </div>
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-gray-100 z-10"
              >
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="bg-gradient-to-r from-[#f39318] to-[#FF5500] w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaAward className="text-white text-xl md:text-2xl" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-gray-800">50+</div>
                    <div className="text-sm md:text-base text-gray-600">Awards Won</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Batch Details Section */}
      <section id="batches" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
              Gymnastics Coaching – Batch Details
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the batch that fits your schedule and training goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Batch 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 hover:border-[#f39318] transition-all duration-300 flex flex-col h-full"
            >
              <div className="bg-gradient-to-r from-[#f39318] to-[#FF5500] p-6 text-white">
                <div className="mb-2">
                  <h3 className="text-2xl font-bold mb-2">Batch 1</h3>
                  <p className="text-sm opacity-90 mb-1">Mon, Wed, Fri</p>
                </div>
                <div className="mt-3 pt-3 border-t border-white/20">
                  <p className="text-sm font-semibold">Total Sessions: 12</p>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-6">
                  <div className="flex items-center text-gray-700 mb-3">
                    <FaClock className="text-[#f39318] mr-2" />
                    <span className="font-semibold">Timings:</span>
                  </div>
                  <div className="ml-6">
                    <p className="text-gray-600">5:00 PM – 6:00 PM / 6:00 PM – 7:00 PM</p>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6 flex-1 flex flex-col">
                  <div className="mb-4 flex-1">
                    <div className="flex items-center text-gray-700 mb-2">
                      <span className="text-2xl mr-2">💰</span>
                      <span className="font-semibold">Fees (Including GST):</span>
                    </div>
                    <div className="ml-8">
                      <p className="text-xl font-bold text-[#f39318]">₹3,186/-</p>
                    </div>
                  </div>
                </div>
                <Link href="/contact" className="mt-auto">
                  <button className="w-full bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 mt-4">
                    Enroll Now
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Batch 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 hover:border-[#f39318] transition-all duration-300 flex flex-col h-full"
            >
              <div className="bg-gradient-to-r from-[#f39318] to-[#FF5500] p-6 text-white">
                <div className="mb-2">
                  <h3 className="text-2xl font-bold mb-2">Batch 2</h3>
                  <p className="text-sm opacity-90 mb-1">Tue, Thu</p>
                </div>
                <div className="mt-3 pt-3 border-t border-white/20">
                  <p className="text-sm font-semibold">Total Sessions: 8</p>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-6">
                  <div className="flex items-center text-gray-700 mb-3">
                    <FaClock className="text-[#f39318] mr-2" />
                    <span className="font-semibold">Timings:</span>
                  </div>
                  <div className="ml-6">
                    <p className="text-gray-600">5:00 PM – 6:00 PM / 6:00 PM – 7:00 PM</p>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6 flex-1 flex flex-col">
                  <div className="mb-4 flex-1">
                    <div className="flex items-center text-gray-700 mb-2">
                      <span className="text-2xl mr-2">💰</span>
                      <span className="font-semibold">Fees (Including GST):</span>
                    </div>
                    <div className="ml-8">
                      <p className="text-xl font-bold text-[#f39318]">₹2,124/-</p>
                    </div>
                  </div>
                </div>
                <Link href="/contact" className="mt-auto">
                  <button className="w-full bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 mt-4">
                    Enroll Now
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Batch 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#f39318] relative flex flex-col h-full"
            >
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                Most Popular
              </div>
              <div className="bg-gradient-to-r from-[#f39318] to-[#FF5500] p-6 text-white">
                <div className="mb-2">
                  <h3 className="text-2xl font-bold mb-2">Batch 3</h3>
                  <p className="text-sm opacity-90 mb-1">Mon to Fri</p>
                </div>
                <div className="mt-3 pt-3 border-t border-white/20">
                  <p className="text-sm font-semibold">Total Sessions: 20</p>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-6">
                  <div className="flex items-center text-gray-700 mb-3">
                    <FaClock className="text-[#f39318] mr-2" />
                    <span className="font-semibold">Timings:</span>
                  </div>
                  <div className="ml-6">
                    <p className="text-gray-600">5:00 PM – 6:00 PM / 6:00 PM – 7:00 PM</p>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6 flex-1 flex flex-col">
                  <div className="mb-4 flex-1">
                    <div className="flex items-center text-gray-700 mb-2">
                      <span className="text-2xl mr-2">💰</span>
                      <span className="font-semibold">Fees (Including GST):</span>
                    </div>
                    <div className="ml-8">
                      <p className="text-xl font-bold text-[#f39318]">₹5,310/-</p>
                    </div>
                  </div>
                </div>
                <Link href="/contact" className="mt-auto">
                  <button className="w-full bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 mt-4">
                    Enroll Now
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about our programs</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                  <div className="text-[#f39318] text-xl">
                    {openFaq === index ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
