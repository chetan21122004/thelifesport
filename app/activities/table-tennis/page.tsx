"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { FaBrain, FaWeight, FaUsers, FaArrowRight, FaQuoteRight } from "react-icons/fa"
import { MdSportsHandball } from "react-icons/md"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryImage {
  src: string
  alt: string
  title: string
}

// Carousel Component for Cards
const CardCarousel = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  const onSelect = () => {
    if (!emblaApi) return
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi])

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 sm:gap-6">{children}</div>
      </div>
      <button
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#f39318]" />
      </button>
      <button
        onClick={scrollNext}
        disabled={nextBtnDisabled}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#f39318]" />
      </button>
    </div>
  )
}

const TableTennisPage = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827",
      alt: "Table Tennis Court Booking",
      title: "Professional ",
    },
    {
      src: "https://images.unsplash.com/photo-1611251135345-18c56206b863",
      alt: "Table Tennis Equipment",
      title: "Premium Equipment",
    },
    {
      src: "https://images.unsplash.com/photo-1584813539806-2538b8d918c6",
      alt: "Table Tennis Match",
      title: "Tournament Play",
    },
    {
      src: "/images/ttcourt.jpg",
      alt: "Table Tennis Practice",
      title: "Regular Practice",
    },
  ]

  const benefits = [
    {
      icon: <MdSportsHandball className="w-10 h-10" />,
      title: "Premium Equipment",
      description: "Professional-grade tables and quality equipment for the best playing experience",
      image: "https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c",
    },
    {
      icon: <FaBrain className="w-10 h-10" />,
      title: "Easy Online Booking",
      description: "Book your court slot instantly with our 24/7 online booking system",
      image: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827",
    },
    {
      icon: <FaWeight className="w-10 h-10" />,
      title: "Flexible Timing",
      description: "Choose from multiple time slots that fit your schedule, available 7 days a week",
      image: "https://images.unsplash.com/photo-1611251135345-18c56206b863",
    },
    {
      icon: <FaUsers className="w-10 h-10" />,
      title: "Great Facilities",
      description: "Well-maintained courts in a vibrant atmosphere perfect for practice and matches",
      image: "https://images.unsplash.com/photo-1584813539806-2538b8d918c6",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Professional Design */}
      <div className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23f39318' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Professional Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white shadow-lg">
                  ⭐ Premium Table Tennis Court Booking
                </span>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  <span className="block text-white mb-2">Book Your Table Tennis Court</span>

                </h1>
                <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full"></div>
              </div>

              {/* Professional Description */}
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
                Reserve your table tennis court in Pune with ease. Our premium facilities offer professional-grade tables and equipment for your practice sessions, matches, and recreational play. Book online 24/7!
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 py-4 sm:py-6">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#f39318]">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-400">Online Booking</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#f39318]">Premium</div>
                  <div className="text-xs sm:text-sm text-gray-400">Equipment</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#f39318]">Flexible</div>
                  <div className="text-xs sm:text-sm text-gray-400">Timing Slots</div>
                </div>
              </div>

              {/* Professional CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 pt-2 sm:pt-4">
                <a
                  href="https://booking.thelifesports.in/bookings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white text-sm sm:text-base font-semibold rounded-lg overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Book Your Court Now
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </a>

                <Link href="#booking" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-white text-sm sm:text-base font-semibold rounded-lg border-2 border-gray-600 hover:border-[#f39318] hover:bg-[#f39318]/10 transition-all duration-300 gap-2"
                  >
                    View Booking Info
                    <FaArrowRight className="text-sm" />
                  </motion.button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#f39318] rounded-full"></div>
                  <span className="text-sm text-gray-400">Professional Tables</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#f39318] rounded-full"></div>
                  <span className="text-sm text-gray-400">Modern Facilities</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#f39318] rounded-full"></div>
                  <span className="text-sm text-gray-400">Flexible Timings</span>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Professional Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main Image */}
                <div className="relative h-[400px] lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827"
                    alt="Professional Table Tennis Court"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* Floating Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white rounded-xl p-3 sm:p-4 shadow-xl"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-lg flex items-center justify-center">
                      <MdSportsHandball className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-gray-900">Premium Courts</div>
                      <div className="text-xs text-gray-600">Professional Equipment</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-white rounded-xl p-3 sm:p-4 shadow-xl"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-lg flex items-center justify-center">
                      <FaUsers className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-gray-900">Easy Booking</div>
                      <div className="text-xs text-gray-600">24/7 Online</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>


      </div>

      {/* Image Gallery */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] text-transparent bg-clip-text"
          >
            Our Facility
          </motion.h2>
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative h-56 sm:h-64 overflow-hidden rounded-xl ring-2 ring-transparent ring-[#f39318] transition-all duration-300">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#f39318]/70 to-transparent  opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white  duration-300">
                    <h3 className="text-base sm:text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Mobile Carousel */}
          <div className="md:hidden px-8">
            <CardCarousel>
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer flex-[0_0_85%] sm:flex-[0_0_75%]"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative h-64 overflow-hidden rounded-xl ring-2 ring-transparent ring-[#f39318] transition-all duration-300">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#f39318]/70 to-transparent  opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white  duration-300">
                      <h3 className="text-lg font-semibold">{image.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </CardCarousel>
          </div>
        </div>
      </section>



      {/* Booking Features with Images */}
      <section id="booking" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] text-transparent bg-clip-text"
          >
            Why Book With Us?
          </motion.h2>
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 ring-2 ring-transparent hover:ring-[#f39318]"
              >
                <div className="relative h-40 sm:h-48">
                  <Image
                    src={benefit.image || "/placeholder.svg"}
                    alt={benefit.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#f39318]/70 via-[#FF5500]/30 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 text-white">
                    <div className="mb-2">{benefit.icon}</div>
                    <h3 className="text-xl sm:text-2xl font-bold">{benefit.title}</h3>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Mobile Carousel */}
          <div className="md:hidden px-8">
            <CardCarousel>
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 ring-2 ring-transparent hover:ring-[#f39318] flex-[0_0_85%] sm:flex-[0_0_75%]"
                >
                  <div className="relative h-48">
                    <Image
                      src={benefit.image || "/placeholder.svg"}
                      alt={benefit.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#f39318]/70 via-[#FF5500]/30 to-transparent" />
                    <div className="absolute bottom-4 left-6 text-white">
                      <div className="mb-2">{benefit.icon}</div>
                      <h3 className="text-2xl font-bold">{benefit.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </CardCarousel>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8"
            >
              Ready to Book Your Court?
            </motion.h2>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl mb-6 sm:mb-8 text-orange-100"
            >
              Join hundreds of players who enjoy our premium table tennis facilities. Book your slot today and experience professional-grade courts with top-quality equipment.
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4"
            >
              <a
                href="https://booking.thelifesports.in/bookings"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto bg-white text-[#f39318] px-6 sm:px-8 py-3 rounded-xl text-sm sm:text-base font-semibold hover:bg-orange-50 transition-colors duration-300 shadow-lg">
                  Book Your Court Now
                </button>
              </a>
              <Link href="#booking" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 rounded-xl text-sm sm:text-base font-semibold hover:bg-white hover:text-[#f39318] transition-all duration-300">
                  View Booking Details
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials with Images */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] text-transparent bg-clip-text"
          >
            What Our Players Say
          </motion.h2>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative">
              <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 text-4xl sm:text-6xl text-[#f39318] opacity-25">
                <FaQuoteRight />
              </div>
              <div className="bg-white p-6 sm:p-8 md:p-12 rounded-2xl shadow-xl relative z-10 ring-2 ring-[#f39318]/10">
                <blockquote className="text-base sm:text-lg md:text-xl text-gray-700 italic leading-relaxed mb-6 sm:mb-8">
                  The Life Sports is a very vibrant and active place with a friendly atmosphere. The booking process is seamless and the facilities are excellent. It was great knowing Mr. Ganesh Nimhan – The Founder of The Life Sports. His dedication towards sports and health for the society is a very commendable factor.
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center text-white font-bold text-xl sm:text-2xl">
                    P
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <p className="font-semibold text-base sm:text-lg">Parvez</p>
                    <p className="text-sm sm:text-base text-gray-500">Regular Player</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Information Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#f39318] to-[#FF5500] text-transparent bg-clip-text">
              Table Tennis Booking
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Book your table tennis sessions and enjoy our premium facilities with flexible timing
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 sm:p-8 shadow-xl border border-orange-100"
            >
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Operating Hours</h3>
                      <p className="text-sm sm:text-base text-gray-600">Available 7 days a week</p>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-white rounded-lg shadow-sm gap-2">
                      <span className="text-sm sm:text-base font-semibold text-gray-900">Monday to Sunday</span>
                      <span className="text-sm sm:text-base text-[#f39318] font-bold">6:00 AM - 11:55 PM</span>
                    </div>

                    <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Booking Features:</h4>
                      <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                        <li className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-[#f39318]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Online booking available
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-[#f39318]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Hourly slot bookings
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-[#f39318]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Professional equipment included
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-[#f39318]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Easy Booking & Flexible Timings
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-2xl blur opacity-20"></div>
                  <img
                    src="/images/ttcourt.jpg"
                    alt="Table Tennis Booking"
                    className="relative rounded-2xl shadow-2xl w-full h-64 sm:h-80 object-cover"
                  />
                </div>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="https://booking.thelifesports.in/bookings"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full sm:w-auto bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:from-[#e8840f] hover:to-[#e54d00] text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Book Your Table Now
                  </button>
                </a>
                <Link href="/contact">
                  <button className="w-full sm:w-auto border-2 border-[#f39318] text-[#f39318] hover:bg-gradient-to-r hover:from-[#f39318] hover:to-[#FF5500] hover:text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                    Contact for Details
                  </button>
                </Link>
              </div>
              <p className="mt-4 text-center text-sm text-gray-600">
                Bookings for all sports will be available through our website
              </p>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative max-w-4xl w-full aspect-video"
            >
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default TableTennisPage
