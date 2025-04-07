"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function EcosystemSection() {
  const ecosystems = [
    { name: "Ethereum", logo: "/placeholder.svg?height=40&width=40" },
    { name: "Polygon", logo: "/placeholder.svg?height=40&width=40" },
    { name: "Solana", logo: "/placeholder.svg?height=40&width=40" },
    { name: "Arbitrum", logo: "/placeholder.svg?height=40&width=40" },
    { name: "Optimism", logo: "/placeholder.svg?height=40&width=40" },
    { name: "Zora", logo: "/placeholder.svg?height=40&width=40" },
    { name: "Base", logo: "/placeholder.svg?height=40&width=40" },
    { name: "Cosmos", logo: "/placeholder.svg?height=40&width=40" },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Supported Ecosystems</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-6"></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-8"
        >
          {ecosystems.map((eco, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-zinc-800/80 backdrop-blur-md border border-zinc-700 flex items-center justify-center mb-3 hover:border-green-500/50 transition-all duration-300">
                <Image
                  src={eco.logo || "/placeholder.svg"}
                  alt={eco.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <span className="text-zinc-400 text-sm">{eco.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

