"use client"

import { motion } from "framer-motion"
import { Edit3, Upload, PlayCircle, Award } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: <Edit3 className="h-8 w-8" />,
      title: "Create",
      description: "Design your quest with our intuitive builder. Add challenges, narratives, and decision points.",
    },
    {
      icon: <Upload className="h-8 w-8" />,
      title: "Mint",
      description: "Mint your quest as an NFT on the Zora network, setting rewards and participation requirements.",
    },
    {
      icon: <PlayCircle className="h-8 w-8" />,
      title: "Play",
      description: "Experience quests created by others or invite players to embark on your adventures.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Earn",
      description: "Collect rewards for completing quests or when others play through your creations.",
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {steps.map((step, index) => (
        <motion.div key={index} className="flex flex-col items-center text-center" variants={itemVariants}>
          <div className="relative mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              {step.icon}
            </div>
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent -translate-y-1/2">
                <div className="absolute right-0 top-1/2 w-2 h-2 rounded-full bg-purple-500 -translate-y-1/2"></div>
              </div>
            )}
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
          <p className="text-zinc-400">{step.description}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}

