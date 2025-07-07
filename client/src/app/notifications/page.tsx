"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bell,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Target,
  Wallet,
  ArrowLeft,
  Settings,
  Trash2,
  BookMarkedIcon as MarkAsRead,
} from "lucide-react"
import Link from "next/link"

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "budget",
      title: "Budget Alert - Groceries",
      message:
        "You've spent ₹1,24,730 on groceries this month (103.9% of budget). Consider meal planning to stay within budget.",
      timestamp: "2025-01-15T10:30:00",
      read: false,
      priority: "high",
      icon: AlertTriangle,
      color: "text-red-600 bg-red-50 border-red-200",
    },
    {
      id: 2,
      type: "achievement",
      title: "Great Job! Dining Savings",
      message: "You've reduced restaurant spending by 8% this month, saving ₹5,200! Keep up the good work.",
      timestamp: "2025-01-15T09:15:00",
      read: false,
      priority: "medium",
      icon: CheckCircle,
      color: "text-green-600 bg-green-50 border-green-200",
    },
    {
      id: 3,
      type: "wallet",
      title: "New Wallet Pass Created",
      message: "Receipt from Big Bazaar (₹12,745) has been added to your Google Wallet.",
      timestamp: "2025-01-15T08:45:00",
      read: true,
      priority: "low",
      icon: Wallet,
      color: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      id: 4,
      type: "insight",
      title: "Spending Pattern Alert",
      message: "Your shopping expenses increased by 23% this month. AI suggests reviewing recent purchases.",
      timestamp: "2025-01-14T16:20:00",
      read: false,
      priority: "medium",
      icon: TrendingUp,
      color: "text-orange-600 bg-orange-50 border-orange-200",
    },
    {
      id: 5,
      type: "goal",
      title: "Monthly Goal Update",
      message: "You're 94.9% through your monthly budget with 16 days remaining. Stay mindful of spending.",
      timestamp: "2025-01-14T12:00:00",
      read: true,
      priority: "medium",
      icon: Target,
      color: "text-purple-600 bg-purple-50 border-purple-200",
    },
  ])

  const markAsRead = (id: number) => {
    setNotifications((prev) => prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
  }

  const deleteNotification = (id: number) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id))
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })))
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  const getNotificationsByType = (type: string) => {
    if (type === "all") return notifications
    return notifications.filter((n) => n.type === type)
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
                  <Bell className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Notifications
                  </h1>
                  <p className="text-gray-600 text-lg">Stay updated with your financial insights</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {unreadCount > 0 && (
                <Badge variant="destructive" className="bg-red-100 text-red-800 border-red-200">
                  {unreadCount} unread
                </Badge>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={markAllAsRead}
                className="bg-white/80 hover:bg-blue-50 border-blue-200 text-blue-700"
              >
                <MarkAsRead className="w-4 h-4 mr-2" />
                Mark All Read
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="bg-white/80 hover:bg-gray-50 border-gray-200 text-gray-700"
              >
                <Link href="/settings">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-white/80 backdrop-blur-sm shadow-lg">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
            >
              All ({notifications.length})
            </TabsTrigger>
            <TabsTrigger
              value="budget"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-red-600 data-[state=active]:text-white"
            >
              Budget
            </TabsTrigger>
            <TabsTrigger
              value="achievement"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-green-600 data-[state=active]:text-white"
            >
              Achievements
            </TabsTrigger>
            <TabsTrigger
              value="wallet"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white"
            >
              Wallet
            </TabsTrigger>
            <TabsTrigger
              value="insight"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-orange-600 data-[state=active]:text-white"
            >
              Insights
            </TabsTrigger>
            <TabsTrigger
              value="goal"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
            >
              Goals
            </TabsTrigger>
          </TabsList>

          {["all", "budget", "achievement", "wallet", "insight", "goal"].map((type) => (
            <TabsContent key={type} value={type} className="space-y-4">
              {getNotificationsByType(type).length === 0 ? (
                <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
                  <CardContent className="p-12 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Bell className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No notifications</h3>
                    <p className="text-gray-600">
                      You're all caught up! No {type === "all" ? "" : type} notifications at the moment.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                getNotificationsByType(type).map((notification) => (
                  <Card
                    key={notification.id}
                    className={`bg-white/80 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                      !notification.read ? "ring-2 ring-blue-200" : ""
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${notification.color}`}>
                          <notification.icon className="w-6 h-6" />
                        </div>

                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className={`font-semibold text-gray-900 ${!notification.read ? "font-bold" : ""}`}>
                                {notification.title}
                                {!notification.read && (
                                  <Badge variant="secondary" className="ml-2 bg-blue-100 text-blue-800 text-xs">
                                    New
                                  </Badge>
                                )}
                              </h3>
                              <p className="text-gray-700 leading-relaxed mt-1">{notification.message}</p>
                            </div>

                            <div className="flex items-center gap-2 ml-4">
                              {!notification.read && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => markAsRead(notification.id)}
                                  className="hover:bg-blue-50 text-blue-600"
                                >
                                  <CheckCircle className="w-4 h-4" />
                                </Button>
                              )}
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => deleteNotification(notification.id)}
                                className="hover:bg-red-50 text-red-600"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-500">
                              {new Date(notification.timestamp).toLocaleString()}
                            </div>
                            <Badge
                              variant="outline"
                              className={`text-xs ${
                                notification.priority === "high"
                                  ? "border-red-200 text-red-700 bg-red-50"
                                  : notification.priority === "medium"
                                    ? "border-yellow-200 text-yellow-700 bg-yellow-50"
                                    : "border-gray-200 text-gray-700 bg-gray-50"
                              }`}
                            >
                              {notification.priority} priority
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
