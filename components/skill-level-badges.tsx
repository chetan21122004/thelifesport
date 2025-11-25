"use client"

import { Badge } from "@/components/ui/badge"
import { Users, Baby, User, GraduationCap, Award } from "lucide-react"

export type SkillLevel = "Kids" | "Adults" | "Beginner" | "Intermediate" | "Advanced" | "Pro"

interface SkillLevelBadgesProps {
  levels: SkillLevel[]
  className?: string
}

const skillConfig: Record<SkillLevel, { label: string; icon: any; color: string; bgColor: string }> = {
  Kids: {
    label: "Kids",
    icon: Baby,
    color: "text-blue-600",
    bgColor: "bg-blue-100 border-blue-300"
  },
  Adults: {
    label: "Adults",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-100 border-purple-300"
  },
  Beginner: {
    label: "Beginner",
    icon: User,
    color: "text-green-600",
    bgColor: "bg-green-100 border-green-300"
  },
  Intermediate: {
    label: "Intermediate",
    icon: GraduationCap,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100 border-yellow-300"
  },
  Advanced: {
    label: "Advanced",
    icon: Award,
    color: "text-orange-600",
    bgColor: "bg-orange-100 border-orange-300"
  },
  Pro: {
    label: "Pro",
    icon: Award,
    color: "text-red-600",
    bgColor: "bg-red-100 border-red-300"
  }
}

export function SkillLevelBadges({ levels, className = "" }: SkillLevelBadgesProps) {
  if (!levels || levels.length === 0) return null

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {levels.map((level, index) => {
        const config = skillConfig[level]
        const Icon = config.icon
        
        return (
          <Badge
            key={index}
            className={`${config.bgColor} ${config.color} border font-semibold px-3 py-1.5 flex items-center gap-1.5`}
          >
            <Icon className="w-3.5 h-3.5" />
            <span>{config.label}</span>
          </Badge>
        )
      })}
    </div>
  )
}

