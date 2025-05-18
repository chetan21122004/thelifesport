"use client"

import { useEffect, useCallback } from "react"
import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import useEmblaCarousel from "embla-carousel-react"
import AutoPlay from "embla-carousel-autoplay"

const testimonials = [
  {
    name: "Parvez",
    text: "The Life Sports is a very vibrant and active place with a friendly atmosphere. And it was great knowing Mr. Ganesh Nimhan –The Founder of The Life Sports. His Dedication towards Sports and Health for the society is a very commendable factor.",
  },
  {
    name: "Siddharth Pantvaidy",
    text: "The Life Sports is one of the finest sports academies in and around Baner/Pashan/Aundh area. After a lot of searching for the best tennis coaching in Pune, I came across The Life Sports through a lot of recommendations from people.",
  },
  {
    name: "Arvind Yadav",
    text: "This place is equivalent to mental peace. After home, I feel this is the place for me to find the peace I want. Love the Badminton Court…!",
  },
  {
    name: "Sachin Sahasrabudhe",
    text: "Total 4 Badminton Courts, water, Change Room and Booking facility available, You have nice collection of books as well at booking Counter. Flooring Average, Light adequate.",
  },
  {
    name: "Abhishek Dhadse",
    text: "The maintenance of these grounds are done in a perfect way. Badminton courts are ventilated properly and are ensured to be clean. You cannot wear outside shoes, so you have to carry badminton shoes separately. Parking is good if you're coming in two-wheelers. But for four-wheelers, it's not.",
  },
  {
    name: "Komal Khond",
    text: "It's a wonderful sports academy. Badminton court and their coaches are really very good.",
  },
]

const autoplayOptions = {
  delay: 3000,
  rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
}

export function TestimonialsSection({ maxItems = 4 }: { maxItems?: number }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [AutoPlay(autoplayOptions)]
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="py-16 bg-gradient-to-r from-[#FF5500] to-[#f39318] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="relative inline-block text-3xl font-bold text-white md:text-5xl mb-2">
            <span className="relative z-10">Our Champions' Voice</span>
            <div className="absolute -bottom-3 mt-1 left-0 w-full h-3 bg-yellow-500/30 transform -skew-x-12"></div>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-white/80 text-lg">
            Join the community of satisfied members at one of Pune's premier sports facilities
          </p>
        </div>

        <div className="relative w-full px-12">
          <div className="absolute inset-0 flex items-center justify-between z-10 pointer-events-none">
            <div className="sm:w-44 w-16 h-full bg-gradient-to-r from-[#FF5500] to-transparent"></div>
            <div className="sm:w-44 w-16 h-full bg-gradient-to-l from-[#f39318] to-transparent"></div>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                  <Card className="relative overflow-hidden group transition-all duration-500 h-full bg-red-600 border-2 border-white/20 hover:border-yellow-400">
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Quote Icon with Background */}
                      <div className="absolute -right-2 -top-6 w-14 mt-3 h-14 bg-yellow-400/20 rounded-full flex items-center justify-center transform rotate-12 group-hover:scale-110 transition-transform duration-500">
                        <Quote className="h-8 w-8 text-[#800000] transform -rotate-12" />
                      </div>

                      {/* Main Content */}
                      <div className="flex-1">
                        <p className="text-white/90 text-lg leading-relaxed mb-6 line-clamp-4 relative">
                          "{testimonial.text}"
                        </p>
                      </div>

                      {/* Author Section */}
                      <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                        <div className="relative">
                          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#FF5500] to-[#f39318] flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                            <span className="text-white font-bold text-lg">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div className="absolute -inset-1 bg-gradient-to-br from-yellow-400 to-[#f39318] rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                        </div>
                        <div>
                          <h3 className="font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                            {testimonial.name}
                          </h3>
                          <p className="text-white/60 text-sm">Verified Member</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-yellow-400/20 border-2 border-white/20 hover:border-yellow-400 z-20 text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <button 
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-yellow-400/20 border-2 border-white/20 hover:border-yellow-400 z-20 text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
} 