"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, X, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const activities = [
  { 
    name: "Badminton", 
    icon: "🏸", 
    description: "Professional coaching",
    features: ["World-class courts", "Expert coaches", "All age groups"]
  },
  { 
    name: "Table Tennis", 
    icon: "🏓", 
    description: "Expert training",
    features: ["Professional tables", "Tournament training", "Beginners welcome"]
  },
  { 
    name: "Gymnastics", 
    icon: "🤸", 
    description: "All levels welcome",
    features: ["Safe environment", "Certified trainers", "Modern equipment"]
  },
  { 
    name: "Dance", 
    icon: "💃", 
    description: "Various styles",
    features: ["Multiple dance forms", "Professional choreographers", "Regular events"]
  },
  { 
    name: "Box Cricket", 
    icon: "🏏", 
    description: "Indoor cricket facility",
    features: ["Indoor arena", "Practice nets", "Tournament hosting"]
  },
  { 
    name: "Cricket Net", 
    icon: "🏏", 
    description: "Professional practice nets",
    features: ["Professional nets", "Bowling machines", "Expert coaching"]
  },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeActivity, setActiveActivity] = useState<string | null>(null)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
    

      {/* Main Navigation */}
      <header className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 bg-[#f39318]"
      )}>
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/images/lifelogo.jpg" 
                alt="The Life Sports Logo" 
                width={140} 
                height={60} 
                className="h-12 w-auto transition-transform duration-300 hover:scale-105" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={cn(
                "text-sm font-medium transition-colors text-white"
              )}
            >
              Home
            </Link>
            <div 
              className="relative group"
              onMouseEnter={() => setIsActivitiesOpen(true)}
              onMouseLeave={() => setIsActivitiesOpen(false)}
            >
              <button 
                className={cn(
                  "flex items-center text-sm font-medium transition-colors text-white"
                )}
              >
                Activities <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              
              {/* Mega Menu */}
              <div className={cn(
                "absolute left-1/2 -translate-x-1/2 top-full w-[600px] bg-white text-gray-800 shadow-xl rounded-xl p-6 transition-all duration-300 border-t-2 border-[#f39318]",
                isActivitiesOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
              )}>
                <div className="grid grid-cols-2 gap-4">
                  {activities.map((activity) => (
                    <div 
                      key={activity.name}
                      className="relative"
                      onMouseEnter={() => setActiveActivity(activity.name)}
                      onMouseLeave={() => setActiveActivity(null)}
                    >
                      <Link 
                        href={`/activities/${activity.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block p-3 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-lg bg-[#f39318]/10 flex items-center justify-center text-[#f39318] transition-transform group-hover:scale-110">
                            <span className="text-xl">{activity.icon}</span>
                          </div>
                          <div>
                            <div className="font-semibold text-[#f39318]">{activity.name}</div>
                            <div className="text-xs text-gray-500">{activity.description}</div>
                          </div>
                        </div>
                        
                        {/* Features Tooltip */}
                        <div className={cn(
                          "absolute left-full top-0 ml-2 w-48 bg-white p-3 rounded-lg shadow-lg border border-gray-100 transition-all duration-200",
                          activeActivity === activity.name ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"
                        )}>
                          <div className="space-y-2">
                            {activity.features.map((feature, index) => (
                              <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                <div className="h-1.5 w-1.5 rounded-full bg-[#f39318]"></div>
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {["About Us", "Facilities", "Coaches", "Contact"].map((item) => (
              <Link 
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className={cn(
                  "text-sm font-medium transition-colors text-white"
                )}
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button 
              className={cn(
                "hidden md:flex bg-yellow-400 hover:bg-yellow-400/90 text-white font-bold shadow-lg transition-all duration-300 hover:scale-105"
              )}
            >
              Book My Court
            </Button>
            <button 
              className={cn(
                "md:hidden transition-colors",
                isScrolled ? "text-gray-700" : "text-white"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-x-0 top-20 bg-white md:hidden transition-all duration-300 ease-in-out shadow-lg",
            isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
          )}
        >
          <div className="container px-4 py-6 space-y-4">
            <Link 
              href="/"
              className="block text-gray-700 hover:text-[#f39318] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div>
              <button 
                className="flex items-center text-gray-700 hover:text-[#f39318] transition-colors w-full justify-between"
                onClick={() => setIsActivitiesOpen(!isActivitiesOpen)}
              >
                Activities 
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform duration-300",
                  isActivitiesOpen && "rotate-180"
                )} />
              </button>
              <div className={cn(
                "mt-2 space-y-2 pl-4",
                !isActivitiesOpen && "hidden"
              )}>
                {activities.map((activity) => (
                  <Link
                    key={activity.name}
                    href={`/activities/${activity.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="h-10 w-10 rounded-lg bg-[#f39318]/10 flex items-center justify-center text-[#f39318]">
                      <span className="text-lg">{activity.icon}</span>
                    </div>
                    <div>
                      <div className="font-medium text-[#f39318]">{activity.name}</div>
                      <div className="text-xs text-gray-500">{activity.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            {["About Us", "Facilities", "Coaches", "Contact"].map((item) => (
              <Link 
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block text-gray-700 hover:text-[#f39318] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Button className="w-full bg-yellow-400 hover:bg-[#f39318]/90 text-white font-bold">
              Book My Court
            </Button>
          </div>
        </div>
      </header>
    </>
  )
} 