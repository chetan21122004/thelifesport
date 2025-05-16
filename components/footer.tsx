"use client"

import Link from "next/link"
import { Phone, MapPin, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Blogs", href: "/blogs" },
  { name: "Book My Court", href: "/book-court" },
  { name: "Contact", href: "/contact" },
]

const activities = [
  { name: "Badminton Court In Pune", href: "#" },
  { name: "Table Tennis Coaching in Pune", href: "#" },
  { name: "Gymnastics Classes in Pune", href: "#" },
  { name: "Dance Classes In Pune", href: "#" },
  { name: "Box Cricket Ground In Pune", href: "#" },
  { name: "Football Academy in Pune", href: "#" },
]

const contactInfo = [
  { type: "phone", value: "+91 97677 55977", href: "tel:+919767755977" },
  { type: "phone", value: "+91 99220 84730", href: "tel:+919922084730" },
  { type: "phone", value: "+91 97672 72100", href: "tel:+919767272100" },
  { type: "email", value: "lifesportsenquiry@gmail.com", href: "mailto:lifesportsenquiry@gmail.com" },
  { type: "address", value: "19/1B/1, Near Hotel Green Park, Someshwarwadi Road, Someshwarwadi Pune-411008", href: "#" },
]

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Youtube, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#800020] to-[#600010] text-white border-t-2 border-yellow-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-yellow-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-white/80 hover:text-yellow-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-yellow-400 mb-4">Activities</h3>
            <ul className="space-y-2">
              {activities.map((activity) => (
                <li key={activity.name}>
                  <Link 
                    href={activity.href} 
                    className="text-white/80 hover:text-yellow-400 transition-colors"
                  >
                    {activity.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-yellow-400 mb-4">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-2">
                  {info.type === "phone" && (
                    <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  )}
                  {info.type === "email" && (
                    <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  )}
                  {info.type === "address" && (
                    <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                  )}
                  <Link 
                    href={info.href} 
                    className="text-white/80 hover:text-yellow-400 transition-colors"
                  >
                    {info.value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-yellow-400 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="rounded-full bg-orange-500 p-2 text-white hover:bg-orange-600 transition-colors hover:scale-110 transform duration-200"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-white/80">
            <p>Copyright © {new Date().getFullYear()} The Life Sports Academy Driven By Skovian Ventures</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 