"use client"

import { motion } from "framer-motion"
import { Users, Award, Zap } from "lucide-react"

export default function StatsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[100px] z-0"></div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                QuestForge
              </span>{" "}
              <span className="text-white">Community</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-6"></div>
            <p className="max-w-[800px] text-zinc-400 md:text-xl">Invest Your Time for Huge Returns</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-xl p-8"
          >
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
                  999M+
                </div>
                <div className="text-zinc-400">Users</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-600 mb-2">
                  20x
                </div>
                <div className="text-zinc-400">Growth</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-2">
                  $10M+
                </div>
                <div className="text-zinc-400">Rewards Paid</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600 mb-2">
                  50K+
                </div>
                <div className="text-zinc-400">Quests Created</div>
              </div>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Community Driven</h3>
                  <p className="text-zinc-400">
                    Join a thriving ecosystem of creators and players who are shaping the future of interactive web3
                    experiences.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-xl p-6 hover:border-pink-500/50 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center shrink-0">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Rewarding Experience</h3>
                  <p className="text-zinc-400">
                    Earn tokens, NFTs, and exclusive rewards by completing quests or when others play your creations.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Fast & Secure</h3>
                  <p className="text-zinc-400">
                    Built on Zora for lightning-fast transactions and top-tier security for all your digital assets.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

