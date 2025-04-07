import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import QuestShowcase from "@/components/quest-showcase"
import StatsSection from "@/components/stats-section"
import { HowItWorks } from "@/components/how-it-works"
import EcosystemSection from "@/components/ecosystem-section"
import { GradientButton } from "@/components/gradient-button"
import { ArrowRight, Github, Twitter } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Quest Showcase */}
      <QuestShowcase />

      {/* How It Works */}
      <section className="py-24 bg-zinc-900/30 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[100px] z-0"></div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              How QuestForge Works
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
            <p className="max-w-[800px] text-zinc-400 md:text-lg">
              A simple process to create, share, and experience interactive quests on the blockchain.
            </p>
          </div>
          <HowItWorks />
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Ecosystem Section */}
      <EcosystemSection />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-blue-900/20 to-purple-900/20 z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-green-500/5 blur-[100px] z-0"></div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-[800px] mx-auto bg-zinc-900/50 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-zinc-800">
            <div className="flex flex-col items-center text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
                Ready to Forge Your Quest?
              </h2>
              <p className="text-zinc-400 md:text-lg max-w-[600px]">
                Join our community of creators and adventurers. Start building your first quest today and earn rewards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <GradientButton href="/signup">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </GradientButton>
                <Link
                  href="/docs"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-700 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 hover:border-zinc-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Read the Docs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">
                QuestForge
              </h3>
              <p className="text-zinc-500">Building the future of interactive web3 experiences.</p>
              <div className="flex space-x-4">
                <Link href="https://twitter.com" className="text-zinc-500 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="https://github.com" className="text-zinc-500 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/features" className="text-zinc-500 hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-zinc-500 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/roadmap" className="text-zinc-500 hover:text-white transition-colors">
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="text-zinc-500 hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-zinc-500 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials" className="text-zinc-500 hover:text-white transition-colors">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="text-zinc-500 hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-zinc-500 hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-zinc-500 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-zinc-500 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-zinc-500 hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-zinc-500 hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-zinc-900 text-center text-zinc-500">
            <p>© {new Date().getFullYear()} QuestForge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

