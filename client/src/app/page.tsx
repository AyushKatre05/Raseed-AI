"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Camera,
  Brain,
  Wallet,
  Globe,
  Mic,
  Users,
  Trophy,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  TrendingUp,
  MessageSquare,
  Play,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const features = [
    {
      icon: Camera,
      title: "Smart Receipt Scanning",
      description: "AI-powered OCR in 15+ Indian languages with real-time processing",
      color: "blue",
      badge: "AI",
    },
    {
      icon: Mic,
      title: "Voice Commands",
      description: "Scan and query receipts using natural voice commands in local languages",
      color: "purple",
      badge: "New",
    },
    {
      icon: Brain,
      title: "Intelligent Insights",
      description: "Personalized spending analysis and money-saving recommendations",
      color: "green",
      badge: "Smart",
    },
    {
      icon: Wallet,
      title: "Google Wallet Integration",
      description: "Seamless pass generation and warranty tracking",
      color: "orange",
      badge: "Sync",
    },
    {
      icon: Users,
      title: "Family Finance",
      description: "Shared budgets and collaborative expense management",
      color: "pink",
      badge: "Share",
    },
    {
      icon: Trophy,
      title: "Gamification",
      description: "Earn rewards and achievements for smart financial habits",
      color: "yellow",
      badge: "Fun",
    },
  ]

  const stats = [
    { value: "50K+", label: "Receipts Processed", icon: Camera },
    { value: "₹2.5Cr+", label: "Money Saved", icon: TrendingUp },
    { value: "15+", label: "Languages Supported", icon: Globe },
    { value: "98%", label: "Accuracy Rate", icon: CheckCircle },
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Small Business Owner",
      content: "Raseed has transformed how I manage receipts. The Hindi voice commands are a game-changer!",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "Family Man",
      content: "Finally, a solution that works with Indian languages. My family loves the shared budgeting feature.",
      rating: 5,
    },
    {
      name: "Anita Patel",
      role: "Tech Professional",
      content: "The AI insights helped me save ₹15,000 last month. The Google Wallet integration is seamless.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 mb-6 px-4 py-2 text-sm font-semibold">
              🚀 AI-Powered Receipt Management for Google Wallet
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              Transform Receipts into
              <span className="block">Smart Insights</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Scan receipts in <strong>15+ Indian languages</strong>, get AI-powered financial insights, and seamlessly
              integrate with <strong>Google Wallet</strong> - all with voice commands!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg font-semibold group"
              >
                <Link href="/upload">
                  <Camera className="w-6 h-6 mr-2 group-hover:animate-bounce" />
                  Start Scanning Receipts
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 px-8 py-4 text-lg font-semibold group bg-transparent"
              >
                <Link href="/onboarding">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-green-100 to-blue-100 text-green-700 border-green-200 mb-4">
              ✨ Unique Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Why Choose Raseed?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The only receipt manager built specifically for Indian users with multilingual AI and Google Wallet
              integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50"
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ${
                        feature.color === "blue"
                          ? "bg-gradient-to-br from-blue-500 to-blue-600"
                          : feature.color === "purple"
                            ? "bg-gradient-to-br from-purple-500 to-purple-600"
                            : feature.color === "green"
                              ? "bg-gradient-to-br from-green-500 to-green-600"
                              : feature.color === "orange"
                                ? "bg-gradient-to-br from-orange-500 to-orange-600"
                                : feature.color === "pink"
                                  ? "bg-gradient-to-br from-pink-500 to-pink-600"
                                  : "bg-gradient-to-br from-yellow-500 to-yellow-600"
                      }`}
                    >
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <Badge
                      className={`${
                        feature.color === "blue"
                          ? "bg-blue-100 text-blue-700 border-blue-200"
                          : feature.color === "purple"
                            ? "bg-purple-100 text-purple-700 border-purple-200"
                            : feature.color === "green"
                              ? "bg-green-100 text-green-700 border-green-200"
                              : feature.color === "orange"
                                ? "bg-orange-100 text-orange-700 border-orange-200"
                                : feature.color === "pink"
                                  ? "bg-pink-100 text-pink-700 border-pink-200"
                                  : "bg-yellow-100 text-yellow-700 border-yellow-200"
                      } text-xs font-semibold`}
                    >
                      {feature.badge}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 border-yellow-200 mb-4">
              ⭐ User Reviews
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Loved by Users Across India
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Transform Your
              <span className="block">Receipt Management?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join thousands of users who are already saving money and time with AI-powered receipt insights
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg font-semibold group"
              >
                <Link href="/upload">
                  <Zap className="w-6 h-6 mr-2 group-hover:animate-bounce" />
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                <Link href="/chat">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Try AI Assistant
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
