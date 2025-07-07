"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Target,
  Calendar,
  Download,
  Share,
  ArrowLeft,
  Sparkles,
  AlertTriangle,
  CheckCircle,
  DollarSign,
} from "lucide-react"
import Link from "next/link"

export default function AnalyticsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("month")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Mock analytics data with INR
  const monthlyData = [
    { month: "Jan", spending: 245000, budget: 300000 },
    { month: "Feb", spending: 267000, budget: 300000 },
    { month: "Mar", spending: 289000, budget: 300000 },
    { month: "Apr", spending: 312000, budget: 300000 },
    { month: "May", spending: 298000, budget: 300000 },
    { month: "Jun", spending: 284750, budget: 300000 },
  ]

  const categoryTrends = [
    { category: "Groceries", current: 124730, previous: 108500, change: 15.0, status: "warning" },
    { category: "Restaurants", current: 68720, previous: 74650, change: -7.9, status: "good" },
    { category: "Shopping", current: 45680, previous: 37200, change: 22.8, status: "alert" },
    { category: "Transportation", current: 23450, previous: 26700, change: -12.2, status: "good" },
    { category: "Entertainment", current: 22170, previous: 21100, change: 5.1, status: "neutral" },
  ]

  const budgetGoals = [
    { category: "Groceries", budget: 120000, spent: 124730, percentage: 103.9 },
    { category: "Restaurants", budget: 80000, spent: 68720, percentage: 85.9 },
    { category: "Shopping", budget: 40000, spent: 45680, percentage: 114.2 },
    { category: "Transportation", budget: 30000, spent: 23450, percentage: 78.2 },
    { category: "Entertainment", budget: 25000, spent: 22170, percentage: 88.7 },
  ]

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
                  Back to Dashboard
                </Link>
              </Button>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Advanced Analytics
                </h1>
                <p className="text-gray-600 text-lg">Deep insights into your spending patterns</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="text-purple-700 border-purple-300 bg-purple-50 px-3 py-1">
                <Sparkles className="w-3 h-3 mr-1" />
                AI-Powered
              </Badge>
              <Button
                variant="outline"
                size="sm"
                className="bg-white/80 hover:bg-blue-50 border-blue-200 text-blue-700"
              >
                <Share className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-white/80 hover:bg-green-50 border-green-200 text-green-700"
              >
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm shadow-lg">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="trends"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
            >
              Trends
            </TabsTrigger>
            <TabsTrigger
              value="budget"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
            >
              Budget Goals
            </TabsTrigger>
            <TabsTrigger
              value="predictions"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
            >
              AI Predictions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Controls */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="flex gap-3">
                    <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                      <SelectTrigger className="w-40 bg-white/80">
                        <SelectValue placeholder="Time Period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="week">This Week</SelectItem>
                        <SelectItem value="month">This Month</SelectItem>
                        <SelectItem value="quarter">This Quarter</SelectItem>
                        <SelectItem value="year">This Year</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-40 bg-white/80">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="groceries">Groceries</SelectItem>
                        <SelectItem value="restaurants">Restaurants</SelectItem>
                        <SelectItem value="shopping">Shopping</SelectItem>
                        <SelectItem value="transportation">Transportation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</div>
                </div>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-green-800 flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Total Spending
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-900">₹2,84,750</div>
                  <div className="flex items-center text-sm text-green-700 mt-2">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +12.5% vs last month
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-blue-800 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4" />
                    Avg Daily Spend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-900">₹9,492</div>
                  <div className="flex items-center text-sm text-blue-700 mt-2">
                    <TrendingDown className="w-4 h-4 mr-1" />
                    -3.2% vs last month
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-purple-800 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Budget Usage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-900">94.9%</div>
                  <div className="flex items-center text-sm text-purple-700 mt-2">
                    <AlertTriangle className="w-4 h-4 mr-1" />
                    ₹15,250 remaining
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-orange-800 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Days Left
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-orange-900">16</div>
                  <div className="text-sm text-orange-700 mt-2">Until month end</div>
                </CardContent>
              </Card>
            </div>

            {/* Monthly Spending Chart */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Monthly Spending vs Budget</CardTitle>
                <CardDescription className="text-gray-600">
                  Track your spending against your monthly budget
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {monthlyData.map((data, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">{data.month} 2025</span>
                        <div className="text-right">
                          <div className="font-semibold text-gray-900">₹{data.spending.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">Budget: ₹{data.budget.toLocaleString()}</div>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full transition-all duration-500 ${
                            data.spending > data.budget
                              ? "bg-gradient-to-r from-red-500 to-red-600"
                              : "bg-gradient-to-r from-green-500 to-green-600"
                          }`}
                          style={{ width: `${Math.min((data.spending / data.budget) * 100, 100)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Category Trends</CardTitle>
                <CardDescription className="text-gray-600">
                  Month-over-month spending changes by category
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {categoryTrends.map((trend, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl border bg-gradient-to-r from-gray-50 to-white hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold text-gray-900">{trend.category}</h3>
                          <Badge
                            variant={
                              trend.status === "good"
                                ? "default"
                                : trend.status === "warning"
                                  ? "secondary"
                                  : "destructive"
                            }
                            className={
                              trend.status === "good"
                                ? "bg-green-100 text-green-800"
                                : trend.status === "warning"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                            }
                          >
                            {trend.change > 0 ? "+" : ""}
                            {trend.change.toFixed(1)}%
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-lg text-gray-900">₹{trend.current.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">vs ₹{trend.previous.toLocaleString()}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        {trend.change > 0 ? (
                          <TrendingUp className="w-4 h-4 text-red-500" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-green-500" />
                        )}
                        <span className={trend.change > 0 ? "text-red-600" : "text-green-600"}>
                          {Math.abs(trend.change).toFixed(1)}% {trend.change > 0 ? "increase" : "decrease"} from last
                          month
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="budget" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Budget Goals Progress</CardTitle>
                <CardDescription className="text-gray-600">
                  Track your spending against set budget goals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {budgetGoals.map((goal, index) => (
                    <div key={index} className="p-4 rounded-xl border bg-gradient-to-r from-gray-50 to-white">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold text-gray-900">{goal.category}</h3>
                          {goal.percentage <= 100 ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <AlertTriangle className="w-5 h-5 text-red-500" />
                          )}
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-lg text-gray-900">₹{goal.spent.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">of ₹{goal.budget.toLocaleString()}</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Progress</span>
                          <span className={`font-medium ${goal.percentage > 100 ? "text-red-600" : "text-green-600"}`}>
                            {goal.percentage.toFixed(1)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className={`h-3 rounded-full transition-all duration-500 ${
                              goal.percentage > 100
                                ? "bg-gradient-to-r from-red-500 to-red-600"
                                : goal.percentage > 80
                                  ? "bg-gradient-to-r from-yellow-500 to-yellow-600"
                                  : "bg-gradient-to-r from-green-500 to-green-600"
                            }`}
                            style={{ width: `${Math.min(goal.percentage, 100)}%` }}
                          />
                        </div>
                        {goal.percentage > 100 && (
                          <div className="text-sm text-red-600 font-medium">
                            Over budget by ₹{(goal.spent - goal.budget).toLocaleString()}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="predictions" className="space-y-6">
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                  AI-Powered Predictions
                </CardTitle>
                <CardDescription className="text-gray-700">
                  Smart forecasts based on your spending patterns
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-gradient-to-r from-green-100 to-green-200 rounded-xl border border-green-300">
                    <h3 className="font-semibold text-green-900 mb-2">Month-End Prediction</h3>
                    <div className="text-2xl font-bold text-green-800 mb-2">₹3,12,000</div>
                    <p className="text-sm text-green-700">
                      Based on current trends, you'll likely spend ₹12,000 over budget this month.
                    </p>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl border border-blue-300">
                    <h3 className="font-semibold text-blue-900 mb-2">Savings Opportunity</h3>
                    <div className="text-2xl font-bold text-blue-800 mb-2">₹8,500</div>
                    <p className="text-sm text-blue-700">
                      You could save this much by reducing restaurant visits by 20%.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl border border-purple-300">
                  <h3 className="font-semibold text-purple-900 mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Smart Recommendations
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-900">Optimize Grocery Shopping</div>
                        <div className="text-sm text-gray-700">
                          Shop at Big Bazaar instead of premium stores to save ₹2,000/month
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-900">Meal Planning</div>
                        <div className="text-sm text-gray-700">
                          Plan meals in advance to reduce food waste and save ₹1,500/month
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-900">Transportation Savings</div>
                        <div className="text-sm text-gray-700">
                          Use public transport 2 days/week to save ₹1,200/month
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
