"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { User, Bell, Zap, Sparkles } from "lucide-react"
// Custom SVG logo for Raseed (AI Wallet theme)
// Improved modern AI wallet logo for Raseed
function RaseedLogo({ className = "w-12 h-12" }) {
  // Refined: Bolder wallet shape, richer gradients, card peeking out, prominent R clasp, digital accent
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Card peeking out of wallet */}
      <rect x="13" y="10" width="22" height="8" rx="2.5" fill="url(#cardGradient)" stroke="#6366f1" strokeWidth="1.2" />
      {/* Wallet body with bold outline and rich gradient */}
      <rect x="7" y="15" width="34" height="18" rx="6" fill="url(#walletBodyRich)" stroke="#6366f1" strokeWidth="2.5" />
      {/* Wallet flap with shadow and highlight */}
      <rect x="11" y="8" width="26" height="9" rx="4.5" fill="url(#walletFlapRich)" stroke="#a21caf" strokeWidth="1.7" />
      {/* Stylized R as wallet clasp, more prominent */}
      <g filter="url(#rShadow)">
        <path d="M23.5 20c0-1.1 1-2 2.2-2h2.1c1.1 0 2 .9 2 2s-.9 2-2 2h-2.1v2.1" stroke="#a21caf" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="27.5" cy="20" r="1.2" fill="#6366f1" />
      </g>
      {/* Digital/AI accent: circuit lines and nodes */}
      <path d="M16 29h16" stroke="#818cf8" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="16" cy="29" r="1.1" fill="#a5b4fc" />
      <circle cx="32" cy="29" r="1.1" fill="#a5b4fc" />
      {/* Soft shadow/glow under wallet */}
      <ellipse cx="24" cy="37.5" rx="12" ry="3.2" fill="#6366f1" fillOpacity="0.13" />
      <defs>
        <linearGradient id="walletBodyRich" x1="7" y1="15" x2="41" y2="33" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e0e7ef" />
          <stop offset="0.5" stopColor="#c7d2fe" />
          <stop offset="1" stopColor="#a5b4fc" />
        </linearGradient>
        <linearGradient id="walletFlapRich" x1="11" y1="8" x2="37" y2="17" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a21caf" />
          <stop offset="1" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="cardGradient" x1="13" y1="10" x2="35" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f3f4f6" />
          <stop offset="1" stopColor="#c7d2fe" />
        </linearGradient>
        <filter id="rShadow" x="20" y="16" width="12" height="10" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="1" stdDeviation="0.7" floodColor="#a21caf" floodOpacity="0.18" />
        </filter>
      </defs>
    </svg>
  )
}
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  // Mock notification count - in real app this would come from API/state management
  const [notificationCount, setNotificationCount] = useState(3)

  return (
    <html lang="en">
      <head>
        <title>Raseed - AI-Powered Receipt Manager for Google Wallet</title>
        <meta
          name="description"
          content="Transform your receipts into smart Google Wallet passes with AI-powered insights, multilingual support, and personalized financial recommendations."
        />
        <meta
          name="keywords"
          content="receipt manager, Google Wallet, AI, financial insights, expense tracking, multilingual, voice commands"
        />
      </head>
      <body className={inter.className}>
        {/* Global Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="flex items-center justify-between h-20">
              {/* Logo Section */}
              <Link href="/" className="flex items-center gap-4 group">
                <div className="relative">
                  <RaseedLogo className="w-12 h-12 drop-shadow-lg group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="hidden sm:block">
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      Raseed
                    </h1>
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 text-xs font-semibold px-2 py-1 animate-pulse">
                      AI Wallet
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-500 font-medium -mt-1">Smarter Receipts. Smarter Wallet.</p>
                </div>
              </Link>

              {/* Navigation */}
              <div className="flex-1 flex justify-center">
                <Navigation />
              </div>

              {/* User Actions */}
              <div className="flex items-center gap-2">
                {/* Notifications */}
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="relative hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 rounded-xl"
                >
                  <Link href="/notifications">
                    <Bell className="w-5 h-5" />
                    {notificationCount > 0 && (
                      <Badge
                        variant="destructive"
                        className="absolute -top-1 -right-1 w-5 h-5 p-0 text-xs flex items-center justify-center bg-red-500 hover:bg-red-600"
                      >
                        {notificationCount > 9 ? "9+" : notificationCount}
                      </Badge>
                    )}
                    <span className="sr-only">{notificationCount} new notifications</span>
                  </Link>
                </Button>

                {/* Profile */}
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="hover:bg-purple-50 hover:text-purple-600 transition-all duration-200 rounded-xl"
                >
                  <Link href="/profile">
                    <User className="w-5 h-5" />
                    <span className="hidden md:inline ml-2 font-medium">Profile</span>
                  </Link>
                </Button>

                {/* Primary CTA */}
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl px-4 py-2 font-semibold group"
                >
                  <Link href="/upload">
                    <Zap className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    <span className="hidden sm:inline">Scan Receipt</span>
                    <span className="sm:hidden">Scan</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Progress Bar (optional - shows AI processing) */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-0 animate-pulse"></div>
        </header>

        {/* Main Content */}
        <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">{children}</main>

        {/* Conditional Footer - Only show on home page */}
        {isHomePage && (
          <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 py-16 relative">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                  <div className="flex items-center gap-3 mb-6">
                    <RaseedLogo className="w-12 h-12 drop-shadow-lg group-hover:scale-105 transition-transform duration-300" />
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Raseed
                      </h3>
                      <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30 text-xs">
                        AI-Powered
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Transform every receipt into smart financial insights with AI-powered analysis and seamless Google
                    Wallet integration.
                  </p>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center hover:bg-blue-600/30 transition-colors cursor-pointer">
                      <span className="text-blue-400 text-sm font-bold">f</span>
                    </div>
                    <div className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center hover:bg-purple-600/30 transition-colors cursor-pointer">
                      <span className="text-purple-400 text-sm font-bold">t</span>
                    </div>
                    <div className="w-8 h-8 bg-indigo-600/20 rounded-lg flex items-center justify-center hover:bg-indigo-600/30 transition-colors cursor-pointer">
                      <span className="text-indigo-400 text-sm font-bold">in</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-6 text-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    AI Features
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link
                        href="/voice"
                        className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:bg-blue-400 transition-colors"></div>
                        Voice Commands
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/live-scan"
                        className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full group-hover:bg-purple-400 transition-colors"></div>
                        Live AR Scanner
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/smart-recommendations"
                        className="text-gray-300 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                      >
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full group-hover:bg-indigo-400 transition-colors"></div>
                        Smart Recommendations
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/gamification"
                        className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2 group"
                      >
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:bg-green-400 transition-colors"></div>
                        Gamification
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/family"
                        className="text-gray-300 hover:text-pink-400 transition-colors flex items-center gap-2 group"
                      >
                        <div className="w-1.5 h-1.5 bg-pink-500 rounded-full group-hover:bg-pink-400 transition-colors"></div>
                        Family Finance
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-6 text-lg bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    Tools & Analytics
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link
                        href="/dashboard"
                        className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:bg-blue-400 transition-colors"></div>
                        Smart Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/analytics"
                        className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2 group"
                      >
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:bg-green-400 transition-colors"></div>
                        Advanced Analytics
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/receipts"
                        className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full group-hover:bg-purple-400 transition-colors"></div>
                        Receipt Library
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/chat"
                        className="text-gray-300 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                      >
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full group-hover:bg-indigo-400 transition-colors"></div>
                        AI Assistant
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-6 text-lg bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Support & Help
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link
                        href="/onboarding"
                        className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:bg-blue-400 transition-colors"></div>
                        Getting Started
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/settings"
                        className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full group-hover:bg-purple-400 transition-colors"></div>
                        Settings & Privacy
                      </Link>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2 group"
                      >
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:bg-green-400 transition-colors"></div>
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-pink-400 transition-colors flex items-center gap-2 group"
                      >
                        <div className="w-1.5 h-1.5 bg-pink-500 rounded-full group-hover:bg-pink-400 transition-colors"></div>
                        Contact Support
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-700/50 mt-12 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="text-center md:text-left">
                    <p className="text-gray-400 text-sm">&copy; 2025 Raseed. Built for Google Wallet integration.</p>
                    <p className="text-gray-500 text-xs mt-1">
                      Transforming receipts into smart financial insights with AI
                    </p>
                  </div>
                  <div className="flex items-center gap-6 text-xs text-gray-400">
                    <a href="#" className="hover:text-blue-400 transition-colors">
                      Privacy Policy
                    </a>
                    <a href="#" className="hover:text-purple-400 transition-colors">
                      Terms of Service
                    </a>
                    <a href="#" className="hover:text-green-400 transition-colors">
                      API Docs
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        )}
      </body>
    </html>
  )
}
