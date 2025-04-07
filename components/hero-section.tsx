"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import HeroParticles from "./hero-particles"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight

    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Glow effect
    const glows = []
    const colors = [
      { r: 0, g: 255, b: 128 }, // Green
      { r: 0, g: 128, b: 255 }, // Blue
      { r: 128, g: 0, b: 255 }, // Purple
    ]

    for (let i = 0; i < 5; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)]
      glows.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 300 + 200,
        color,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw glows
      glows.forEach((glow) => {
        // Move glow
        glow.x += glow.vx
        glow.y += glow.vy

        // Bounce off edges
        if (glow.x < 0 || glow.x > width) glow.vx *= -1
        if (glow.y < 0 || glow.y > height) glow.vy *= -1

        // Create gradient
        const gradient = ctx.createRadialGradient(glow.x, glow.y, 0, glow.x, glow.y, glow.radius)

        gradient.addColorStop(0, `rgba(${glow.color.r}, ${glow.color.g}, ${glow.color.b}, 0.3)`)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(glow.x, glow.y, glow.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ filter: "blur(80px)" }} />

      {/* Particles */}
      <div className="absolute inset-0 z-10 opacity-60">
        <HeroParticles />
      </div>

      {/* Content */}
      <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
              Together
            </span>
            <br />
            <span className="text-white">Empowering Web3</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Access to The Power Of <span className="text-green-400 font-semibold">Decentralized</span> Collaboration.
            <br />
            We Make Quests <span className="text-blue-400 font-semibold">Simplified</span> And{" "}
            <span className="text-purple-400 font-semibold">Rewarded</span> For Everyone.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl"
        >
          <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 group">
            <div className="flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-2 text-white">Unlock Earnings & Discover Alpha</h3>
              <div className="flex justify-between mb-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">15.94K+</span>
                  <span className="text-xs text-zinc-500">USERS</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">8.54K+</span>
                  <span className="text-xs text-zinc-500">QUESTS</span>
                </div>
              </div>
              <div className="flex-grow mb-4">
                <div className="h-24 bg-zinc-800/50 rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 flex items-end">
                    <div className="h-1/3 w-full bg-gradient-to-r from-green-500 to-blue-500 opacity-70"></div>
                    <div className="absolute bottom-0 left-0 w-full h-full">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path
                          d="M0,100 L0,40 C20,30 40,70 60,50 C80,30 100,40 100,60 L100,100 Z"
                          fill="url(#gradient1)"
                          className="transition-all duration-500 group-hover:translate-y-[-5%]"
                        />
                        <defs>
                          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10B981" />
                            <stop offset="100%" stopColor="#3B82F6" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                </div>
                <Button className="bg-green-500 hover:bg-green-600 text-black font-medium">
                  <Link href="/explore" className="flex items-center">
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-2 text-white">Engage Your Community & Create Quests & Succeed</h3>
              <div className="flex justify-between mb-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">10.5K+</span>
                  <span className="text-xs text-zinc-500">CREATORS</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">90K+</span>
                  <span className="text-xs text-zinc-500">REWARDS</span>
                </div>
              </div>
              <div className="flex-grow mb-4">
                <div className="h-24 bg-zinc-800/50 rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 flex items-end">
                    <div className="h-1/3 w-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-70"></div>
                    <div className="absolute bottom-0 left-0 w-full h-full">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path
                          d="M0,100 L0,60 C20,80 40,40 60,60 C80,80 100,60 100,70 L100,100 Z"
                          fill="url(#gradient2)"
                          className="transition-all duration-500 group-hover:translate-y-[-5%]"
                        />
                        <defs>
                          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="100%" stopColor="#8B5CF6" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                  <div className="w-4 h-4 rounded-full bg-pink-500"></div>
                </div>
                <Button className="bg-blue-500 hover:bg-blue-600 text-black font-medium">
                  <Link href="/create" className="flex items-center">
                    Create
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

