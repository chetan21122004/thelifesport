"use client"

import { motion } from "framer-motion"
import { CheckCircle, Target, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface LearningOutcome {
  title: string
  description?: string
}

interface LearningOutcomesSectionProps {
  title?: string
  outcomes: LearningOutcome[]
  activityName?: string
}

export function LearningOutcomesSection({
  title = "What You'll Learn in Your First Month",
  outcomes,
  activityName
}: LearningOutcomesSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#f39318]/10 to-[#FF5500]/10 border border-[#f39318]/20 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Target className="w-5 h-5 text-[#f39318]" />
              <span className="text-sm font-semibold text-[#f39318] uppercase tracking-wide">
                Learning Outcomes
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            {activityName && (
              <p className="text-gray-600 text-lg">
                Your journey to excellence in {activityName} starts here
              </p>
            )}
          </div>

          {/* Outcomes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border border-gray-100 hover:border-[#f39318]/30 hover:shadow-lg transition-all duration-300 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f39318]/10 to-[#FF5500]/10 flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-[#f39318]" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {outcome.title}
                        </h3>
                        {outcome.description && (
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {outcome.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Progress Indicator */}
          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#f39318]/10 to-[#FF5500]/10 border border-[#f39318]/20">
              <TrendingUp className="w-5 h-5 text-[#f39318]" />
              <span className="text-sm font-semibold text-gray-700">
                Track your progress month by month
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

