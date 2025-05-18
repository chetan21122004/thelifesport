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
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Sitemap", href: "/sitemap" },
]

const activities = [
  { name: "Badminton Court In Pune", href: "/activities/badminton" },
  { name: "Table Tennis Coaching in Pune", href: "/activities/table-tennis" },
  { name: "Gymnastics Classes in Pune", href: "/activities/gymnastics" },
  { name: "Dance Classes In Pune", href: "/activities/dance" },
  { name: "Box Cricket Ground In Pune", href: "/activities/box-cricket" },
  { name: "Football Academy in Pune", href: "/activities/football" },
  { name: "Yoga Classes", href: "/activities/yoga" },
  { name: "Cricket Net Practice", href: "/activities/cricket-net" },
]

const contactInfo = [
  { type: "phone", value: "+91 97677 55977", href: "tel:+919767755977" },
  { type: "phone", value: "+91 99220 84730", href: "tel:+919922084730" },
  { type: "phone", value: "+91 97672 72100", href: "tel:+919767272100" },
  { type: "email", value: "lifesportsenquiry@gmail.com", href: "mailto:lifesportsenquiry@gmail.com" },
  { type: "address", value: "19/1B/1, Near Hotel Green Park, Someshwarwadi Road, Someshwarwadi Pune-411008", href: "#" },
]

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/thelifesportsacademy" },
  { icon: Twitter, href: "https://twitter.com/thelifesports" },
  { icon: Instagram, href: "https://instagram.com/thelifesportsacademy" },
  { icon: Youtube, href: "https://youtube.com/thelifesportsacademy" },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-red-700  to-[#f39318] text-white border-t-2 border-yellow-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-white mb-4 border-b-2 border-yellow-400 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-white/90 hover:text-yellow-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 bg-yellow-400 rounded-full group-hover:w-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4 border-b-2 border-yellow-400 pb-2 inline-block">Activities</h3>
            <ul className="space-y-2">
              {activities.map((activity) => (
                <li key={activity.name}>
                  <Link 
                    href={activity.href} 
                    className="text-white/90 hover:text-yellow-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 bg-yellow-400 rounded-full group-hover:w-2 transition-all duration-300"></span>
                    {activity.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4 border-b-2 border-yellow-400 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  {info.type === "phone" && (
                    <Phone className="h-5 w-5 text-yellow-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  )}
                  {info.type === "email" && (
                    <Mail className="h-5 w-5 text-yellow-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  )}
                  {info.type === "address" && (
                    <MapPin className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  )}
                  <Link 
                    href={info.href} 
                    className="text-white/90 hover:text-yellow-400 transition-colors"
                  >
                    {info.value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4 border-b-2 border-yellow-400 pb-2 inline-block">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="rounded-full bg-white/10 p-3 text-white hover:bg-yellow-400 hover:text-[#f39318] transition-all duration-300 hover:scale-110 transform group"
                  >
                    <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/10">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-white/90">
            <p>Copyright © {new Date().getFullYear()} The Life Sports Academy Driven By Skovian Ventures</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 