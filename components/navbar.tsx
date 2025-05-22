"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const activities = [
  { 
    name: "Badminton", 
    image: "https://images.unsplash.com/photo-1627414646191-c2e45bb6deec?w=500&auto=format&fit=crop&q=60", 
    description: "Professional coaching",
    features: ["World-class courts", "Expert coaches", "All age groups"],
    color: "from-orange-400 to-pink-600"
  },
  {     
    name: "Table Tennis", 
    image: "https://images.unsplash.com/photo-1611251134923-c498a3d78d56?w=500&auto=format&fit=crop&q=60", 
    description: "Expert training",
    features: ["Professional tables", "Tournament training", "Beginners welcome"],
    color: "from-blue-400 to-indigo-600"
  },
  { 
    name: "Gymnastics", 
    image: "https://images.unsplash.com/photo-1566241832378-917a0f30db2c?w=500&auto=format&fit=crop&q=60", 
    description: "All levels welcome",
    features: ["Safe environment", "Certified trainers", "Modern equipment"],
    color: "from-green-400 to-teal-600"
  },
  { 
    name: "Dance", 
    image: "https://images.unsplash.com/photo-1532056391962-9e26724f3511?w=500&auto=format&fit=crop&q=60", 
    description: "Various styles",
    features: ["Multiple dance forms", "Professional choreographers", "Regular events"],
    color: "from-purple-400 to-pink-600"
  },
  { 
    name: "Box Cricket", 
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500&auto=format&fit=crop&q=60", 
    description: "Indoor cricket facility",
    features: ["Indoor arena", "Practice nets", "Tournament hosting"],
    color: "from-yellow-400 to-orange-600"
  },
  { 
    name: "Cricket Net", 
    image: "https://images.unsplash.com/photo-1589801258579-38c1a2dc2700?w=500&auto=format&fit=crop&q=60", 
    description: "Professional practice nets",
    features: ["Professional nets", "Bowling machines", "Expert coaching"],
    color: "from-red-400 to-rose-600"
  },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeActivity, setActiveActivity] = useState<string | null>(null)

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
      setActiveActivity(null)
    } else {
      setActiveDropdown(dropdown)
      if (dropdown === "activities") {
        setActiveActivity("Badminton") // Set Badminton as default
      }
    }
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for navbar height
        behavior: 'smooth'
      })
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
      href: "#about", 
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
      href: "#corporate-events", 
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
      href: "#testimonials", 
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
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
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
                          className="absolute left-1/2 -translate-x-1/2 top-full w-[800px] max-w-[90vw] bg-white/95 backdrop-blur-sm text-gray-800 shadow-2xl rounded-2xl overflow-hidden z-50"
                        >
                          <div className="flex h-[450px]">
                            {/* Left sidebar navigation */}
                            <div className="w-1/4 bg-gray-100/80 pt-6 space-y-1">
                              {activities.map((activity) => (
                                <button
                                  key={`nav-${activity.name}`}
                                  className={cn(
                                    "w-full text-left px-6 py-3 relative transition-all",
                                    activeActivity === activity.name 
                                      ? "text-white font-medium" 
                                      : "text-gray-700 hover:bg-gray-200/80"
                                  )}
                                  onMouseEnter={() => setActiveActivity(activity.name)}
                                >
                                  {activeActivity === activity.name && (
                                    <motion.div 
                                      layoutId="activeActivityBackground"
                                      className={`absolute inset-0 bg-gradient-to-r ${activity.color}`}
                                      transition={{ type: "spring", duration: 0.5 }}
                                    />
                                  )}
                                  <span className="relative z-10">{activity.name}</span>
                                </button>
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
                                            href={`/activities/${activity.name.toLowerCase().replace(/\s+/g, '-')}`}
                                            className={`mt-6 inline-flex items-center font-medium bg-gradient-to-r ${activity.color} text-white px-6 py-3 rounded-lg transition-transform hover:scale-105 self-start`}
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
                        onClick={() => scrollToSection(item.sectionId!)}
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
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-x-0 top-[72px] bg-white lg:hidden shadow-lg overflow-hidden z-50"
            >
              <div className="container px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <>
                        <button 
                          className="flex items-center text-gray-700 hover:text-[#f39318] transition-colors w-full justify-between"
                          onClick={() => toggleDropdown(item.dropdown!)}
                        >
                          {item.name} 
                          <motion.div
                            animate={{ rotate: activeDropdown === item.dropdown ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
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
                              transition={{ duration: 0.3 }}
                              className="pl-4 overflow-hidden mt-3"
                            >
                              {item.dropdown === "activities" && activities.map((activity) => (
                                <Link
                                  key={activity.name}
                                  href={`/activities/${activity.name.toLowerCase().replace(/\s+/g, '-')}`}
                                  className={`flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors border-l-4 border-transparent hover:border-l-4 hover:border-gradient-${activity.color.split(' ')[1]}`}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <div className="h-12 w-12 rounded-lg overflow-hidden relative">
                                    <Image 
                                      src={activity.image} 
                                      alt={activity.name}
                                      width={48}
                                      height={48}
                                      className="object-cover w-full h-full"
                                    />
                                    <div className={`absolute inset-0 opacity-30 bg-gradient-to-tr ${activity.color}`}></div>
                                  </div>
                                  <div>
                                    <div className="font-medium text-[#f39318]">{activity.name}</div>
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
                          onClick={() => scrollToSection(item.sectionId!)}
                          className="block text-gray-700 hover:text-[#f39318] transition-colors py-2 w-full text-left"
                        >
                          {item.name}
                        </button>
                      ) : (
                        <Link 
                          href={item.href}
                          className="block text-gray-700 hover:text-[#f39318] transition-colors py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
} 