"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, CheckCircle } from "lucide-react"
import Link from "next/link"

interface PricingTier {
  name: string
  price: string
  duration?: string
  features: string[]
  popular?: boolean
}

interface ScheduleSlot {
  day: string
  time: string
  level?: string
  coach?: string
}

interface PricingScheduleTableProps {
  pricingTiers?: PricingTier[]
  schedule?: ScheduleSlot[]
  activityName?: string
}

export function PricingScheduleTable({
  pricingTiers = [],
  schedule = [],
  activityName
}: PricingScheduleTableProps) {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Pricing Section */}
          {pricingTiers.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Pricing & Packages
                </h2>
                <p className="text-gray-600 text-lg">
                  Choose the plan that works best for you
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pricingTiers.map((tier, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className={`h-full relative overflow-hidden transition-all duration-300 ${
                      tier.popular 
                        ? 'border-2 border-[#f39318] shadow-xl scale-105' 
                        : 'border border-gray-200 hover:shadow-lg'
                    }`}>
                      {tier.popular && (
                        <div className="absolute top-0 right-0 bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                          POPULAR
                        </div>
                      )}
                      
                      <CardHeader className="text-center pb-4">
                        <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                          {tier.name}
                        </CardTitle>
                        <div className="mb-4">
                          <span className="text-4xl font-black text-[#f39318]">
                            {tier.price}
                          </span>
                          {tier.duration && (
                            <span className="text-gray-600 text-sm ml-2">
                              / {tier.duration}
                            </span>
                          )}
                        </div>
                      </CardHeader>

                      <CardContent>
                        <ul className="space-y-3 mb-6">
                          {tier.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-[#f39318] flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Link href="/contact" className="block">
                          <Button
                            className={`w-full ${
                              tier.popular
                                ? 'bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white'
                                : 'border-2 border-[#f39318] text-[#f39318] hover:bg-[#f39318] hover:text-white'
                            }`}
                          >
                            Enroll Now
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Schedule Section */}
          {schedule.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-2">
                  <Calendar className="w-8 h-8 text-[#f39318]" />
                  Class Schedule
                </h2>
                <p className="text-gray-600 text-lg">
                  Find the perfect time slot for your training
                </p>
              </div>

              <Card className="overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Day</th>
                        <th className="px-6 py-4 text-left font-semibold">Time</th>
                        <th className="px-6 py-4 text-left font-semibold">Level</th>
                        {schedule.some(s => s.coach) && (
                          <th className="px-6 py-4 text-left font-semibold">Coach</th>
                        )}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {schedule.map((slot, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-medium text-gray-900">
                            {slot.day}
                          </td>
                          <td className="px-6 py-4 text-gray-700 flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[#f39318]" />
                            {slot.time}
                          </td>
                          <td className="px-6 py-4">
                            {slot.level && (
                              <Badge className="bg-[#f39318]/10 text-[#f39318] border border-[#f39318]/20">
                                {slot.level}
                              </Badge>
                            )}
                          </td>
                          {schedule.some(s => s.coach) && (
                            <td className="px-6 py-4 text-gray-700">
                              {slot.coach || "-"}
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Call to Action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 mb-4">
              Need help choosing the right plan? Contact us for personalized guidance.
            </p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white px-8 py-6 text-lg">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

