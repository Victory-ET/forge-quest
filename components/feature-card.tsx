"use client"

import { motion } from "framer-motion"
import { Wand2, Coins, Trophy, Users, Smartphone, Layers, type LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FeatureCardProps {
  title: string
  description: string
  icon: string
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const icons: Record<string, LucideIcon> = {
    Wand2,
    Coins,
    Trophy,
    Users,
    Smartphone,
    Layers,
  }

  const Icon = icons[icon] || Wand2

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="bg-zinc-900/50 border-zinc-800 hover:border-purple-500/50 transition-all duration-300 h-full">
        <CardHeader>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-xl text-white">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-zinc-400">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

