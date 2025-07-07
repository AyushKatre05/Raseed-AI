"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Brain,
  ShoppingCart,
  TrendingDown,
  Target,
  ArrowLeft,
  Sparkles,
  Clock,
  MapPin,
  DollarSign,
  Zap,
  CheckCircle,
  AlertTriangle,
  Wallet,
  ChefHat,
Utensils
} from "lucide-react"
import Link from "next/link"

export default function SmartRecommendationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Mock AI recommendations data
  const savingsRecommendations = [
    {
      id: 1,
      type: "store",
      title: "Switch to Big Bazaar for Groceries",
      description: "You could save ₹2,400/month by shopping at Big Bazaar instead of premium stores",
      savings: 2400,
      confidence: 94,
      impact: "high",
      timeframe: "monthly",
      action: "Switch Store",
    },
    {
      id: 2,
      type: "timing",
      title: "Shop on Weekdays for Better Deals",
      description: "Grocery prices are 8-12% lower on Tuesday-Thursday compared to weekends",
      savings: 800,
      confidence: 87,
      impact: "medium",
      timeframe: "weekly",
      action: "Change Timing",
    },
    {
      id: 3,
      type: "bulk",
      title: "Buy Rice & Dal in Bulk",
      description: "Purchasing 10kg bags instead of 1kg saves ₹15-20 per kg",
      savings: 600,
      confidence: 92,
      impact: "medium",
      timeframe: "monthly",
      action: "Bulk Purchase",
    },
  ]

  const shoppingRecommendations = [
    {
      id: 1,
      item: "Milk",
      reason: "You buy milk every 3 days. Next purchase predicted in 1 day.",
      confidence: 96,
      urgency: "high",
      price: 65,
      store: "Big Bazaar",
    },
    {
      id: 2,
      item: "Bread",
      reason: "Weekly bread purchase pattern detected. Usually buy on Sundays.",
      confidence: 89,
      urgency: "medium",
      price: 45,
      store: "Local Bakery",
    },
    {
      id: 3,
      item: "Onions",
      reason: "Running low based on cooking frequency and last purchase.",
      confidence: 78,
      urgency: "medium",
      price: 40,
      store: "Vegetable Market",
    },
  ]

  const recipeRecommendations = [
    {
      id: 1,
      name: "Vegetable Pulao",
      ingredients: ["Rice", "Mixed Vegetables", "Spices"],
      available: ["Rice", "Onions", "Spices"],
      missing: ["Mixed Vegetables"],
      cost: 120,
      servings: 4,
      difficulty: "Easy",
    },
    {
      id: 2,
      name: "Dal Tadka",
      ingredients: ["Toor Dal", "Onions", "Tomatoes", "Spices"],
      available: ["Toor Dal", "Onions", "Spices"],
      missing: ["Tomatoes"],
      cost: 80,
      servings: 4,
      difficulty: "Easy",
    },
    {
      id: 3,
      name: "Chicken Curry",
      ingredients: ["Chicken", "Onions", "Tomatoes", "Spices", "Oil"],
      available: ["Onions", "Spices"],
      missing: ["Chicken", "Tomatoes", "Oil"],
      cost: 280,
      servings: 4,
      difficulty: "Medium",
    },
  ]

  const merchantInsights = [
    {
      store: "Big Bazaar",
      bestTime: "Tuesday 10-11 AM",
      avgSavings: "12%",
      crowdLevel: "Low",
      specialOffers: "Fresh produce discount",
      distance: "2.3 km",
    },
    {
      store: "More Megastore",
      bestTime: "Wednesday 2-4 PM",
      avgSavings: "8%",
      crowdLevel: "Medium",
      specialOffers: "Buy 2 Get 1 on packaged goods",
      distance: "1.8 km",
    },
    {
      store: "Spencer's",
      bestTime: "Thursday 11 AM-1 PM",
      avgSavings: "6%",
      crowdLevel: "Low",
      specialOffers: "Premium brands discount",
      distance: "3.1 km",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b shadow-sm">
      <div className="px-4 py-6 sm:px-6 md:px-8 max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" asChild className="bg-white/80">
                <Link href="/dashboard">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                </Link>
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Smart Recommendations</h1>
                  <p className="text-gray-600">AI-powered insights to optimize your spending</p>
                </div>
              </div>
            </div>
            <Badge variant="outline" className="text-purple-700 border-purple-300 bg-purple-50 px-3 py-1">
              <Sparkles className="w-3 h-3 mr-1" />
              AI-Powered
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Tabs defaultValue="savings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm shadow-lg">
            <TabsTrigger
              value="savings"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-green-600 data-[state=active]:text-white"
            >
              Savings Tips
            </TabsTrigger>
            <TabsTrigger
              value="shopping"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white"
            >
              Shopping List
            </TabsTrigger>
            <TabsTrigger
              value="recipes"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-orange-600 data-[state=active]:text-white"
            >
              Recipe Ideas
            </TabsTrigger>
            <TabsTrigger
              value="merchants"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
            >
              Store Insights
            </TabsTrigger>
          </TabsList>

          <TabsContent value="savings" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingDown className="w-6 h-6 text-green-600" />
                  AI Savings Recommendations
                </CardTitle>
                <CardDescription>Personalized tips to reduce your spending based on receipt analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {savingsRecommendations.map((rec) => (
                    <div
                      key={rec.id}
                      className="p-6 rounded-xl border bg-gradient-to-r from-gray-50 to-white hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-lg text-gray-900">{rec.title}</h3>
                            <Badge
                              variant={rec.impact === "high" ? "destructive" : "secondary"}
                              className={
                                rec.impact === "high" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                              }
                            >
                              {rec.impact} impact
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-3">{rec.description}</p>
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4 text-green-600" />
                              <span className="font-medium text-green-600">₹{rec.savings.toLocaleString()}</span>
                              <span className="text-gray-500">/ {rec.timeframe}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Brain className="w-4 h-4 text-blue-600" />
                              <span className="text-blue-600">{rec.confidence}% confidence</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button className="bg-gradient-to-r from-green-600 to-green-700">
                            <Zap className="w-4 h-4 mr-2" />
                            {rec.action}
                          </Button>
                          <Button variant="outline" size="sm" className="bg-white/80">
                            <Wallet className="w-4 h-4 mr-2" />
                            Add to Wallet
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shopping" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="w-6 h-6 text-blue-600" />
                  AI-Generated Shopping List
                </CardTitle>
                <CardDescription>Smart predictions based on your purchase patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {shoppingRecommendations.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-xl border bg-gradient-to-r from-gray-50 to-white hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-gray-900">{item.item}</h3>
                            <Badge
                              variant={item.urgency === "high" ? "destructive" : "secondary"}
                              className={
                                item.urgency === "high" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"
                              }
                            >
                              {item.urgency} priority
                            </Badge>
                            <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                              {item.confidence}% confidence
                            </Badge>
                          </div>
                          <p className="text-gray-600 text-sm mb-2">{item.reason}</p>
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4 text-green-600" />
                              <span className="font-medium">₹{item.price}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4 text-gray-500" />
                              <span className="text-gray-600">{item.store}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Add
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-lg font-semibold text-gray-900">Total Estimated Cost: </span>
                      <span className="text-xl font-bold text-green-600">
                        ₹{shoppingRecommendations.reduce((sum, item) => sum + item.price, 0)}
                      </span>
                    </div>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                      <Wallet className="w-4 h-4 mr-2" />
                      Create Wallet Pass
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recipes" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ChefHat className="w-6 h-6 text-orange-600" />
                  Recipe Recommendations
                </CardTitle>
                <CardDescription>What you can cook with your recent grocery purchases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recipeRecommendations.map((recipe) => (
                    <div
                      key={recipe.id}
                      className="p-6 rounded-xl border bg-gradient-to-br from-orange-50 to-yellow-50 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900 mb-2">{recipe.name}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>₹{recipe.cost}</span>
                            <span>{recipe.servings} servings</span>
                            <Badge variant="outline" className="text-xs">
                              {recipe.difficulty}
                            </Badge>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <h4 className="font-medium text-green-800 mb-1">Available:</h4>
                            <div className="flex flex-wrap gap-1">
                              {recipe.available.map((item, index) => (
                                <Badge key={index} variant="secondary" className="bg-green-100 text-green-800 text-xs">
                                  <CheckCircle className="w-3 h-3 mr-1" />
                                  {item}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {recipe.missing.length > 0 && (
                            <div>
                              <h4 className="font-medium text-orange-800 mb-1">Need to buy:</h4>
                              <div className="flex flex-wrap gap-1">
                                {recipe.missing.map((item, index) => (
                                  <Badge
                                    key={index}
                                    variant="outline"
                                    className="bg-orange-100 text-orange-800 border-orange-200 text-xs"
                                  >
                                    <AlertTriangle className="w-3 h-3 mr-1" />
                                    {item}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1 bg-orange-600 hover:bg-orange-700">
                            View Recipe
                          </Button>
                          {recipe.missing.length > 0 && (
                            <Button size="sm" variant="outline" className="bg-white/80">
                              <ShoppingCart className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="merchants" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-purple-600" />
                  Merchant Insights
                </CardTitle>
                <CardDescription>Best times to shop and current offers at your favorite stores</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {merchantInsights.map((merchant, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-xl border bg-gradient-to-r from-gray-50 to-white hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-gray-900 mb-3">{merchant.store}</h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-blue-600" />
                                <span className="text-sm">
                                  <span className="font-medium">Best Time:</span> {merchant.bestTime}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <TrendingDown className="w-4 h-4 text-green-600" />
                                <span className="text-sm">
                                  <span className="font-medium">Avg Savings:</span> {merchant.avgSavings}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-gray-600" />
                                <span className="text-sm">
                                  <span className="font-medium">Distance:</span> {merchant.distance}
                                </span>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <Target className="w-4 h-4 text-orange-600" />
                                <span className="text-sm">
                                  <span className="font-medium">Crowd Level:</span> {merchant.crowdLevel}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-purple-600" />
                                <span className="text-sm">
                                  <span className="font-medium">Special:</span> {merchant.specialOffers}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                            <MapPin className="w-4 h-4 mr-2" />
                            Navigate
                          </Button>
                          <Button size="sm" variant="outline" className="bg-white/80">
                            <Wallet className="w-4 h-4 mr-2" />
                            Save Deal
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
