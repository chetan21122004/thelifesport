"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, MailIcon, PhoneIcon, MapPinIcon, ClockIcon } from "lucide-react"

export default function RentAStudio() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const slideIn = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <>
      {/* Hero Section with parallax effect */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.2 }}
          animate={{ 
            scale: 1,
            transition: { duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2069"
            alt="Dance Studio"
            fill
            className="object-cover brightness-[0.35]"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </motion.div>
        
        <motion.div 
          className="container relative mx-auto px-4 z-10 text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/40 px-6 py-3 backdrop-blur-sm mb-10"
          >
            <span className="h-3 w-3 rounded-full bg-[#f39318] animate-pulse"></span>
            <span className="text-base font-medium text-white tracking-wide">Premium Studio Spaces</span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white mb-10 drop-shadow-2xl"
          >
            <span className="block mb-3">RENT A</span>
            <span className="bg-gradient-to-r from-[#f39318] to-orange-500 bg-clip-text text-transparent drop-shadow-xl">STUDIO</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-2xl text-white font-medium mb-14 leading-relaxed drop-shadow-lg"
          >
            Professional dance and activity spaces for individuals, groups, and organizations
          </motion.p>
          
          <motion.div variants={scaleIn}>
            <Link 
              href="#contact" 
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white font-bold px-12 py-6 rounded-full shadow-xl transition-all duration-300 hover:shadow-orange-500/40 hover:shadow-2xl text-xl"
            >
              <span className="relative z-10">BOOK NOW</span>
              <motion.span 
                className="relative z-10"
                animate={{ x: [0, 7, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-[#f39318] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Enhanced decorative elements */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
      </section>

      {/* Studio Cards Section */}
      <section className="py-24 bg-gradient-to-b from-black via-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-20"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center justify-center gap-4 mb-6"
            >
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#f39318]"></div>
              <span className="text-2xl uppercase tracking-wider font-semibold text-[#f39318]">Our Studios</span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#f39318]"></div>
            </motion.div>

            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Premium Spaces for Your Activities
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-gray-600 text-lg leading-relaxed"
            >
              Our studios provide the perfect environment for dance, yoga, fitness, and more.
              With exceptional facilities and flexible booking options.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Rhythm Studio */}
            <motion.div 
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="h-80 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1578762560042-46ad127c95ea?q=80&w=2070"
                  alt="Rhythm Studio"
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <motion.div 
                  className="absolute top-6 left-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="bg-[#f39318]/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    Premium
                  </span>
                </motion.div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-4xl font-bold text-white mb-3 group-hover:text-[#f39318] transition-colors">
                    Rhythm Studio
                  </h3>
                  <p className="text-white/90 text-lg">1000 sq. ft. Air-Conditioned Space</p>
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-3 mb-8">
                  <motion.span 
                    className="bg-orange-100 text-orange-800 text-sm font-medium px-4 py-2 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    Mirrored Walls
                  </motion.span>
                  <motion.span 
                    className="bg-orange-100 text-orange-800 text-sm font-medium px-4 py-2 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    Sound System
                  </motion.span>
                  <motion.span 
                    className="bg-orange-100 text-orange-800 text-sm font-medium px-4 py-2 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    Cushioned Floor
                  </motion.span>
                  <motion.span 
                    className="bg-orange-100 text-orange-800 text-sm font-medium px-4 py-2 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    AC
                  </motion.span>
                </div>
                
                <h4 className="font-bold text-gray-900 text-xl mb-6">Price Per Session</h4>
                <div className="overflow-hidden rounded-2xl mb-8 border border-gray-100">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#f39318]/5 to-orange-500/5">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Days</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Time</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Fees</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-orange-50/50 transition-colors">
                        <td className="px-6 py-4 text-sm text-gray-700">Weekend</td>
                        <td className="px-6 py-4 text-sm text-gray-700">6am – 12am</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">₹1,200/session</td>
                      </tr>
                      <tr className="hover:bg-orange-50/50 transition-colors">
                        <td className="px-6 py-4 text-sm text-gray-700">Weekdays</td>
                        <td className="px-6 py-4 text-sm text-gray-700">4pm – 12am</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">₹900/session</td>
                      </tr>
                      <tr className="bg-gradient-to-r from-orange-100/50 to-orange-50/50">
                        <td className="px-6 py-4 text-sm font-medium text-[#f39318]" colSpan={3}>
                          Happy Hours!
                        </td>
                      </tr>
                      <tr className="hover:bg-orange-50/50 transition-colors">
                        <td className="px-6 py-4 text-sm text-gray-700">Weekdays</td>
                        <td className="px-6 py-4 text-sm text-gray-700">6am – 4pm</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">₹600/session</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <Link 
                  href="#contact" 
                  className="group relative inline-flex items-center justify-center w-full bg-gradient-to-r from-[#f39318] to-orange-500 hover:from-orange-500 hover:to-[#f39318] text-white font-medium px-6 py-4 rounded-xl transition-all duration-300 shadow-lg overflow-hidden"
                >
                  <motion.span 
                    className="relative z-10 inline-flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    Book Rhythm Studio
                    <span>→</span>
                  </motion.span>
                </Link>
              </div>
            </motion.div>

            {/* Vibe Studio */}
            <motion.div 
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="h-80 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=2070"
                  alt="Vibe Studio"
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <motion.div 
                  className="absolute top-6 left-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="bg-indigo-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    Standard
                  </span>
                </motion.div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-4xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                    Vibe Studio
                  </h3>
                  <p className="text-white/90 text-lg">800 sq. ft. Well-Ventilated Space</p>
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-3 mb-8">
                  <motion.span 
                    className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-2 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    Mirrored Walls
                  </motion.span>
                  <motion.span 
                    className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-2 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    Sound System
                  </motion.span>
                  <motion.span 
                    className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-2 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    Cushioned Floor
                  </motion.span>
                  <motion.span 
                    className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-2 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    Ventilated
                  </motion.span>
                </div>
                
                <h4 className="font-bold text-gray-900 text-xl mb-6">Price Per Session</h4>
                <div className="overflow-hidden rounded-2xl mb-8 border border-gray-100">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-indigo-500/5 to-indigo-300/5">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Days</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Time</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Fees</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-indigo-50/50 transition-colors">
                        <td className="px-6 py-4 text-sm text-gray-700">Weekend</td>
                        <td className="px-6 py-4 text-sm text-gray-700">6am – 12am</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">₹800/session</td>
                      </tr>
                      <tr className="hover:bg-indigo-50/50 transition-colors">
                        <td className="px-6 py-4 text-sm text-gray-700">Weekdays</td>
                        <td className="px-6 py-4 text-sm text-gray-700">4pm – 12am</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">₹600/session</td>
                      </tr>
                      <tr className="bg-gradient-to-r from-indigo-100/50 to-indigo-50/50">
                        <td className="px-6 py-4 text-sm font-medium text-indigo-600" colSpan={3}>
                          Happy Hours!
                        </td>
                      </tr>
                      <tr className="hover:bg-indigo-50/50 transition-colors">
                        <td className="px-6 py-4 text-sm text-gray-700">Weekdays</td>
                        <td className="px-6 py-4 text-sm text-gray-700">6am – 4pm</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">₹300/session</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <Link 
                  href="#contact" 
                  className="group relative inline-flex items-center justify-center w-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-500 text-white font-medium px-6 py-4 rounded-xl transition-all duration-300 shadow-lg overflow-hidden"
                >
                  <motion.span 
                    className="relative z-10 inline-flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    Book Vibe Studio
                    <span>→</span>
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features and Benefits Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background elements */}
        <motion.div 
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#f39318]/5 to-orange-500/5 rounded-full blur-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#f39318]/5 to-orange-500/5 rounded-full blur-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span 
                variants={fadeInUp}
                className="inline-block text-[#f39318] font-medium text-sm uppercase tracking-wider mb-4"
              >
                Perfect for Various Activities
              </motion.span>
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
              >
                More Than Just a
                <span className="block mt-2 bg-gradient-to-r from-[#f39318] to-orange-500 bg-clip-text text-transparent">
                  Dance Studio
                </span>
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-gray-700 text-lg leading-relaxed mb-12"
              >
                A dance studio is where performers learn, rehearse or improvise their dance. Our studios provide a warm and pleasant environment with cushioned floors to safely accommodate jumping and spinning, promoting health and security.
              </motion.p>
              
              <motion.div 
                variants={staggerContainer}
                className="space-y-8"
              >
                {[
                  {
                    title: "Mirrored Walls",
                    description: "Complete wall mirrors allow performers to see their every movement, enabling them to refine their technique."
                  },
                  {
                    title: "Professional Sound System",
                    description: "As music plays an important role in performance, our studios come equipped with quality sound systems."
                  },
                  {
                    title: "Versatile Spaces",
                    description: "Our studios can be used for various activities including dance, yoga, gymnastics, martial arts, and fitness classes."
                  }
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-6 group"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative">
                      <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#f39318] to-orange-500 flex items-center justify-center shrink-0 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <motion.div 
                        className="absolute inset-0 bg-orange-500/20 rounded-2xl blur-xl"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#f39318] transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative h-[600px] w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="absolute top-0 right-0 w-[85%] h-[70%] rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src="https://www.thelifesports.in/wp-content/uploads/2022/05/img2.jpg" 
                  alt="Dance Studio"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-0 left-0 w-[75%] h-[65%] rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=800&q=80" 
                  alt="Yoga Class"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-br from-[#f39318]/10 to-orange-500/10 rounded-full blur-3xl" />
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-tr from-[#f39318]/10 to-orange-500/10 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#f39318]/5 to-orange-500/5 rounded-full blur-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#f39318]/5 to-orange-500/5 rounded-full blur-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.span 
                  variants={fadeInUp}
                  className="inline-block text-[#f39318] font-medium text-sm uppercase tracking-wider mb-4"
                >
                  Get in Touch
                </motion.span>
                <motion.h2 
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                >
                  Book Your
                  <span className="block mt-2 bg-gradient-to-r from-[#f39318] to-orange-500 bg-clip-text text-transparent">
                    Studio Session
                  </span>
                </motion.h2>
                <motion.p 
                  variants={fadeInUp}
                  className="text-gray-700 text-lg leading-relaxed mb-12"
                >
                  Fill out the form and our team will get back to you promptly to confirm your booking 
                  or answer any questions you may have about our studio rental services.
                </motion.p>
                
                <motion.div 
                  variants={staggerContainer}
                  className="space-y-8"
                >
                  {[
                    {
                      icon: <MapPinIcon className="h-6 w-6" />,
                      title: "Location",
                      info: "Baner, Pune, Maharashtra"
                    },
                    {
                      icon: <PhoneIcon className="h-6 w-6" />,
                      title: "Contact",
                      info: "+91 98765 43210"
                    },
                    {
                      icon: <MailIcon className="h-6 w-6" />,
                      title: "Email",
                      info: "booking@lifesports.in"
                    },
                    {
                      icon: <ClockIcon className="h-6 w-6" />,
                      title: "Hours",
                      info: "Open Daily: 6:00 AM - 12:00 AM"
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-6 group"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative">
                        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#f39318]/10 to-orange-500/10 flex items-center justify-center text-[#f39318] shrink-0 transform transition-transform duration-300 group-hover:scale-110">
                          {item.icon}
                        </div>
                        <motion.div 
                          className="absolute inset-0 bg-orange-500/10 rounded-2xl blur-xl"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#f39318] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.info}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-3xl shadow-xl p-8 lg:p-12"
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Send Your Inquiry</h3>
                <form className="space-y-6">
                  <motion.div variants={fadeInUp}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f39318] focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f39318] focus:border-transparent transition-all duration-300"
                        placeholder="Your email"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f39318] focus:border-transparent transition-all duration-300"
                        placeholder="Your phone number"
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp}>
                    <label htmlFor="studio" className="block text-sm font-medium text-gray-700 mb-2">Preferred Studio</label>
                    <select
                      id="studio"
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f39318] focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a studio</option>
                      <option value="rhythm">Rhythm Studio (AC)</option>
                      <option value="vibe">Vibe Studio (Non-AC)</option>
                    </select>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f39318] focus:border-transparent transition-all duration-300"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp}>
                    <button
                      type="submit"
                      className="group relative w-full bg-gradient-to-r from-[#f39318] to-orange-500 hover:from-orange-500 hover:to-[#f39318] text-white font-medium px-8 py-5 rounded-xl transition-all duration-300 shadow-lg overflow-hidden"
                    >
                      <motion.span 
                        className="relative z-10 inline-flex items-center gap-2"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        Submit Inquiry
                        <span>→</span>
                      </motion.span>
                    </button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#f39318]/5 to-orange-500/5 rounded-full blur-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#f39318]/5 to-orange-500/5 rounded-full blur-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                variants={fadeInUp}
                className="inline-flex items-center justify-center gap-4 mb-6"
              >
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#f39318]"></div>
                <span className="text-2xl uppercase tracking-wider font-semibold text-[#f39318]">FAQs</span>
                <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#f39318]"></div>
              </motion.div>

              <motion.h2 
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-gray-600 text-lg"
              >
                Everything you need to know about our studio rental services
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  question: "Are there any dance studios for rent in Pune available from owners?",
                  answer: "Yes, you can have a dance studio on rent in Pune from the owners at Rhythm studio or at Vibe studio offered by Life Sports, a leading sports academy in town. You can book these dance studios on a per session basis or even monthly basis. There are various packages available in these well maintained dance studios."
                },
                {
                  question: "How to choose a good dance studio in Pune?",
                  answer: "While booking a dance studio on rent, it is important for the studio to be warm and inviting. You should look for the following qualities to find yourself a good dance studio: Spacious & well ventilated, at least one wall should be entirely mirrored, clean and well maintained, and a cushioned dance floor. At Life Sports, we offer these additional qualities making it the best dance studio in town. Our dance studio is located in Baner in Pune, a prime location with ample space for parking provided by Life Sports. Students can easily reach this dance studio and not worry about parking their vehicle. We also offer a very quick and hassle-free booking process."
                },
                {
                  question: "What is the average size of a dance studio?",
                  answer: "The average size to rent a dance studio in Pune is 800 square feet to 1000 square feet. Life Sports offers the Rhythm dance studio, it is air-conditioned and 1000 square feet in size. We offer the Vibe dance studio, it is well ventilated and 800 square feet in size."
                },
                {
                  question: "Can I book the studio for a one-time event?",
                  answer: "Yes, our studios can be booked for one-time events, regular classes, or on a monthly basis. Please contact our team for special event pricing and availability."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                >
                  <motion.button
                    className="flex items-center justify-between w-full px-8 py-6 text-left"
                    onClick={() => toggleAccordion(index)}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-xl font-semibold text-gray-900 pr-8">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#f39318]"
                    >
                      <ChevronDown className="h-6 w-6" />
                    </motion.div>
                  </motion.button>
                  
                  <AnimatePresence>
                    {activeAccordion === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-8 py-6 bg-gradient-to-br from-orange-50/50 to-transparent">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
