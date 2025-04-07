"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "Explore", href: "/explore" },
    { title: "Create", href: "/create" },
    {
      title: "Resources",
      href: "#",
      submenu: [
        { title: "Documentation", href: "/docs" },
        { title: "Tutorials", href: "/tutorials" },
        { title: "FAQ", href: "/faq" },
      ],
    },
    { title: "Community", href: "/community" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || isOpen ? "bg-black/80 backdrop-blur-lg border-b border-zinc-800" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-blue-500"></div>
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
              QuestForge
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.submenu ? (
                  <>
                    <button className="flex items-center text-zinc-400 hover:text-white transition-colors">
                      {item.title}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-zinc-900 border border-zinc-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                      {item.submenu.map((subitem, subindex) => (
                        <Link
                          key={subindex}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800"
                        >
                          {subitem.title}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={item.href} className="text-zinc-400 hover:text-white transition-colors">
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-zinc-700 hover:border-green-500 hover:bg-green-500/10 text-white"
            >
              Connect Wallet
            </Button>
            <Button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white border-0">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center text-zinc-400 hover:text-white"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-lg border-b border-zinc-800"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    {item.submenu ? (
                      <div className="space-y-2">
                        <div className="font-medium text-white">{item.title}</div>
                        <div className="pl-4 space-y-2 border-l border-zinc-800">
                          {item.submenu.map((subitem, subindex) => (
                            <Link
                              key={subindex}
                              href={subitem.href}
                              className="block text-zinc-400 hover:text-white"
                              onClick={() => setIsOpen(false)}
                            >
                              {subitem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link href={item.href} className="block font-medium text-white" onClick={() => setIsOpen(false)}>
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="w-full border-zinc-700 hover:border-green-500 hover:bg-green-500/10 text-white"
                >
                  Connect Wallet
                </Button>
                <Button className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white border-0">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

