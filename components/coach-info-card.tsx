"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Phone, Mail, Calendar } from "lucide-react"

interface CoachInfoCardProps {
  name: string
  specialization: string
  photo?: string
  bio?: string
  achievements?: string[]
  experience?: string
  certifications?: string[]
  contactEmail?: string
  contactPhone?: string
}

export function CoachInfoCard({
  name,
  specialization,
  photo,
  bio,
  achievements = [],
  experience,
  certifications = [],
  contactEmail,
  contactPhone
}: CoachInfoCardProps) {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Meet Your Coach
            </h2>
            <p className="text-gray-600 text-lg">
              Learn from the best in the business
            </p>
          </div>

          <Card className="overflow-hidden shadow-xl border border-gray-100">
            <div className="grid md:grid-cols-3 gap-0">
              {/* Coach Photo */}
              <div className="relative h-64 md:h-auto md:min-h-[400px]">
                {photo ? (
                  <Image
                    src={photo}
                    alt={name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#f39318] to-[#FF5500] flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                        <span className="text-4xl font-bold">{name.charAt(0)}</span>
                      </div>
                      <p className="text-xl font-semibold">{name}</p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Specialization Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="bg-[#f39318] text-white font-semibold text-sm px-4 py-2">
                    {specialization}
                  </Badge>
                </div>
              </div>

              {/* Coach Info */}
              <CardContent className="md:col-span-2 p-6 md:p-8">
                <div className="space-y-6">
                  {/* Name and Experience */}
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      {name}
                    </h3>
                    {experience && (
                      <p className="text-lg text-[#f39318] font-semibold">
                        {experience} of Experience
                      </p>
                    )}
                  </div>

                  {/* Bio */}
                  {bio && (
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                      {bio}
                    </p>
                  )}

                  {/* Certifications */}
                  {certifications.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">
                        Certifications
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {certifications.map((cert, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-[#f39318]/10 text-[#f39318] border border-[#f39318]/20"
                          >
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Achievements */}
                  {achievements.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Achievements
                      </h4>
                      <ul className="space-y-2">
                        {achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-600">
                            <span className="text-[#f39318] mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Contact Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    {contactPhone && (
                      <Link href={`tel:${contactPhone}`}>
                        <Button className="flex-1 bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white">
                          <Phone className="w-4 h-4 mr-2" />
                          Call Coach
                        </Button>
                      </Link>
                    )}
                    <Link href="/contact">
                      <Button variant="outline" className="flex-1 border-[#f39318] text-[#f39318] hover:bg-[#f39318] hover:text-white">
                        <Mail className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

