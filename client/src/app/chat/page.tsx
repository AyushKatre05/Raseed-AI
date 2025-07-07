"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Send,
  Bot,
  User,
  Sparkles,
  TrendingUp,
  Receipt,
  DollarSign,
  ShoppingCart,
  Mic,
  Globe,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"

interface Message {
  id: string
  type: "user" | "assistant"
  content: string
  timestamp: Date
  suggestions?: string[]
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "assistant",
      content:
        "नमस्ते! I'm your AI financial assistant. I can help you analyze your spending patterns, find receipts, and provide personalized insights in Hindi, English, or any Indian language. What would you like to know?",
      timestamp: new Date(),
      suggestions: [
        "इस महीने मैंने groceries पर कितना खर्च किया?",
        "Show me my highest expenses",
        "Am I overspending on restaurants?",
        "What are my spending trends?",
      ],
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const quickQuestions = [
    { icon: DollarSign, text: "Total spending this month", color: "bg-green-100 text-green-800 border-green-200" },
    { icon: ShoppingCart, text: "Top spending categories", color: "bg-blue-100 text-blue-800 border-blue-200" },
    { icon: TrendingUp, text: "Spending trends", color: "bg-purple-100 text-purple-800 border-purple-200" },
    { icon: Receipt, text: "Recent receipts", color: "bg-orange-100 text-orange-800 border-orange-200" },
  ]

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const responses = {
        groceries:
          "Based on your receipts, you've spent ₹12,473 on groceries this month. That's 15% more than last month. Your main purchases were from Big Bazaar (₹6,870), More Megastore (₹3,240), and Spencer's (₹2,363). Consider meal planning to optimize your grocery budget.",
        spending:
          "Your total spending this month is ₹28,475 across 47 receipts. Top categories: Groceries (43.8%), Restaurants (24.1%), Shopping (16.0%). You're trending 12.5% higher than last month.",
        restaurants:
          "You've spent ₹6,872 on restaurants this month from 12 different places. Your most frequent visits were to Café Coffee Day (8 times, ₹1,260), Domino's (4 times, ₹670), and local restaurants (₹4,942). This is actually 8% less than last month - great job!",
        trends:
          "Your spending trends show: ↗️ Groceries up 15%, ↘️ Restaurants down 8%, ↗️ Shopping up 23%, ↘️ Transportation down 12%. Overall, you're spending more on essentials and less on dining out.",
      }

      let responseContent = "I'd be happy to help you with that! Let me analyze your receipt data..."

      const lowerContent = content.toLowerCase()
      if (lowerContent.includes("groceries") || lowerContent.includes("grocery") || lowerContent.includes("किराना")) {
        responseContent = responses.groceries
      } else if (lowerContent.includes("spending") || lowerContent.includes("spent") || lowerContent.includes("खर्च")) {
        responseContent = responses.spending
      } else if (
        lowerContent.includes("restaurant") ||
        lowerContent.includes("dining") ||
        lowerContent.includes("रेस्टोरेंट")
      ) {
        responseContent = responses.restaurants
      } else if (lowerContent.includes("trend") || lowerContent.includes("pattern")) {
        responseContent = responses.trends
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: responseContent,
        timestamp: new Date(),
        suggestions: [
          "Show me specific receipts",
          "Compare with previous months",
          "Get saving suggestions",
          "Export this data",
        ],
      }

      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1500)
  }

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question)
  }

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion)
  }

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" asChild className="bg-white/80">
                <Link href="/dashboard">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                </Link>
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Bot className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">AI Assistant</h1>
                  <p className="text-gray-600">Your personal financial advisor</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="text-purple-700 border-purple-300 bg-purple-50 px-3 py-1">
                <Sparkles className="w-3 h-3 mr-1" />
                AI-Powered
              </Badge>
              <Badge variant="outline" className="text-green-700 border-green-300 bg-green-50 px-3 py-1">
                <Globe className="w-3 h-3 mr-1" />
                Multilingual
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-180px)]">
            {/* Quick Actions Sidebar */}
            <div className="lg:col-span-1 space-y-4 overflow-y-auto max-h-[calc(100vh-200px)]">
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base text-gray-900">Quick Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {quickQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className={`w-full justify-start h-auto p-3 text-left hover:scale-105 transition-all duration-200 ${question.color} border text-xs sm:text-sm`}
                      onClick={() => handleQuickQuestion(question.text)}
                    >
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center mr-2 sm:mr-3 bg-white/50 flex-shrink-0">
                        <question.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                      <span className="font-medium leading-tight">{question.text}</span>
                    </Button>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base text-gray-900">Recent Insights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                    <div className="font-medium text-blue-900 text-sm">Grocery Trend</div>
                    <div className="text-blue-700 text-xs">15% increase this month</div>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200">
                    <div className="font-medium text-green-900 text-sm">Dining Out</div>
                    <div className="text-green-700 text-xs">8% decrease - great job!</div>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                    <div className="font-medium text-purple-900 text-sm">Top Category</div>
                    <div className="text-purple-700 text-xs">Groceries (43.8%)</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Chat Area */}
            <div className="lg:col-span-3 flex flex-col">
              <Card className="flex-1 flex flex-col bg-white/80 backdrop-blur-sm shadow-xl border-0">
                <CardHeader className="border-b bg-gradient-to-r from-blue-50 to-purple-50">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-3 text-gray-900">
                      <Bot className="w-6 h-6 text-blue-600" />
                      Chat with your Financial Data
                    </CardTitle>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                      Online
                    </Badge>
                  </div>
                </CardHeader>

                {/* Messages */}
                <ScrollArea className="flex-1 p-6" ref={scrollAreaRef}>
                  <div className="space-y-6">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex gap-4 ${message.type === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
                      >
                        {message.type === "assistant" && (
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                            <Bot className="w-5 h-5 text-white" />
                          </div>
                        )}

                        <div className={`max-w-[75%] ${message.type === "user" ? "order-1" : ""}`}>
                          <div
                            className={`p-4 rounded-2xl shadow-lg ${
                              message.type === "user"
                                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                                : "bg-white text-gray-900 border border-gray-200"
                            }`}
                          >
                            <p className="text-sm leading-relaxed">{message.content}</p>
                          </div>

                          {message.suggestions && (
                            <div className="mt-3 flex flex-wrap gap-2">
                              {message.suggestions.map((suggestion, index) => (
                                <Button
                                  key={index}
                                  variant="outline"
                                  size="sm"
                                  className="text-xs h-7 bg-white/80 hover:bg-blue-50 border-blue-200 text-blue-700 hover:text-blue-800 transition-all duration-200"
                                  onClick={() => handleSuggestionClick(suggestion)}
                                >
                                  {suggestion}
                                </Button>
                              ))}
                            </div>
                          )}

                          <div className="text-xs text-gray-500 mt-2">
                            {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                          </div>
                        </div>

                        {message.type === "user" && (
                          <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                            <User className="w-5 h-5 text-white" />
                          </div>
                        )}
                      </div>
                    ))}

                    {isLoading && (
                      <div className="flex gap-4 justify-start animate-fade-in">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                          <Bot className="w-5 h-5 text-white" />
                        </div>
                        <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>

                {/* Input Area */}
                <div className="border-t p-6 bg-gradient-to-r from-gray-50 to-blue-50">
                  <div className="flex gap-3">
                    <div className="flex-1 relative">
                      <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Ask about your spending, receipts, or get financial insights... (Hindi/English supported)"
                        onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
                        className="pr-12 h-12 bg-white/80 border-gray-300 focus:border-blue-400 focus:ring-blue-400 text-gray-900 placeholder:text-gray-500"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 hover:bg-blue-100"
                      >
                        <Mic className="w-4 h-4 text-gray-600" />
                      </Button>
                    </div>
                    <Button
                      onClick={() => handleSendMessage(inputValue)}
                      disabled={!inputValue.trim() || isLoading}
                      className="h-12 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="text-xs text-gray-600 mt-3 text-center">
                    Ask in any language - Hindi, English, Tamil, Bengali, and more supported
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
