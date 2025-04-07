"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Award, Clock, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface Quest {
  id: string
  title: string
  creator: string
  image: string
  rewards: string
  participants: number
  duration: string
  difficulty: "Easy" | "Medium" | "Hard"
  tags: string[]
}

export default function QuestShowcase() {
  const [activeQuest, setActiveQuest] = useState(0)

  const quests: Quest[] = [
    {
      id: "1",
      title: "Maximum Effort Maxi Rewards",
      creator: "QuestForge Guild",
      image: "/placeholder.svg?height=400&width=600",
      rewards: "1.59M+",
      participants: 5000,
      duration: "7 days",
      difficulty: "Medium",
      tags: ["NFT", "DeFi", "Gaming"],
    },
    {
      id: "2",
      title: "Crypto Explorer Challenge",
      creator: "Web3 Wizards",
      image: "/placeholder.svg?height=400&width=600",
      rewards: "500",
      participants: 1200,
      duration: "14 days",
      difficulty: "Hard",
      tags: ["Learn", "Earn", "Crypto"],
    },
    {
      id: "3",
      title: "NFT Collection Hunt",
      creator: "Digital Collectors",
      image: "/placeholder.svg?height=400&width=600",
      rewards: "10 NFTs",
      participants: 3500,
      duration: "30 days",
      difficulty: "Easy",
      tags: ["Art", "Collectibles", "Community"],
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-500"
      case "Medium":
        return "bg-yellow-500"
      case "Hard":
        return "bg-red-500"
      default:
        return "bg-blue-500"
    }
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-green-500/10 blur-[100px] z-0"></div>
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[80px] z-0"></div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">QuestOn</span>{" "}
              <span className="text-white">Quest</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-6"></div>
            <p className="max-w-[800px] text-zinc-400 md:text-xl">
              Minimum Effort Maxi Rewards With QuestForge Training
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Quest Image and Info */}
          <motion.div
            key={activeQuest}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-xl overflow-hidden"
          >
            <div className="relative h-[300px]">
              <Image
                src={quests[activeQuest].image || "/placeholder.svg"}
                alt={quests[activeQuest].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center space-x-2 mb-2">
                  {quests[activeQuest].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{quests[activeQuest].title}</h3>
                <p className="text-zinc-400">by {quests[activeQuest].creator}</p>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex flex-col items-center">
                  <Award className="h-6 w-6 text-green-500 mb-1" />
                  <span className="text-lg font-bold text-white">{quests[activeQuest].rewards}</span>
                  <span className="text-xs text-zinc-500">REWARDS</span>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="h-6 w-6 text-blue-500 mb-1" />
                  <span className="text-lg font-bold text-white">
                    {quests[activeQuest].participants.toLocaleString()}
                  </span>
                  <span className="text-xs text-zinc-500">PARTICIPANTS</span>
                </div>
                <div className="flex flex-col items-center">
                  <Clock className="h-6 w-6 text-purple-500 mb-1" />
                  <span className="text-lg font-bold text-white">{quests[activeQuest].duration}</span>
                  <span className="text-xs text-zinc-500">DURATION</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${getDifficultyColor(quests[activeQuest].difficulty)}`}></div>
                  <span className="text-zinc-400 text-sm">{quests[activeQuest].difficulty}</span>
                </div>
                <Button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white border-0">
                  <Link href={`/quest/${quests[activeQuest].id}`} className="flex items-center">
                    Start Quest
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Quest Selection and Earnings Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4">Earning Rewards is SAFE</h3>
              <p className="text-zinc-400 mb-4">
                We have robust security to verify and reward honest work on QuestForge
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 bg-zinc-800/50 rounded-lg p-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Fast Payouts</h4>
                    <p className="text-xs text-zinc-500">Rewards within 24h</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-zinc-800/50 rounded-lg p-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Award className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Verified Rewards</h4>
                    <p className="text-xs text-zinc-500">100% completion rate</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4">Earning Rewards is SIMPLE</h3>

              <div className="space-y-4">
                {quests.map((quest, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                      activeQuest === index
                        ? "bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/50"
                        : "bg-zinc-800/50 hover:bg-zinc-800/80"
                    }`}
                    onClick={() => setActiveQuest(index)}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activeQuest === index
                          ? "bg-gradient-to-r from-green-400 to-blue-500 text-white"
                          : "bg-zinc-700 text-zinc-300"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium">{quest.title}</h4>
                      <p className="text-xs text-zinc-500">{quest.creator}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold">{quest.rewards}</div>
                      <div className="text-xs text-zinc-500">REWARDS</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

