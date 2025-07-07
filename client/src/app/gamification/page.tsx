"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Trophy,
  Star,
  Target,
  Zap,
  Users,
  ArrowLeft,
  Crown,
  Medal,
  Award,
  TrendingUp,
  Calendar,
  Flame,
  Gift,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

export default function GamificationPage() {
  const [selectedTab, setSelectedTab] = useState("achievements")

  // Mock user stats
  const userStats = {
    level: 12,
    xp: 2450,
    xpToNext: 3000,
    totalPoints: 15680,
    streak: 23,
    rank: 156,
    totalUsers: 50000,
  }

  // Mock achievements
  const achievements = [
    {
      id: 1,
      title: "Receipt Scanner Pro",
      description: "Scan 100 receipts",
      icon: Trophy,
      progress: 87,
      total: 100,
      points: 500,
      unlocked: false,
      rarity: "gold",
    },
    {
      id: 2,
      title: "Budget Master",
      description: "Stay under budget for 3 months",
      icon: Target,
      progress: 100,
      total: 100,
      points: 1000,
      unlocked: true,
      rarity: "legendary",
    },
    {
      id: 3,
      title: "Savings Guru",
      description: "Save ₹10,000 using AI recommendations",
      icon: Star,
      progress: 65,
      total: 100,
      points: 750,
      unlocked: false,
      rarity: "epic",
    },
    {
      id: 4,
      title: "Streak Champion",
      description: "Maintain 30-day scanning streak",
      icon: Flame,
      progress: 77,
      total: 100,
      points: 600,
      unlocked: false,
      rarity: "rare",
    },
    {
      id: 5,
      title: "Voice Commander",
      description: "Use voice commands 50 times",
      icon: Zap,
      progress: 100,
      total: 100,
      points: 300,
      unlocked: true,
      rarity: "common",
    },
    {
      id: 6,
      title: "Social Spender",
      description: "Complete 5 challenges with friends",
      icon: Users,
      progress: 40,
      total: 100,
      points: 400,
      unlocked: false,
      rarity: "rare",
    },
  ]

  // Mock challenges
  const challenges = [
    {
      id: 1,
      title: "Weekly Grocery Challenge",
      description: "Spend less than ₹3,000 on groceries this week",
      type: "weekly",
      progress: 2100,
      target: 3000,
      reward: 200,
      timeLeft: "3 days",
      participants: 1247,
      difficulty: "medium",
    },
    {
      id: 2,
      title: "No Restaurant Week",
      description: "Avoid restaurant spending for 7 days",
      type: "weekly",
      progress: 5,
      target: 7,
      reward: 300,
      timeLeft: "2 days",
      participants: 892,
      difficulty: "hard",
    },
    {
      id: 3,
      title: "Receipt Scanning Streak",
      description: "Scan at least 1 receipt daily for 10 days",
      type: "daily",
      progress: 7,
      target: 10,
      reward: 150,
      timeLeft: "ongoing",
      participants: 2156,
      difficulty: "easy",
    },
  ]

  // Mock leaderboard
  const leaderboard = [
    { rank: 1, name: "Priya S.", points: 25680, level: 18, avatar: "🏆" },
    { rank: 2, name: "Rajesh K.", points: 23450, level: 17, avatar: "🥈" },
    { rank: 3, name: "Anita P.", points: 21230, level: 16, avatar: "🥉" },
    { rank: 4, name: "Vikram M.", points: 19870, level: 15, avatar: "⭐" },
    { rank: 5, name: "Sneha R.", points: 18560, level: 15, avatar: "⭐" },
    { rank: 156, name: "You", points: userStats.totalPoints, level: userStats.level, avatar: "👤", isUser: true },
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return "from-purple-500 to-pink-500"
      case "epic":
        return "from-blue-500 to-purple-500"
      case "rare":
        return "from-green-500 to-blue-500"
      case "gold":
        return "from-yellow-500 to-orange-500"
      default:
        return "from-gray-500 to-gray-600"
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "hard":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-green-100 text-green-800 border-green-200"
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
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Trophy className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Gamification Hub</h1>
                  <p className="text-gray-600">Earn rewards for smart financial habits</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="text-yellow-700 border-yellow-300 bg-yellow-50 px-3 py-1">
                <Crown className="w-3 h-3 mr-1" />
                Level {userStats.level}
              </Badge>
              <Badge variant="outline" className="text-orange-700 border-orange-300 bg-orange-50 px-3 py-1">
                <Flame className="w-3 h-3 mr-1" />
                {userStats.streak} Day Streak
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* User Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-yellow-50 to-orange-100 border-yellow-200 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-yellow-800 flex items-center gap-2">
                <Crown className="w-4 h-4" />
                Level & XP
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-yellow-900">Level {userStats.level}</div>
                <Progress value={(userStats.xp / userStats.xpToNext) * 100} className="h-2" />
                <div className="text-xs text-yellow-700">
                  {userStats.xp} / {userStats.xpToNext} XP
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-purple-800 flex items-center gap-2">
                <Star className="w-4 h-4" />
                Total Points
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-900">{userStats.totalPoints.toLocaleString()}</div>
              <div className="text-xs text-purple-700 mt-1">All-time earnings</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-red-100 border-orange-200 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-orange-800 flex items-center gap-2">
                <Flame className="w-4 h-4" />
                Current Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-900">{userStats.streak} days</div>
              <div className="text-xs text-orange-700 mt-1">Keep it going!</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-blue-800 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Global Rank
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900">#{userStats.rank}</div>
              <div className="text-xs text-blue-700 mt-1">of {userStats.totalUsers.toLocaleString()} users</div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm shadow-lg">
            <TabsTrigger
              value="achievements"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-white"
            >
              Achievements
            </TabsTrigger>
            <TabsTrigger
              value="challenges"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
            >
              Challenges
            </TabsTrigger>
            <TabsTrigger
              value="leaderboard"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
            >
              Leaderboard
            </TabsTrigger>
            <TabsTrigger
              value="rewards"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
            >
              Rewards
            </TabsTrigger>
          </TabsList>

          <TabsContent value="achievements" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-yellow-600" />
                  Achievements
                </CardTitle>
                <CardDescription>Unlock badges by completing financial goals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                        achievement.unlocked
                          ? "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200"
                          : "bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200"
                      }`}
                    >
                      <div className="text-center space-y-4">
                        <div
                          className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br ${getRarityColor(
                            achievement.rarity,
                          )} ${achievement.unlocked ? "" : "grayscale"}`}
                        >
                          <achievement.icon className="w-8 h-8 text-white" />
                        </div>

                        <div>
                          <h3 className={`font-semibold ${achievement.unlocked ? "text-gray-900" : "text-gray-500"}`}>
                            {achievement.title}
                          </h3>
                          <p className={`text-sm ${achievement.unlocked ? "text-gray-600" : "text-gray-400"}`}>
                            {achievement.description}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Progress</span>
                            <span className={achievement.unlocked ? "text-green-600" : "text-gray-600"}>
                              {achievement.progress}/{achievement.total}
                            </span>
                          </div>
                          <Progress value={achievement.progress} className="h-2" />
                        </div>

                        <div className="flex items-center justify-between">
                          <Badge
                            variant="outline"
                            className={`text-xs capitalize ${
                              achievement.rarity === "legendary"
                                ? "border-purple-300 text-purple-700 bg-purple-50"
                                : achievement.rarity === "epic"
                                  ? "border-blue-300 text-blue-700 bg-blue-50"
                                  : achievement.rarity === "rare"
                                    ? "border-green-300 text-green-700 bg-green-50"
                                    : achievement.rarity === "gold"
                                      ? "border-yellow-300 text-yellow-700 bg-yellow-50"
                                      : "border-gray-300 text-gray-700 bg-gray-50"
                            }`}
                          >
                            {achievement.rarity}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm font-medium">{achievement.points}</span>
                          </div>
                        </div>

                        {achievement.unlocked && (
                          <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">
                            <Award className="w-3 h-3 mr-1" />
                            Unlocked!
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="challenges" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-blue-600" />
                  Active Challenges
                </CardTitle>
                <CardDescription>Complete challenges to earn points and climb the leaderboard</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {challenges.map((challenge) => (
                    <div
                      key={challenge.id}
                      className="p-6 rounded-xl border bg-gradient-to-r from-gray-50 to-white hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-lg text-gray-900">{challenge.title}</h3>
                            <Badge variant="outline" className={getDifficultyColor(challenge.difficulty)}>
                              {challenge.difficulty}
                            </Badge>
                            <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                              <Calendar className="w-3 h-3 mr-1" />
                              {challenge.type}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-3">{challenge.description}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              <span>{challenge.participants.toLocaleString()} participants</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{challenge.timeLeft}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 mb-2">
                            <Gift className="w-4 h-4 text-purple-600" />
                            <span className="font-semibold text-purple-600">{challenge.reward} points</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium">
                            {challenge.type === "weekly" && challenge.title.includes("Grocery")
                              ? `₹${challenge.progress.toLocaleString()} / ₹${challenge.target.toLocaleString()}`
                              : `${challenge.progress} / ${challenge.target} days`}
                          </span>
                        </div>
                        <Progress value={(challenge.progress / challenge.target) * 100} className="h-3" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Medal className="w-6 h-6 text-green-600" />
                  Global Leaderboard
                </CardTitle>
                <CardDescription>See how you rank against other Raseed users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {leaderboard.map((user) => (
                    <div
                      key={user.rank}
                      className={`p-4 rounded-xl border transition-all duration-200 ${
                        user.isUser
                          ? "bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 ring-2 ring-blue-300"
                          : "bg-gradient-to-r from-gray-50 to-white hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                              user.rank <= 3
                                ? "bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg"
                                : user.isUser
                                  ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white"
                                  : "bg-gray-200 text-gray-600"
                            }`}
                          >
                            {user.avatar}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-gray-900">#{user.rank}</span>
                              <span className={`font-medium ${user.isUser ? "text-blue-900" : "text-gray-900"}`}>
                                {user.name}
                              </span>
                              {user.isUser && (
                                <Badge variant="default" className="bg-blue-100 text-blue-800">
                                  You
                                </Badge>
                              )}
                            </div>
                            <div className="text-sm text-gray-600">Level {user.level}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-lg text-gray-900">{user.points.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">points</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rewards" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="w-6 h-6 text-purple-600" />
                  Rewards Store
                </CardTitle>
                <CardDescription>Redeem your points for exclusive rewards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Premium Features",
                      description: "Unlock advanced AI insights for 1 month",
                      cost: 5000,
                      icon: Sparkles,
                      color: "from-purple-500 to-pink-500",
                    },
                    {
                      name: "Custom Wallet Themes",
                      description: "Personalize your Google Wallet passes",
                      cost: 2000,
                      icon: Star,
                      color: "from-blue-500 to-purple-500",
                    },
                    {
                      name: "Family Plan Upgrade",
                      description: "Share features with up to 5 family members",
                      cost: 8000,
                      icon: Users,
                      color: "from-green-500 to-blue-500",
                    },
                    {
                      name: "Voice Assistant Pro",
                      description: "Advanced voice commands and responses",
                      cost: 3000,
                      icon: Zap,
                      color: "from-orange-500 to-red-500",
                    },
                    {
                      name: "Priority Support",
                      description: "Get help faster with priority support",
                      cost: 1500,
                      icon: Crown,
                      color: "from-yellow-500 to-orange-500",
                    },
                    {
                      name: "Achievement Showcase",
                      description: "Display your achievements on profile",
                      cost: 1000,
                      icon: Trophy,
                      color: "from-gray-500 to-gray-600",
                    },
                  ].map((reward, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-xl border bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition-all duration-300"
                    >
                      <div className="text-center space-y-4">
                        <div
                          className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br ${reward.color}`}
                        >
                          <reward.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">{reward.name}</h3>
                          <p className="text-sm text-gray-600">{reward.description}</p>
                        </div>
                        <div className="flex items-center justify-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="font-bold text-lg">{reward.cost.toLocaleString()}</span>
                          <span className="text-sm text-gray-600">points</span>
                        </div>
                        <Button
                          className={`w-full ${
                            userStats.totalPoints >= reward.cost
                              ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                              : "bg-gray-400 cursor-not-allowed"
                          }`}
                          disabled={userStats.totalPoints < reward.cost}
                        >
                          {userStats.totalPoints >= reward.cost ? "Redeem" : "Not Enough Points"}
                        </Button>
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
