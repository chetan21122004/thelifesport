"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users2, Trophy, Target } from "lucide-react"

const features = [
  {
    icon: Building2,
    title: "Corporate Sports Events",
    description: "Organize team building sports events for your company with our world-class facilities.",
  },
  {
    icon: Users2,
    title: "Team Building Activities",
    description: "Custom-designed activities to strengthen team bonding and improve workplace dynamics.",
  },
  {
    icon: Trophy,
    title: "Corporate Tournaments",
    description: "Host inter-corporate tournaments and championships in various sports.",
  },
  {
    icon: Target,
    title: "Wellness Programs",
    description: "Comprehensive wellness programs designed for corporate employees.",
  },
]

export function CorporateEventsSection() {
  return (
    <section className="py-6 pt-0 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">

          <div className="text-center max-w-3xl mx-auto mb-4">
              <div className="inline-flex items-center justify-center">
                <div className="h-px w-8 bg-gradient-to-r from-[#f39318] to-[#FF5500]"></div>
                <span className="mx-4 text-3xl uppercase tracking-wider font-semibold bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">Corporate Events</span>
                <div className="h-px w-8 bg-gradient-to-r from-[#FF5500] to-[#f39318]"></div>
              </div>
              
            </div>
          
          <p className="max-w-2xl mx-auto text-gray-600">
            Transform your corporate events into memorable experiences with our state-of-the-art facilities and professional organization.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-gradient-to-r from-[#f39318]/10 to-[#FF5500]/10 p-3 w-12 h-12 mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[#f39318]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="https://www.thelifesports.in/wp-content/uploads/2020/02/best-football-club-in-pune-1.jpg"
              alt="Corporate Events"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose The Life Sports for Corporate Events?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="rounded-full bg-gradient-to-r from-[#f39318]/10 to-[#FF5500]/10 p-1 mt-1">
                  <svg className="w-4 h-4 text-[#f39318]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-600">Professional event management and coordination</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="rounded-full bg-gradient-to-r from-[#f39318]/10 to-[#FF5500]/10 p-1 mt-1">
                  <svg className="w-4 h-4 text-[#f39318]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-600">Multiple indoor and outdoor sports facilities</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="rounded-full bg-gradient-to-r from-[#f39318]/10 to-[#FF5500]/10 p-1 mt-1">
                  <svg className="w-4 h-4 text-[#f39318]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-600">Customizable packages to suit your requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="rounded-full bg-gradient-to-r from-[#f39318]/10 to-[#FF5500]/10 p-1 mt-1">
                  <svg className="w-4 h-4 text-[#f39318]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-600">Expert coaches and event facilitators</span>
              </li>
            </ul>
            <div className="mt-8">
              <Button className="bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:opacity-90 text-white transition-all duration-300 hover:scale-105 shadow-lg">
                Enquire About Corporate Events
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 