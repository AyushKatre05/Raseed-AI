"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Receipt,
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  Filter,
  Download,
  Plus,
  BarChart3,
  PieChart,
  ArrowUpRight,
  Target,
  Bell,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("month")

  // Mock data with INR currency
  const stats = {
    totalSpent: 284750,
    receiptsCount: 47,
    avgPerReceipt: 6059,
    monthlyChange: 12.5,
  }

  const categories = [
    { name: "Groceries", amount: 124730, percentage: 43.8, color: "bg-blue-500", trend: "+15%" },
    { name: "Restaurants", amount: 68720, percentage: 24.1, color: "bg-green-500", trend: "-8%" },
    { name: "Shopping", amount: 45680, percentage: 16.0, color: "bg-purple-500", trend: "+23%" },
    { name: "Transportation", amount: 23450, percentage: 8.2, color: "bg-orange-500", trend: "-12%" },
    { name: "Entertainment", amount: 22170, percentage: 7.9, color: "bg-pink-500", trend: "+5%" },
  ]

  const recentReceipts = [
    {
      id: 1,
      store: "Big Bazaar",
      amount: 12745,
      date: "2025-01-15",
      items: 12,
      category: "Groceries",
    },
    {
      id: 2,
      store: "Café Coffee Day",
      amount: 580,
      date: "2025-01-15",
      items: 2,
      category: "Restaurants",
    },
    {
      id: 3,
      store: "Amazon India",
      amount: 8999,
      date: "2025-01-14",
      items: 3,
      category: "Shopping",
    },
    {
      id: 4,
      store: "Indian Oil Petrol Pump",
      amount: 4520,
      date: "2025-01-14",
      items: 1,
      category: "Transportation",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Dashboard
              </h1>
              <p className="text-gray-600 text-lg">Your financial insights at a glance</p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className="bg-white/80 hover:bg-blue-50 border-blue-200 text-blue-700"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-white/80 hover:bg-green-50 border-green-200 text-green-700"
              >
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/upload">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Receipt
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-800">Total Spent</CardTitle>
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-900">₹{stats.totalSpent.toLocaleString()}</div>
              <div className="flex items-center text-sm text-green-700 mt-2">
                <TrendingUp className="w-4 h-4 mr-1" />+{stats.monthlyChange}% from last month
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-800">Receipts</CardTitle>
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <Receipt className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-900">{stats.receiptsCount}</div>
              <p className="text-sm text-blue-700 mt-2">This month</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-800">Avg per Receipt</CardTitle>
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                <ShoppingCart className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-900">₹{stats.avgPerReceipt}</div>
              <div className="flex items-center text-sm text-purple-700 mt-2">
                <TrendingDown className="w-4 h-4 mr-1" />
                -2.1% from last month
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-orange-800">Categories</CardTitle>
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <PieChart className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-900">{categories.length}</div>
              <p className="text-sm text-orange-700 mt-2">Active categories</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Charts and Analytics */}
          <div className="lg:col-span-2 space-y-6">
            {/* Spending by Category */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl text-gray-900">Spending by Category</CardTitle>
                    <CardDescription className="text-gray-600">Your spending breakdown for this month</CardDescription>
                  </div>
                  <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI Insights
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className="space-y-3 p-4 rounded-lg bg-gradient-to-r from-gray-50 to-white border border-gray-200 hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full ${category.color} shadow-sm`} />
                          <span className="font-semibold text-gray-900">{category.name}</span>
                          <Badge
                            variant="secondary"
                            className={`text-xs ${
                              category.trend.startsWith("+") ? "text-red-700 bg-red-100" : "text-green-700 bg-green-100"
                            }`}
                          >
                            {category.trend}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-lg text-gray-900">₹{category.amount.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">{category.percentage}%</div>
                        </div>
                      </div>
                      <Progress value={category.percentage} className="h-3" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl text-gray-900">Recent Receipts</CardTitle>
                    <CardDescription className="text-gray-600">Your latest transactions</CardDescription>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="bg-white/80 hover:bg-blue-50 border-blue-200 text-blue-700"
                  >
                    <Link href="/receipts">View All</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReceipts.map((receipt) => (
                    <div
                      key={receipt.id}
                      className="flex items-center justify-between p-4 border rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:shadow-md transform hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                          <Receipt className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{receipt.store}</div>
                          <div className="text-sm text-gray-600">
                            {receipt.items} items • {receipt.date}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg text-gray-900">₹{receipt.amount.toLocaleString()}</div>
                        <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800">
                          {receipt.category}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Quick Actions and Insights */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  className="w-full justify-start bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link href="/upload">
                    <Plus className="w-4 h-4 mr-2" />
                    Upload Receipt
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-white/80 hover:bg-blue-50 border-blue-200 text-blue-700"
                  asChild
                >
                  <Link href="/chat">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Ask AI Assistant
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-white/80 hover:bg-purple-50 border-purple-200 text-purple-700"
                  asChild
                >
                  <Link href="/receipts">
                    <Receipt className="w-4 h-4 mr-2" />
                    Manage Receipts
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-white/80 hover:bg-green-50 border-green-200 text-green-700"
                  asChild
                >
                  <Link href="/analytics">
                    <Target className="w-4 h-4 mr-2" />
                    View Analytics
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  AI Insights
                </CardTitle>
                <CardDescription className="text-gray-700">Smart suggestions based on your spending</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl border border-blue-300">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-blue-700 mt-0.5" />
                    <div>
                      <div className="font-semibold text-blue-900">Grocery Spending Up</div>
                      <div className="text-sm text-blue-800">
                        You've spent 15% more on groceries this month. Consider meal planning to save ₹3,000+.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-green-100 to-green-200 rounded-xl border border-green-300">
                  <div className="flex items-start gap-3">
                    <TrendingDown className="w-5 h-5 text-green-700 mt-0.5" />
                    <div>
                      <div className="font-semibold text-green-900">Great Progress!</div>
                      <div className="text-sm text-green-800">
                        You've reduced restaurant spending by 8% compared to last month. Saved ₹5,200!
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-white/80 hover:bg-blue-50 border-blue-200 text-blue-700"
                  asChild
                >
                  <Link href="/chat">
                    Get More Insights
                    <ArrowUpRight className="w-3 h-3 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Google Wallet Integration */}
            <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Google Wallet</CardTitle>
                <CardDescription className="text-gray-700">Your receipt passes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">Active Passes</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      12
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">This Week</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      5
                    </Badge>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-white/80 hover:bg-green-50 border-green-200 text-green-700"
                  >
                    View in Wallet
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                  <Bell className="w-5 h-5 text-orange-600" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-orange-100 rounded-lg border border-orange-200">
                    <div className="text-sm font-medium text-orange-900">Budget Alert</div>
                    <div className="text-xs text-orange-800">You're 80% through your monthly budget</div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-white/80 hover:bg-orange-50 border-orange-200 text-orange-700"
                    asChild
                  >
                    <Link href="/notifications">View All Notifications</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
