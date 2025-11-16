"use client"

import Link from "next/link"
import { Phone, MapPin, Mail, Facebook, Twitter, Instagram, Youtube, Clock, Award, Users } from "lucide-react"

const quickLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/#about" },
  { name: "CORPORATE EVENTS", href: "/#corporate-events" },
  { name: "RENT A STUDIO", href: "/rent-a-studio" },
  { name: "TESTIMONIALS", href: "/#testimonials" },
  { name: "MEDIA", href: "/media" },
  { name: "CONTACT", href: "/contact" },
  { name: "BOOK MY COURT", href: "/book-court" },
]

const activities = [
  { name: "Badminton Coaching - K9 World Collaboration", href: "/activities/badminton", popular: true },
  { name: "Gymnastics Coaching", href: "/activities/gymnastics", popular: true },
  { name: "Table Tennis", href: "/activities/table-tennis", popular: false },
  { name: "Dance Classes", href: "/activities/dance", popular: false },
  { name: "Net Cricket with Bowling Machine", href: "/activities/cricketNet", popular: true },
  { name: "Pickle Ball Courts", href: "/activities/pickle-ball", popular: true },
  { name: "Mini Pro Turf", href: "/activities/mini-pro-turf", popular: false },
  { name: "Boxing - Fittera Collaboration", href: "/activities/boxing", popular: true },
]

const contactInfo = [
  { type: "phone", value: "+91 97677 55977", href: "tel:+919767755977", label: "Primary" },
  { type: "phone", value: "+91 99220 84730", href: "tel:+919922084730", label: "Secondary" },
  { type: "phone", value: "+91 97672 72100", href: "tel:+919767272100", label: "Support" },
  { type: "email", value: "thelifesports77@gmail.com", href: "mailto:thelifesports77@gmail.com", label: "General Inquiry"},
]

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/thelifesportsacademy", name: "Facebook", color: "hover:bg-blue-600" },
  { icon: Twitter, href: "https://twitter.com/thelifesports", name: "Twitter", color: "hover:bg-sky-500" },
  {
    icon: Instagram,
    href: "https://www.instagram.com/thelifesportss",
    name: "Instagram",
    color: "hover:bg-pink-600",
  },
  { icon: Youtube, href: "https://youtube.com/@thelifesports6787?si=4aJhQQgNfS_h3xVd", name: "YouTube", color: "hover:bg-red-600" },
]

const stats = [
  { icon: Users, value: "5000+", label: "Happy Members" },
  { icon: Award, value: "9+", label: "Sports Activities" },
  { icon: Clock, value: "20+", label: "Years Experience" },
]

export function Footer() {
  return (
    <footer className="relative bg-white">
      {/* Location Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="h-px w-8 bg-gradient-to-r from-[#f39318] to-[#FF5500]"></div>
              <span className="mx-4 text-3xl uppercase tracking-wider font-semibold bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                Visit Us
              </span>
              <div className="h-px w-8 bg-gradient-to-r from-[#FF5500] to-[#f39318]"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Find Us at Our
              <span className="bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent"> Location</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Pune, our state-of-the-art facility is easily accessible and equipped with world-class amenities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Map */}
            <div className="relative group">
              <div className="absolute  rounded-2xl "></div>
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1657.6194500767551!2d73.80375698325506!3d18.546112192459038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf19ab9178b9%3A0xaf8c256266a1aaff!2sThe%20Life%20Sports%20%7C%20Sports%20Academy%20%7C%20Badminton%20Court%20in%20Pune!5e1!3m2!1sen!2sin!4v1762101502482!5m2!1sen!2sin" 
                  width="100%" 
                  height="400" 
                  style={{border: 0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96 md:h-[400px]"
                  title="The Life Sports Academy Location"
                />
              </div>
            </div>

            {/* Location Details */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      19/1B/1, Near Hotel Green Park,<br />
                      Someshwarwadi Road, Someshwarwadi<br />
                      Pune-411008, Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Operating Hours</h3>
                    <div className="space-y-1 text-gray-600">
                      <p><span className="font-medium">Monday - Sunday:</span> 6:00 AM - 12:00 AM</p>
                      <p><span className="font-medium">All Days:</span> Open 365 Days</p>
                      <p className="text-sm text-[#f39318] font-medium">Call ahead for special bookings</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Numbers</h3>
                    <div className="space-y-1">
                      <Link href="tel:+919767755977" className="block text-gray-600 hover:text-[#f39318] transition-colors">
                        <span className="font-medium">Primary:</span> +91 97677 55977
                      </Link>
                      <Link href="tel:+919922084730" className="block text-gray-600 hover:text-[#f39318] transition-colors">
                        <span className="font-medium">Secondary:</span> +91 99220 84730
                      </Link>
                      <Link href="tel:+919767272100" className="block text-gray-600 hover:text-[#f39318] transition-colors">
                        <span className="font-medium">Support:</span> +91 97672 72100
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="https://maps.google.com/?q=The+Life+Sports+Academy+Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <button className="w-full bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:from-[#e8840f] hover:to-[#e54d00] text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Get Directions
                  </button>
                </Link>
                <Link href="/contact" className="flex-1">
                  <button className="w-full border-2 border-[#f39318] text-[#f39318] hover:bg-gradient-to-r hover:from-[#f39318] hover:to-[#FF5500] hover:text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-[#f39318]">


        {/* Main Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent mb-4">
                  The Life Sports Academy
                </h2>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Premier sports academy in Pune offering world-class facilities and professional coaching. Established in 2006, we have been serving the community for over 20 years.
                </p>
              </div>

              {/* Address Card */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-[#f39318]/30 transition-colors duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Visit Us</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      19/1B/1, Near Hotel Green Park, Someshwarwadi Road, Someshwarwadi Pune-411008
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full"></div>
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="group flex items-center gap-2 text-slate-400 hover:text-[#f39318] transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-slate-800/50"
                  >
                    <div className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-[#f39318] transition-colors duration-300"></div>
                    <span className="text-sm font-medium">{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative">
                Our Activities
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full"></div>
              </h3>
              <div className="space-y-2">
                {activities.map((activity) => (
                  <Link
                    key={activity.name}
                    href={activity.href}
                    className="group flex items-center justify-between text-slate-400 hover:text-[#f39318] transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-slate-800/50"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-[#f39318] transition-colors duration-300"></div>
                      <span className="text-sm font-medium">{activity.name}</span>
                    </div>
                    {activity.popular && (
                      <span className="text-xs bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white px-2 py-1 rounded-full font-medium">
                        Popular
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact & Social */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative">
                Get In Touch
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full"></div>
              </h3>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <Link
                    key={index}
                    href={info.href}
                    className="group flex items-center gap-3 text-slate-400 hover:text-[#f39318] transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-slate-800/50"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#f39318] group-hover:to-[#FF5500] transition-all duration-300">
                      {info.type === "phone" && <Phone className="h-4 w-4" />}
                      {info.type === "email" && <Mail className="h-4 w-4" />}
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">{info.label}</div>
                      <div className="text-sm font-medium">{info.value}</div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <Link
                        key={index}
                        href={social.href}
                        className={`group w-11 h-11 bg-slate-700 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 ${social.color}`}
                        title={social.name}
                      >
                        <Icon className="h-5 w-5 text-slate-300 group-hover:text-white transition-colors duration-300" />
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} The Life Sports Academy. All rights reserved.
              </p>
              <div className="hidden md:flex items-center gap-4 text-xs text-slate-500">
                <Link href="/privacy-policy" className="hover:text-[#f39318] transition-colors">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link href="/terms" className="hover:text-[#f39318] transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}
