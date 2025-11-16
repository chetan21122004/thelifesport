"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"   
import { usePathname } from "next/navigation"

const activities = [
  {
    name: "Badminton",
    image: "/images/badminton_plyr2.jpg",
    description: "Professional coaching with K9 Badminton World",
    features: ["BWF approved courts", "K9 expert coaches", "Olympic certified training"],
    color: "from-orange-400 to-pink-600",
    href: "/activities/badminton"
  },
  {
    name: "Table Tennis", 
    image: "/images/ttcourt.jpg",
    description: "Book your table tennis session",
    features: ["Professional tables", "Beginners welcome"],
    color: "from-blue-400 to-indigo-600",
    href: "/activities/table-tennis"
  },
  {
    name: "Gymnastics",
    image: "/images/gymnastics1.jpg",
    description: "All levels welcome",
    features: ["Safe environment", "Certified trainers", "Modern equipment"],
    color: "from-green-400 to-teal-600",
    href: "/activities/gymnastics"
  },
  {
    name: "Dance",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Various styles",
    features: ["Multiple dance forms", "Professional choreographers", "Regular events"],
    color: "from-purple-400 to-pink-600",
    href: "/activities/dance"
  },
  {
    name: "Cricket Net with Bowling Machine",
    image: "/images/cricket-net.jpg",
    description: "Professional practice nets with auto machine",
    features: ["Professional practice Nets with bowling machine"],
    color: "from-red-400 to-rose-600",
    href: "/activities/cricketNet"
  },
  {
    name: "Pickle Ball",
    image: "https://plus.unsplash.com/premium_photo-1709048991125-7d01a4666f79?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBpY2tsZWJhbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    description: "Fast-paced paddle sport",
    features: ["Professional courts", "Equipment provided", "All skill levels"],
    color: "from-emerald-400 to-green-600",
    href: "/activities/pickle-ball"
  },
  {
    name: "Mini Pro Turf",
    image: "data:image/jpeg;base64,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",
    description: "Professional synthetic turf",
    features: ["Premium turf surface", "Multi-sport facility", "Weather resistant"],
    color: "from-lime-400 to-emerald-600",
    href: "/activities/mini-pro-turf"
  },
  {
    name: "Boxing",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Boxing fitness with Fittera Gym",
    features: ["National level trainers", "1-hour fitness sessions", "Professional coaching"],
    color: "from-red-500 to-orange-600",
    href: "/activities/boxing"
  },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeActivity, setActiveActivity] = useState<string | null>("Badminton")
  const pathname = usePathname()

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
      setActiveActivity(null)
    } else {
      setActiveDropdown(dropdown)
      if (dropdown === "activities") {
        setActiveActivity("Badminton")
      }
    }
  }

  // Handle scroll on mobile menu open
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMobileMenuOpen])

  // Handle initial hash navigation
  useEffect(() => {
    const handleHashScroll = () => {
      if (pathname === "/" && window.location.hash) {
        const id = window.location.hash.replace("#", "")
        const element = document.getElementById(id)
        if (element) {
          setTimeout(() => {
            const yOffset = -80 // Navbar height offset
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({ top: y, behavior: "smooth" })
          }, 100)
        }
      }
    }

    handleHashScroll()
    window.addEventListener('hashchange', handleHashScroll)
    return () => window.removeEventListener('hashchange', handleHashScroll)
  }, [pathname])

  const handleNavigation = (item: any) => {
    if (item.isSection) {
      if (pathname === "/") {
        // If we're on the homepage, scroll to section
        const element = document.getElementById(item.sectionId)
        if (element) {
          const yOffset = -80 // Navbar height offset
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: "smooth" })
        }
      } else {
        // If we're on a different page, navigate to homepage with hash
        window.location.href = "/#" + item.sectionId
      }
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    {
      name: "HOME",
      href: "/",
      isSection: false
    },
    {
      name: "ABOUT US",
      href: "/#about",
      isSection: true,
      sectionId: "about"
    },
    {
      name: "ACTIVITIES",
      href: "#",
      hasDropdown: true,
      dropdown: "activities",
      isSection: false
    },
    {
      name: "CORPORATE EVENTS",
      href: "/#corporate-events",
      isSection: true,
      sectionId: "corporate-events"
    },
    {
      name: "RENT A STUDIO",
      href: "/rent-a-studio",
      isSection: false
    },
    {
      name: "TESTIMONIALS",
      href: "/#testimonials",
      isSection: true,
      sectionId: "testimonials"
    },
    {
      name: "MEDIA",
      href: "/media",
      isSection: false
    },
    {
      name: "CONTACT",
      href: "/contact",
      isSection: false
    },
    {
      name: "BOOK MY COURT",
      href: "/book-court",
      isSection: false
    },
  ]

  return (
    <>
      {/* Main Navigation */}
      <header className="sticky top-0 z-50 w-full transition-all duration-300 bg-[#f39318]">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/lifelogo.jpg"
                alt="The Life Sports Logo"
                width={140}
                height={60}
                className="h-12 w-auto transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.dropdown)}
                    onMouseLeave={() => {
                      setActiveDropdown(null)
                      setActiveActivity(null)
                    }}
                  >
                    <button
                      className="flex items-center text-sm font-medium text-white hover:text-yellow-200 transition-colors"
                      onClick={() => toggleDropdown(item.dropdown!)}
                    >
                      {item.name}
                      <motion.div
                        animate={{ rotate: activeDropdown === item.dropdown ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </motion.div>
                    </button>

                    {/* Activities Mega Menu with AnimatePresence */}
                    <AnimatePresence>
                      {item.dropdown === "activities" && activeDropdown === item.dropdown && (
                        <motion.div
                          key="activities-dropdown"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute  top-full w-[800px] max-w-[90vw] bg-white/95 backdrop-blur-sm text-gray-800 shadow-2xl rounded-2xl overflow-hidden z-50"
                        >
                          <div className="flex h-[550px]">
                            {/* Left sidebar navigation */}
                            <div className="w-1/4 bg-gray-100/80 pt-6 space-y-1">
                              {activities.map((activity) => (
                                <Link
                                  href={activity.href}
                                  key={`nav-${activity.name}`}
                                  className={cn(
                                    "w-full text-left px-6 py-3 relative transition-all block",
                                    activeActivity === activity.name
                                      ? "text-white font-medium"
                                      : "text-gray-700 hover:bg-gray-200/80"
                                  )}
                                  onMouseEnter={() => setActiveActivity(activity.name)}
                                  onClick={() => {
                                    setActiveDropdown(null)
                                    setActiveActivity(null)
                                  }}
                                >
                                  {activeActivity === activity.name && (
                                    <motion.div
                                      layoutId="activeActivityBackground"
                                      className={`absolute inset-0 bg-gradient-to-r ${activity.color}`}
                                      transition={{ type: "spring", duration: 0.5 }}
                                    />
                                  )}
                                  <span className="relative z-10">{activity.name}</span>
                                </Link>
                              ))}
                            </div>

                            {/* Right content area */}
                            <div className="w-3/4 p-8 relative">
                              <AnimatePresence mode="wait">
                                {activities.map((activity) => (
                                  activeActivity === activity.name && (
                                    <motion.div
                                      key={`content-${activity.name}`}
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      exit={{ opacity: 0 }}
                                      transition={{ duration: 0.3 }}
                                      className="h-full"
                                    >
                                      <div className="flex h-full">
                                        {/* Activity details */}
                                        <div className="w-1/2 pr-6 flex flex-col justify-between">
                                          <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{activity.name}</h3>
                                            <p className="text-gray-600 mb-6">{activity.description}</p>

                                            <h4 className="font-medium text-gray-800 mb-3">Key Features</h4>
                                            <div className="space-y-3">
                                              {activity.features.map((feature, index) => (
                                                <motion.div
                                                  key={index}
                                                  initial={{ opacity: 0, x: -10 }}
                                                  animate={{ opacity: 1, x: 0 }}
                                                  transition={{ delay: index * 0.1 }}
                                                  className="flex items-center gap-3"
                                                >
                                                  <div className={`h-8 w-8 rounded-full flex items-center justify-center bg-gradient-to-r ${activity.color}`}>
                                                    <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                      <polyline points="20 6 9 17 4 12"></polyline>
                                                    </svg>
                                                  </div>
                                                  <span className="text-gray-700">{feature}</span>
                                                </motion.div>
                                              ))}
                                            </div>
                                          </div>

                                          <Link
                                            href={activity.href}
                                            className={`mt-6 inline-flex items-center font-medium bg-gradient-to-r ${activity.color} text-white px-6 py-3 rounded-lg transition-transform hover:scale-105 self-start`}
                                            onClick={() => {
                                              setActiveDropdown(null)
                                              setActiveActivity(null)
                                            }}
                                          >
                                            Explore {activity.name}
                                            <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                              <path d="M5 12h14"></path>
                                              <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                          </Link>
                                        </div>

                                        {/* Activity image */}
                                        <div className="w-1/2 relative">
                                          <div className="absolute inset-0 overflow-hidden rounded-xl">
                                            <motion.div
                                              initial={{ scale: 1 }}
                                              animate={{ scale: 1.05 }}
                                              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                                              className="h-full w-full"
                                            >
                                              <Image
                                                src={activity.image}
                                                alt={activity.name}
                                                fill
                                                className="object-cover"
                                              />
                                            </motion.div>
                                            <div className={`absolute inset-0 opacity-30 bg-gradient-to-tr ${activity.color}`}></div>
                                          </div>
                                        </div>
                                      </div>
                                    </motion.div>
                                  )
                                ))}
                              </AnimatePresence>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {item.isSection ? (
                      <button
                        onClick={() => handleNavigation(item)}
                        className="text-sm font-medium text-white hover:text-yellow-200 transition-colors relative group"
                      >
                        {item.name}
                        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm font-medium text-white hover:text-yellow-200 transition-colors relative group"
                      >
                        {item.name}
                        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                      </Link>
                    )}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          <Link
            href="https://booking.thelifesports.in/bookings"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#f39318] shadow-md transition hover:bg-gray-100"
          >
            Book Now
          </Link>

          <button
            className="lg:hidden text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation with AnimatePresence */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 lg:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Drawer */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 20, stiffness: 100 }}
                className="fixed right-0 top-0 bottom-0 w-[300px] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
              >
                {/* Header */}
                <div className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-gray-100 p-4 flex items-center justify-between">
                  <Image
                    src="/images/lifelogo.jpg"
                    alt="The Life Sports Logo"
                    width={100}
                    height={40}
                    className="h-8 w-auto"
                  />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="h-5 w-5 text-gray-600" />
                  </button>
                </div>

                {/* Navigation Items */}
                <div className="p-4 space-y-2">
                  {navItems.map((item) => (
                    <div key={item.name} className="group">
                      {item.hasDropdown ? (
                        <>
                          <button
                            className="flex items-center w-full p-3 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-[#f39318] transition-all"
                            onClick={() => toggleDropdown(item.dropdown!)}
                          >
                            <span className="font-medium">{item.name}</span>
                            <motion.div
                              animate={{ rotate: activeDropdown === item.dropdown ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-auto"
                            >
                              <ChevronDown className="h-4 w-4" />
                            </motion.div>
                          </button>
                          <AnimatePresence>
                            {activeDropdown === item.dropdown && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden mt-1"
                              >
                                {item.dropdown === "activities" && activities.map((activity) => (
                                  <Link
                                    key={activity.name}
                                    href={activity.href}
                                    className="flex items-center gap-3 p-3 ml-2 rounded-lg hover:bg-orange-50 transition-all group"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    <div className="relative h-10 w-10 rounded-lg overflow-hidden ring-1 ring-black/5 group-hover:ring-orange-400/50 transition-all">
                                      <Image
                                        src={activity.image}
                                        alt={activity.name}
                                        fill
                                        className="object-cover"
                                      />
                                      <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${activity.color} group-hover:opacity-30 transition-opacity`} />
                                    </div>
                                    <div>
                                      <div className="font-medium text-gray-900 group-hover:text-[#f39318] transition-colors">{activity.name}</div>
                                      <div className="text-xs text-gray-500">{activity.description}</div>
                                    </div>
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        item.isSection ? (
                          <button
                            onClick={() => handleNavigation(item)}
                            className="flex items-center w-full p-3 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-[#f39318] transition-all font-medium"
                          >
                            {item.name}
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            className="flex items-center w-full p-3 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-[#f39318] transition-all font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )
                      )}
                    </div>
                  ))}
                  <Link
                    href="https://booking.thelifesports.in/bookings"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-lg bg-gradient-to-r from-[#f39318] to-[#FF5500] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-[#e8840f] hover:to-[#e54d00]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book Now
                  </Link>
                </div>


              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  )
} 