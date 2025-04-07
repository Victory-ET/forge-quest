"use client"

import { motion } from "framer-motion"

export function AnimatedTitle() {
  const title = "QuestForge"
  const subtitle = "Interactive Web3 Adventures"

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-2 flex">
        {title.split("").map((char, index) => (
          <motion.span
            key={`title-${index}`}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h1>
      <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4"></div>
      <h2 className="text-xl md:text-2xl text-zinc-400 flex">
        {subtitle.split("").map((char, index) => (
          <motion.span
            key={`subtitle-${index}`}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            custom={index + title.length}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h2>
    </div>
  )
}

