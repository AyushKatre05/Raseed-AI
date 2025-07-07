"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Settings,
  User,
  Bell,
  Shield,
  Wallet,
  Globe,
  Smartphone,
  ArrowLeft,
  Save,
  Download,
  Trash2,
  Eye,
  EyeOff,
} from "lucide-react"
import Link from "next/link"

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    budgetAlerts: true,
    spendingInsights: true,
    walletUpdates: true,
    monthlyReports: false,
    achievementBadges: true,
  })

  const [privacy, setPrivacy] = useState({
    dataSharing: false,
    analyticsTracking: true,
    personalizedAds: false,
  })

  const [showBudgets, setShowBudgets] = useState(false)

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
                  <Settings className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Settings
                  </h1>
                  <p className="text-gray-600 text-lg">Manage your account and preferences</p>
                </div>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white/80 backdrop-blur-sm shadow-lg">
            <TabsTrigger
              value="profile"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
            >
              Profile
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
            >
              Notifications
            </TabsTrigger>
            <TabsTrigger
              value="budget"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
            >
              Budget
            </TabsTrigger>
            <TabsTrigger
              value="privacy"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
            >
              Privacy
            </TabsTrigger>
            <TabsTrigger
              value="integrations"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
            >
              Integrations
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
                  <User className="w-6 h-6 text-blue-600" />
                  Profile Information
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Update your personal information and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-900 font-medium">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      defaultValue="Priya"
                      className="bg-white/80 border-gray-300 focus:border-blue-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-900 font-medium">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      defaultValue="Sharma"
                      className="bg-white/80 border-gray-300 focus:border-blue-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-900 font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="priya.sharma@email.com"
                    className="bg-white/80 border-gray-300 focus:border-blue-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-900 font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    defaultValue="+91 98765 43210"
                    className="bg-white/80 border-gray-300 focus:border-blue-400"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="language" className="text-gray-900 font-medium">
                      Preferred Language
                    </Label>
                    <Select defaultValue="english">
                      <SelectTrigger className="bg-white/80 border-gray-300">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="hindi">हिंदी (Hindi)</SelectItem>
                        <SelectItem value="marathi">मराठी (Marathi)</SelectItem>
                        <SelectItem value="tamil">தமிழ் (Tamil)</SelectItem>
                        <SelectItem value="bengali">বাংলা (Bengali)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currency" className="text-gray-900 font-medium">
                      Currency
                    </Label>
                    <Select defaultValue="inr">
                      <SelectTrigger className="bg-white/80 border-gray-300">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inr">₹ Indian Rupee (INR)</SelectItem>
                        <SelectItem value="usd">$ US Dollar (USD)</SelectItem>
                        <SelectItem value="eur">€ Euro (EUR)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
                  <Bell className="w-6 h-6 text-blue-600" />
                  Notification Preferences
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Choose what notifications you want to receive
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-gray-50 to-white border">
                    <div>
                      <div className="font-medium text-gray-900">Budget Alerts</div>
                      <div className="text-sm text-gray-600">Get notified when you're close to or over budget</div>
                    </div>
                    <Switch
                      checked={notifications.budgetAlerts}
                      onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, budgetAlerts: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-gray-50 to-white border">
                    <div>
                      <div className="font-medium text-gray-900">Spending Insights</div>
                      <div className="text-sm text-gray-600">Receive AI-powered spending analysis and tips</div>
                    </div>
                    <Switch
                      checked={notifications.spendingInsights}
                      onCheckedChange={(checked) =>
                        setNotifications((prev) => ({ ...prev, spendingInsights: checked }))
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-gray-50 to-white border">
                    <div>
                      <div className="font-medium text-gray-900">Wallet Updates</div>
                      <div className="text-sm text-gray-600">
                        Notifications when new passes are added to Google Wallet
                      </div>
                    </div>
                    <Switch
                      checked={notifications.walletUpdates}
                      onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, walletUpdates: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-gray-50 to-white border">
                    <div>
                      <div className="font-medium text-gray-900">Monthly Reports</div>
                      <div className="text-sm text-gray-600">Get detailed monthly spending reports via email</div>
                    </div>
                    <Switch
                      checked={notifications.monthlyReports}
                      onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, monthlyReports: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-gray-50 to-white border">
                    <div>
                      <div className="font-medium text-gray-900">Achievement Badges</div>
                      <div className="text-sm text-gray-600">Celebrate your financial milestones and achievements</div>
                    </div>
                    <Switch
                      checked={notifications.achievementBadges}
                      onCheckedChange={(checked) =>
                        setNotifications((prev) => ({ ...prev, achievementBadges: checked }))
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="budget" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Budget Settings</CardTitle>
                <CardDescription className="text-gray-600">
                  Set your monthly budget limits for different categories
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="totalBudget" className="text-gray-900 font-medium">
                      Total Monthly Budget
                    </Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                      <Input
                        id="totalBudget"
                        defaultValue="300000"
                        className="pl-8 bg-white/80 border-gray-300 focus:border-blue-400"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-900 font-medium">Budget Visibility</Label>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowBudgets(!showBudgets)}
                        className="bg-white/80"
                      >
                        {showBudgets ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
                        {showBudgets ? "Hide" : "Show"} Budgets
                      </Button>
                    </div>
                  </div>
                </div>

                {showBudgets && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Category Budgets</h3>
                    {[
                      { name: "Groceries", current: 120000 },
                      { name: "Restaurants", current: 80000 },
                      { name: "Shopping", current: 40000 },
                      { name: "Transportation", current: 30000 },
                      { name: "Entertainment", current: 25000 },
                    ].map((category, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-gray-50 to-white border"
                      >
                        <div className="font-medium text-gray-900">{category.name}</div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500">₹</span>
                          <Input
                            defaultValue={category.current.toString()}
                            className="w-32 bg-white/80 border-gray-300 focus:border-blue-400"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-blue-600" />
                  Privacy & Security
                </CardTitle>
                <CardDescription className="text-gray-600">Control how your data is used and shared</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-gray-50 to-white border">
                    <div>
                      <div className="font-medium text-gray-900">Data Sharing</div>
                      <div className="text-sm text-gray-600">Allow sharing anonymized data for service improvement</div>
                    </div>
                    <Switch
                      checked={privacy.dataSharing}
                      onCheckedChange={(checked) => setPrivacy((prev) => ({ ...prev, dataSharing: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-gray-50 to-white border">
                    <div>
                      <div className="font-medium text-gray-900">Analytics Tracking</div>
                      <div className="text-sm text-gray-600">Help us improve the app with usage analytics</div>
                    </div>
                    <Switch
                      checked={privacy.analyticsTracking}
                      onCheckedChange={(checked) => setPrivacy((prev) => ({ ...prev, analyticsTracking: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-gray-50 to-white border">
                    <div>
                      <div className="font-medium text-gray-900">Personalized Ads</div>
                      <div className="text-sm text-gray-600">Show ads based on your spending patterns</div>
                    </div>
                    <Switch
                      checked={privacy.personalizedAds}
                      onCheckedChange={(checked) => setPrivacy((prev) => ({ ...prev, personalizedAds: checked }))}
                    />
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="font-semibold text-gray-900 mb-4">Data Management</h3>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" className="bg-white/80 hover:bg-blue-50 border-blue-200 text-blue-700">
                      <Download className="w-4 h-4 mr-2" />
                      Export My Data
                    </Button>
                    <Button variant="outline" className="bg-white/80 hover:bg-red-50 border-red-200 text-red-700">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete Account
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="integrations" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Connected Services</CardTitle>
                <CardDescription className="text-gray-600">
                  Manage your connected accounts and integrations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-green-50 to-green-100 border border-green-200">
                    <div className="flex items-center gap-3">
                      <Wallet className="w-8 h-8 text-green-600" />
                      <div>
                        <div className="font-medium text-gray-900">Google Wallet</div>
                        <div className="text-sm text-gray-600">Connected • Auto-sync enabled</div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Connected
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200">
                    <div className="flex items-center gap-3">
                      <Globe className="w-8 h-8 text-blue-600" />
                      <div>
                        <div className="font-medium text-gray-900">Firebase Cloud</div>
                        <div className="text-sm text-gray-600">Connected • Data sync active</div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      Connected
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-gray-50 to-white border">
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-8 h-8 text-gray-600" />
                      <div>
                        <div className="font-medium text-gray-900">Mobile App</div>
                        <div className="text-sm text-gray-600">Not connected • Install mobile app</div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/80 hover:bg-blue-50 border-blue-200 text-blue-700"
                    >
                      Connect
                    </Button>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="font-semibold text-gray-900 mb-4">API Access</h3>
                  <div className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900">Developer API</div>
                        <div className="text-sm text-gray-600">Access your data programmatically</div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/80 hover:bg-purple-50 border-purple-200 text-purple-700"
                      >
                        Generate Key
                      </Button>
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
