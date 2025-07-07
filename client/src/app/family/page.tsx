"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Users,
  ArrowLeft,
  Crown,
  Shield,
  Eye,
  UserPlus,
  Settings,
  DollarSign,
  TrendingUp,
  Target,
  Calendar,
  Receipt,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

export default function FamilyPage() {
  const [inviteEmail, setInviteEmail] = useState("")

  // Mock family data
  const familyMembers = [
    {
      id: 1,
      name: "Priya Sharma",
      email: "priya@email.com",
      role: "admin",
      avatar: "👩‍💼",
      spending: 28475,
      receipts: 47,
      joinDate: "2024-01-01",
      status: "active",
    },
    {
      id: 2,
      name: "Rajesh Sharma",
      email: "rajesh@email.com",
      role: "member",
      avatar: "👨‍💼",
      spending: 15680,
      receipts: 23,
      joinDate: "2024-01-15",
      status: "active",
    },
    {
      id: 3,
      name: "Aarav Sharma",
      email: "aarav@email.com",
      role: "child",
      avatar: "👦",
      spending: 3200,
      receipts: 8,
      joinDate: "2024-02-01",
      status: "limited",
    },
    {
      id: 4,
      name: "Dadi Sharma",
      email: "dadi@email.com",
      role: "member",
      avatar: "👵",
      spending: 8900,
      receipts: 15,
      joinDate: "2024-01-20",
      status: "active",
    },
  ]

  const familyBudget = {
    total: 80000,
    spent: 56255,
    categories: [
      { name: "Groceries", budget: 25000, spent: 22400, color: "bg-blue-500" },
      { name: "Restaurants", budget: 15000, spent: 12800, color: "bg-green-500" },
      { name: "Shopping", budget: 20000, spent: 15600, color: "bg-purple-500" },
      { name: "Transportation", budget: 10000, spent: 3200, color: "bg-orange-500" },
      { name: "Entertainment", budget: 10000, spent: 2255, color: "bg-pink-500" },
    ],
  }

  const familyGoals = [
    {
      id: 1,
      title: "Family Vacation Fund",
      target: 150000,
      current: 89000,
      deadline: "2025-06-01",
      contributors: ["Priya", "Rajesh"],
    },
    {
      id: 2,
      title: "Emergency Fund",
      target: 200000,
      current: 145000,
      deadline: "2025-12-31",
      contributors: ["Priya", "Rajesh", "Dadi"],
    },
    {
      id: 3,
      title: "Aarav's Education",
      target: 500000,
      current: 280000,
      deadline: "2027-04-01",
      contributors: ["Priya", "Rajesh"],
    },
  ]

  const recentActivity = [
    {
      id: 1,
      member: "Rajesh",
      action: "Added receipt from Big Bazaar",
      amount: 2450,
      time: "2 hours ago",
      category: "Groceries",
    },
    {
      id: 2,
      member: "Aarav",
      action: "Spent on school supplies",
      amount: 850,
      time: "5 hours ago",
      category: "Education",
    },
    {
      id: 3,
      member: "Dadi",
      action: "Medicine purchase",
      amount: 1200,
      time: "1 day ago",
      category: "Healthcare",
    },
    {
      id: 4,
      member: "Priya",
      action: "Grocery shopping at More",
      amount: 3200,
      time: "2 days ago",
      category: "Groceries",
    },
  ]

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "admin":
        return <Crown className="w-4 h-4 text-yellow-600" />
      case "member":
        return <Users className="w-4 h-4 text-blue-600" />
      case "child":
        return <Shield className="w-4 h-4 text-green-600" />
      default:
        return <Users className="w-4 h-4 text-gray-600" />
    }
  }

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "member":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "child":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

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
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Family Finance</h1>
                  <p className="text-gray-600">Manage shared expenses and budgets</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="text-blue-700 border-blue-300 bg-blue-50 px-3 py-1">
                <Users className="w-3 h-3 mr-1" />
                {familyMembers.length} Members
              </Badge>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                <UserPlus className="w-4 h-4 mr-2" />
                Invite Member
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Family Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-blue-800 flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Family Spending
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900">₹{familyBudget.spent.toLocaleString()}</div>
              <div className="text-xs text-blue-700 mt-1">This month</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-green-800 flex items-center gap-2">
                <Target className="w-4 h-4" />
                Budget Usage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-900">
                {Math.round((familyBudget.spent / familyBudget.total) * 100)}%
              </div>
              <div className="text-xs text-green-700 mt-1">
                ₹{(familyBudget.total - familyBudget.spent).toLocaleString()} remaining
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-purple-800 flex items-center gap-2">
                <Receipt className="w-4 h-4" />
                Total Receipts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-900">
                {familyMembers.reduce((sum, member) => sum + member.receipts, 0)}
              </div>
              <div className="text-xs text-purple-700 mt-1">This month</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-orange-800 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Savings Goals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-900">{familyGoals.length}</div>
              <div className="text-xs text-orange-700 mt-1">Active goals</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="members" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm shadow-lg">
            <TabsTrigger
              value="members"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
            >
              Members
            </TabsTrigger>
            <TabsTrigger
              value="budget"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
            >
              Budget
            </TabsTrigger>
            <TabsTrigger
              value="goals"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white"
            >
              Goals
            </TabsTrigger>
            <TabsTrigger
              value="activity"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
            >
              Activity
            </TabsTrigger>
          </TabsList>

          <TabsContent value="members" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-6 h-6 text-blue-600" />
                      Family Members
                    </CardTitle>
                    <CardDescription>Manage family access and permissions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {familyMembers.map((member) => (
                        <div
                          key={member.id}
                          className="p-4 rounded-xl border bg-gradient-to-r from-gray-50 to-white hover:shadow-md transition-all duration-200"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl shadow-lg">
                                {member.avatar}
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <h3 className="font-semibold text-gray-900">{member.name}</h3>
                                  <Badge variant="outline" className={getRoleColor(member.role)}>
                                    {getRoleIcon(member.role)}
                                    <span className="ml-1 capitalize">{member.role}</span>
                                  </Badge>
                                </div>
                                <p className="text-sm text-gray-600">{member.email}</p>
                                <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                                  <span>₹{member.spending.toLocaleString()} spent</span>
                                  <span>{member.receipts} receipts</span>
                                  <span>Joined {new Date(member.joinDate).toLocaleDateString()}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="sm" className="bg-white/80">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button variant="outline" size="sm" className="bg-white/80">
                                <Settings className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="text-lg">Invite New Member</CardTitle>
                    <CardDescription>Add family members to share expenses</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="family@email.com"
                        value={inviteEmail}
                        onChange={(e) => setInviteEmail(e.target.value)}
                        className="bg-white/80"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Send Invitation
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-purple-600" />
                      Family Insights
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="p-3 bg-white/50 rounded-lg">
                      <div className="font-medium text-blue-900">Top Spender</div>
                      <div className="text-blue-700">Priya - ₹28,475 this month</div>
                    </div>
                    <div className="p-3 bg-white/50 rounded-lg">
                      <div className="font-medium text-green-900">Most Receipts</div>
                      <div className="text-green-700">Priya - 47 receipts scanned</div>
                    </div>
                    <div className="p-3 bg-white/50 rounded-lg">
                      <div className="font-medium text-purple-900">Savings Champion</div>
                      <div className="text-purple-700">Rajesh - 15% under budget</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="budget" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-green-600" />
                  Family Budget Overview
                </CardTitle>
                <CardDescription>Track spending across all family members</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Total Family Budget</h3>
                        <p className="text-gray-600">Monthly allocation across all categories</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">₹{familyBudget.spent.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">of ₹{familyBudget.total.toLocaleString()}</div>
                      </div>
                    </div>
                    <Progress value={(familyBudget.spent / familyBudget.total) * 100} className="h-4" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Category Breakdown</h3>
                    {familyBudget.categories.map((category, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-xl border bg-gradient-to-r from-gray-50 to-white hover:shadow-md transition-all duration-200"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full ${category.color}`} />
                            <span className="font-medium text-gray-900">{category.name}</span>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-gray-900">₹{category.spent.toLocaleString()}</div>
                            <div className="text-sm text-gray-600">of ₹{category.budget.toLocaleString()}</div>
                          </div>
                        </div>
                        <Progress value={(category.spent / category.budget) * 100} className="h-2" />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>{Math.round((category.spent / category.budget) * 100)}% used</span>
                          <span>₹{(category.budget - category.spent).toLocaleString()} remaining</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="goals" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-orange-600" />
                  Family Savings Goals
                </CardTitle>
                <CardDescription>Track progress towards shared financial objectives</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {familyGoals.map((goal) => (
                    <div
                      key={goal.id}
                      className="p-6 rounded-xl border bg-gradient-to-r from-orange-50 to-yellow-50 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-gray-900 mb-2">{goal.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>Due: {new Date(goal.deadline).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              <span>{goal.contributors.join(", ")}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-orange-600">₹{goal.current.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">of ₹{goal.target.toLocaleString()}</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium">{Math.round((goal.current / goal.target) * 100)}%</span>
                        </div>
                        <Progress value={(goal.current / goal.target) * 100} className="h-3" />
                        <div className="text-sm text-gray-600">
                          ₹{(goal.target - goal.current).toLocaleString()} remaining
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Receipt className="w-6 h-6 text-purple-600" />
                  Recent Family Activity
                </CardTitle>
                <CardDescription>Latest transactions and updates from all family members</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div
                      key={activity.id}
                      className="p-4 rounded-xl border bg-gradient-to-r from-gray-50 to-white hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold">
                            {activity.member[0]}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{activity.member}</div>
                            <div className="text-sm text-gray-600">{activity.action}</div>
                            <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                              <span>{activity.time}</span>
                              <Badge variant="outline" className="text-xs">
                                {activity.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-lg text-gray-900">₹{activity.amount.toLocaleString()}</div>
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
