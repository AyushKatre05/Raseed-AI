"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Receipt,
  Camera,
  Brain,
  BarChart3,
  Users,
  Trophy,
  Mic,
  Sparkles,
  Menu,
  X,
  Home,
  MessageSquare,
  Settings,
  Bell,
  Target,
  ChevronDown,
  Zap,
} from "lucide-react"

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const mainNavItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/dashboard", label: "Dashboard", icon: BarChart3 },
    { href: "/chat", label: "AI Chat", icon: MessageSquare },
  ]

  const featureNavItems = [
    { href: "/voice", label: "Voice Commands", icon: Mic, badge: "New", color: "blue" },
    { href: "/live-scan", label: "Live Scanner", icon: Camera, badge: "AR", color: "purple" },
    { href: "/smart-recommendations", label: "Smart Tips", icon: Brain, badge: "AI", color: "green" },
    { href: "/gamification", label: "Achievements", icon: Trophy, badge: "Fun", color: "yellow" },
    { href: "/family", label: "Family Finance", icon: Users, badge: "Share", color: "pink" },
  ]

  const utilityNavItems = [
    { href: "/receipts", label: "All Receipts", icon: Receipt },
    { href: "/analytics", label: "Analytics", icon: BarChart3 },
    { href: "/notifications", label: "Notifications", icon: Bell },
    { href: "/settings", label: "Settings", icon: Settings },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const getBadgeColor = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      purple: "bg-purple-100 text-purple-700 border-purple-200",
      green: "bg-green-100 text-green-700 border-green-200",
      yellow: "bg-yellow-100 text-yellow-700 border-yellow-200",
      pink: "bg-pink-100 text-pink-700 border-pink-200",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-2">
        {mainNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-200 font-medium text-sm ${
              isActive(item.href)
                ? "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 shadow-sm"
                : "text-gray-600 hover:text-blue-600 hover:bg-blue-50/80"
            }`}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </Link>
        ))}

        {/* Features Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-200 font-medium text-sm ${
                featureNavItems.some((item) => isActive(item.href))
                  ? "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 shadow-sm"
                  : "text-gray-600 hover:text-purple-600 hover:bg-purple-50/80"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              AI Features
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 text-xs px-2 py-0.5 animate-pulse">
                New
              </Badge>
              <ChevronDown className="w-3 h-3 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="w-64 p-2 bg-white/95 backdrop-blur-xl border border-gray-200/50 shadow-xl rounded-2xl"
          >
            <div className="p-2 border-b border-gray-100 mb-2">
              <h3 className="font-semibold text-sm bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                AI-Powered Features
              </h3>
              <p className="text-xs text-gray-500 mt-1">Discover intelligent tools</p>
            </div>
            {featureNavItems.map((item) => (
              <DropdownMenuItem key={item.href} asChild className="rounded-xl p-0 mb-1">
                <Link
                  href={item.href}
                  className="flex items-center justify-between w-full p-3 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getBadgeColor(item.color)}`}>
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-gray-900">{item.label}</div>
                      <div className="text-xs text-gray-500">Smart AI assistance</div>
                    </div>
                  </div>
                  <Badge className={`text-xs px-2 py-1 ${getBadgeColor(item.color)}`}>{item.badge}</Badge>
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* More Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-200 font-medium text-sm ${
                utilityNavItems.some((item) => isActive(item.href))
                  ? "bg-gray-100 text-gray-700 shadow-sm"
                  : "text-gray-600 hover:text-gray-700 hover:bg-gray-50/80"
              }`}
            >
              <Menu className="w-4 h-4" />
              More
              <ChevronDown className="w-3 h-3 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="w-56 p-2 bg-white/95 backdrop-blur-xl border border-gray-200/50 shadow-xl rounded-2xl"
          >
            <div className="p-2 border-b border-gray-100 mb-2">
              <h3 className="font-semibold text-sm text-gray-900">Tools & Settings</h3>
              <p className="text-xs text-gray-500 mt-1">Manage your account</p>
            </div>
            {utilityNavItems.map((item) => (
              <DropdownMenuItem key={item.href} asChild className="rounded-xl p-0 mb-1">
                <Link
                  href={item.href}
                  className="flex items-center gap-3 w-full p-3 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-gray-600" />
                  </div>
                  <span className="font-medium text-sm text-gray-900">{item.label}</span>
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator className="my-2" />
            <DropdownMenuItem asChild className="rounded-xl p-0">
              <Link
                href="/onboarding"
                className="flex items-center gap-3 w-full p-3 hover:bg-blue-50 rounded-xl transition-colors"
              >
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-sm text-gray-900">Setup Guide</div>
                  <div className="text-xs text-gray-500">Get started quickly</div>
                </div>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>

      {/* Mobile Navigation Toggle */}
      <div className="lg:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl p-2"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-xl z-50">
          <div className="container mx-auto px-4 py-6">
            <div className="space-y-6">
              {/* Main Navigation */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Main Navigation
                </h3>
                <div className="space-y-2">
                  {mainNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                        isActive(item.href)
                          ? "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 shadow-sm"
                          : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  AI Features
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 text-xs px-2 py-0.5">
                    New
                  </Badge>
                </h3>
                <div className="space-y-2">
                  {featureNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                        isActive(item.href)
                          ? "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 shadow-sm"
                          : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${getBadgeColor(item.color)}`}
                        >
                          <item.icon className="w-4 h-4" />
                        </div>
                        <span className="font-medium">{item.label}</span>
                      </div>
                      <Badge className={`text-xs px-2 py-1 ${getBadgeColor(item.color)}`}>{item.badge}</Badge>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Utilities */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  Tools & Settings
                </h3>
                <div className="space-y-2">
                  {utilityNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                        isActive(item.href)
                          ? "bg-gray-100 text-gray-700 shadow-sm"
                          : "text-gray-600 hover:text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Action */}
              <div className="pt-4 border-t border-gray-200">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white shadow-lg rounded-xl py-3 font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href="/upload">
                    <Zap className="w-5 h-5 mr-2" />
                    Scan Your First Receipt
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
