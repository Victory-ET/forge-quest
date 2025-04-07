"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import type { ReactNode } from "react"

interface GradientButtonProps {
  children: ReactNode
  href: string
}

export function GradientButton({ children, href }: GradientButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <Link
        href={href}
        className="relative flex items-center justify-center px-6 py-2 bg-black rounded-lg leading-none text-white"
      >
        {children}
      </Link>
    </motion.div>
  )
}

