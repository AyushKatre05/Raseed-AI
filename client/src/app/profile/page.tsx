"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Trophy,
  Wallet,
  Bell,
  Shield,
  Smartphone,
  Globe,
  ArrowLeft,
  Edit3,
  Save,
  Camera,
  TrendingUp,
  Award,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "Ayush Katre",
    email: "ayushkatre@gmail.com",
    phone: "+91 7249413612",
    location: "Pune, Maharashtra",
    joinDate: "January 2023",
    avatar: "/placeholder.svg?height=120&width=120",
  })

  const [preferences, setPreferences] = useState({
    notifications: true,
    emailUpdates: true,
    smsAlerts: false,
    darkMode: false,
    language: "English",
    currency: "INR",
  })

  const stats = [
    { label: "Receipts Scanned", value: "247", icon: Camera, color: "blue" },
    { label: "Money Saved", value: "₹12,450", icon: TrendingUp, color: "green" },
    { label: "Achievement Points", value: "1,850", icon: Trophy, color: "yellow" },
    { label: "Streak Days", value: "23", icon: Zap, color: "purple" },
  ]

  const achievements = [
    { title: "Receipt Master", description: "Scanned 100+ receipts", icon: Camera, earned: true },
    { title: "Money Saver", description: "Saved ₹10,000+ this year", icon: TrendingUp, earned: true },
    { title: "Streak Champion", description: "30-day scanning streak", icon: Zap, earned: false },
    { title: "Family Leader", description: "Invited 5+ family members", icon: User, earned: false },
  ]

  const handleSave = () => {
    setIsEditing(false)
    // In real app, save to backend
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
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                  <User className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    My Profile
                  </h1>
                  <p className="text-gray-600 text-lg">Manage your account and preferences</p>
                </div>
              </div>
            </div>
            <Button
              onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
              className={`${
                isEditing
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              } text-white`}
            >
              {isEditing ? (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </>
              ) : (
                <>
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit Profile
                </>
              )}
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
              <CardContent className="p-6 text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                    <User className="w-16 h-16 text-white" />
                  </div>
                  {isEditing && (
                    <Button
                      size="sm"
                      className="absolute bottom-0 right-0 rounded-full w-10 h-10 p-0 bg-blue-600 hover:bg-blue-700"
                    >
                      <Camera className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{profileData.name}</h2>
                <p className="text-gray-600 mb-4">{profileData.email}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-6">
                  <Calendar className="w-4 h-4" />
                  Joined {profileData.joinDate}
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-xl bg-gradient-to-br ${
                        stat.color === "blue"
                          ? "from-blue-50 to-blue-100 border border-blue-200"
                          : stat.color === "green"
                            ? "from-green-50 to-green-100 border border-green-200"
                            : stat.color === "yellow"
                              ? "from-yellow-50 to-yellow-100 border border-yellow-200"
                              : "from-purple-50 to-purple-100 border border-purple-200"
                      }`}
                    >
                      <stat.icon
                        className={`w-5 h-5 mx-auto mb-1 ${
                          stat.color === "blue"
                            ? "text-blue-600"
                            : stat.color === "green"
                              ? "text-green-600"
                              : stat.color === "yellow"
                                ? "text-yellow-600"
                                : "text-purple-600"
                        }`}
                      />
                      <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0 mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-600" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      achievement.earned ? "bg-yellow-50 border border-yellow-200" : "bg-gray-50 border border-gray-200"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        achievement.earned ? "bg-yellow-100" : "bg-gray-100"
                      }`}
                    >
                      <achievement.icon
                        className={`w-5 h-5 ${achievement.earned ? "text-yellow-600" : "text-gray-400"}`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className={`font-medium ${achievement.earned ? "text-gray-900" : "text-gray-500"}`}>
                        {achievement.title}
                      </div>
                      <div className="text-sm text-gray-600">{achievement.description}</div>
                    </div>
                    {achievement.earned && <Award className="w-5 h-5 text-yellow-600" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="personal" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm shadow-lg">
                <TabsTrigger
                  value="personal"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
                >
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  value="preferences"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
                >
                  Preferences
                </TabsTrigger>
                <TabsTrigger
                  value="security"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
                >
                  Security
                </TabsTrigger>
              </TabsList>

              {/* Personal Information */}
              <TabsContent value="personal">
                <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                          <Input
                            id="name"
                            value={profileData.name}
                            onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                            disabled={!isEditing}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                          <Input
                            id="email"
                            type="email"
                            value={profileData.email}
                            onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                            disabled={!isEditing}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                          <Input
                            id="phone"
                            value={profileData.phone}
                            onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                            disabled={!isEditing}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                          <Input
                            id="location"
                            value={profileData.location}
                            onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                            disabled={!isEditing}
                            className="pl-10"
                          />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Connected Accounts</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                              <Wallet className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-medium">Google Wallet</div>
                              <div className="text-sm text-gray-600">Connected and syncing</div>
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-800 border-green-200">Connected</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Preferences */}
              <TabsContent value="preferences">
                <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
                  <CardHeader>
                    <CardTitle>App Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Notifications</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Bell className="w-5 h-5 text-gray-600" />
                            <div>
                              <div className="font-medium">Push Notifications</div>
                              <div className="text-sm text-gray-600">Receive app notifications</div>
                            </div>
                          </div>
                          <Switch
                            checked={preferences.notifications}
                            onCheckedChange={(checked) => setPreferences({ ...preferences, notifications: checked })}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-gray-600" />
                            <div>
                              <div className="font-medium">Email Updates</div>
                              <div className="text-sm text-gray-600">Weekly summary and tips</div>
                            </div>
                          </div>
                          <Switch
                            checked={preferences.emailUpdates}
                            onCheckedChange={(checked) => setPreferences({ ...preferences, emailUpdates: checked })}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Smartphone className="w-5 h-5 text-gray-600" />
                            <div>
                              <div className="font-medium">SMS Alerts</div>
                              <div className="text-sm text-gray-600">Important budget alerts</div>
                            </div>
                          </div>
                          <Switch
                            checked={preferences.smsAlerts}
                            onCheckedChange={(checked) => setPreferences({ ...preferences, smsAlerts: checked })}
                          />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-semibold mb-4">App Settings</h3>
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="language">Language</Label>
                            <div className="relative">
                              <Globe className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                              <select
                                id="language"
                                value={preferences.language}
                                onChange={(e) => setPreferences({ ...preferences, language: e.target.value })}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              >
                                <option value="English">English</option>
                                <option value="Hindi">हिंदी (Hindi)</option>
                                <option value="Tamil">தமிழ் (Tamil)</option>
                                <option value="Telugu">తెలుగు (Telugu)</option>
                                <option value="Bengali">বাংলা (Bengali)</option>
                              </select>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="currency">Currency</Label>
                            <select
                              id="currency"
                              value={preferences.currency}
                              onChange={(e) => setPreferences({ ...preferences, currency: e.target.value })}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                              <option value="INR">₹ Indian Rupee (INR)</option>
                              <option value="USD">$ US Dollar (USD)</option>
                              <option value="EUR">€ Euro (EUR)</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Security */}
              <TabsContent value="security">
                <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Security & Privacy
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Password & Authentication</h3>
                      <div className="space-y-4">
                        <Button variant="outline" className="w-full justify-start bg-transparent">
                          <Shield className="w-4 h-4 mr-2" />
                          Change Password
                        </Button>
                        <Button variant="outline" className="w-full justify-start bg-transparent">
                          <Smartphone className="w-4 h-4 mr-2" />
                          Enable Two-Factor Authentication
                        </Button>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Data & Privacy</h3>
                      <div className="space-y-4">
                        <Button variant="outline" className="w-full justify-start bg-transparent">
                          Download My Data
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-red-600 hover:text-red-700 bg-transparent"
                        >
                          Delete Account
                        </Button>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-blue-900">Your data is secure</h4>
                          <p className="text-sm text-blue-700 mt-1">
                            We use end-to-end encryption to protect your financial data and never share it with third
                            parties without your consent.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
