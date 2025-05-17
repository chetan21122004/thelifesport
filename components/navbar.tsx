"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const activities = [
  { name: "Badminton", icon: "🏸", description: "Professional coaching" },
  { name: "Table Tennis", icon: "🏓", description: "Expert training" },
  { name: "Gymnastics", icon: "🤸", description: "All levels welcome" },
  { name: "Dance", icon: "💃", description: "Various styles" },
  { name: "Box Cricket", icon: "🏏", description: "Indoor cricket facility" },
  { name: "Cricket Net", icon: "🏏", description: "Professional practice nets" },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f39318] text-white shadow-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/lifelogo.jpg" alt="The Life Sports Logo" width={120} height={50} className="h-10 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium text-white/90 hover:text-yellow-400 transition-colors">
            Home
          </Link>
          <div className="relative group">
            <button 
              className="flex items-center text-sm font-medium text-white/90 hover:text-yellow-400 transition-colors"
              onClick={() => setIsActivitiesOpen(!isActivitiesOpen)}
            >
              Activities <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 top-full hidden w-72 bg-white text-gray-800 shadow-lg rounded-md p-4 group-hover:block border-t-2 border-yellow-400">
              <div className="grid gap-2">
                {activities.map((activity) => (
                  <Link 
                    key={activity.name}
                    href={`/activities/${activity.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center gap-3 p-2 hover:bg-[#f39318]/10 rounded-md transition-colors group"
                  >
                    <div className="h-10 w-10 rounded-full bg-[#f39318] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <span className="text-base">{activity.icon}</span>
                    </div>
                    <div>
                      <div className="font-medium text-[#f39318]">{activity.name}</div>
                      <div className="text-xs text-gray-500">{activity.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/about" className="text-sm font-medium text-white/90 hover:text-yellow-400 transition-colors">
            About Us
          </Link>
          <Link href="/facilities" className="text-sm font-medium text-white/90 hover:text-yellow-400 transition-colors">
            Facilities
          </Link>
          <Link href="/coaches" className="text-sm font-medium text-white/90 hover:text-yellow-400 transition-colors">
            Coaches
          </Link>
          <Link href="/contact" className="text-sm font-medium text-white/90 hover:text-yellow-400 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button className="bg-white hover:bg-yellow-400 text-[#f39318] font-bold shadow-lg transition-all duration-300 hover:scale-105">
            Book My Court
          </Button>
          <button 
            className="md:hidden text-white hover:text-yellow-400 transition-colors"
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
          "fixed inset-x-0 top-16 bg-[#f39318] md:hidden transition-all duration-300 ease-in-out shadow-lg",
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div className="container px-4 py-6 space-y-4">
          <Link 
            href="/"
            className="block text-sm font-medium text-white/90 hover:text-yellow-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <div>
            <button 
              className="flex items-center text-sm font-medium text-white/90 hover:text-yellow-400 transition-colors w-full justify-between"
              onClick={() => setIsActivitiesOpen(!isActivitiesOpen)}
            >
              Activities <ChevronDown className={cn("h-4 w-4 transition-transform", isActivitiesOpen && "rotate-180")} />
            </button>
            <div className={cn("mt-2 space-y-2 pl-4", !isActivitiesOpen && "hidden")}>
              {activities.map((activity) => (
                <Link
                  key={activity.name}
                  href={`/activities/${activity.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-base">{activity.icon}</span>
                  <span className="font-medium">{activity.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <Link 
            href="/about"
            className="block text-sm font-medium text-white/90 hover:text-yellow-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            href="/facilities"
            className="block text-sm font-medium text-white/90 hover:text-yellow-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Facilities
          </Link>
          <Link 
            href="/coaches"
            className="block text-sm font-medium text-white/90 hover:text-yellow-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Coaches
          </Link>
          <Link 
            href="/contact"
            className="block text-sm font-medium text-white/90 hover:text-yellow-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Button className="w-full bg-white hover:bg-yellow-400 text-[#f39318] font-bold">
            Book My Court
          </Button>
        </div>
      </div>
    </header>
  )
} 