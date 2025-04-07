"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Award, User } from "lucide-react"

interface GradientCardProps {
  title: string
  author: string
  plays: number
  rewards: string
  difficulty: string
}

export function GradientCard({ title, author, plays, rewards, difficulty }: GradientCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "from-green-500 to-emerald-700"
      case "medium":
        return "from-yellow-500 to-amber-700"
      case "hard":
        return "from-red-500 to-rose-700"
      default:
        return "from-blue-500 to-indigo-700"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden bg-zinc-900/50 border-zinc-800 h-full">
        <div className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
        <CardHeader className="pb-2">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <div className="flex items-center text-zinc-400 text-sm">
            <User className="h-3 w-3 mr-1" />
            <span>{author}</span>
          </div>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="h-32 rounded-md bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center">
              <Play className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Badge
              variant="outline"
              className={`bg-gradient-to-r ${getDifficultyColor(difficulty)} text-white border-0`}
            >
              {difficulty}
            </Badge>
            <div className="flex items-center text-zinc-400 text-sm">
              <Play className="h-3 w-3 mr-1" />
              <span>{plays.toLocaleString()} plays</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t border-zinc-800 pt-4">
          <div className="flex items-center text-sm">
            <Award className="h-4 w-4 mr-2 text-yellow-500" />
            <span className="text-white">{rewards}</span>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

