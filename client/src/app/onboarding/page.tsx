"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Camera, Wallet, Brain, Users, Target, Sparkles, ArrowRight, CheckCircle, Mic, Gamepad2 } from "lucide-react"
import Link from "next/link"

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [userProfile, setUserProfile] = useState({
    name: "",
    language: "",
    currency: "INR",
    monthlyBudget: "",
    goals: [] as string[],
    interests: [] as string[],
  })

  const totalSteps = 5
  const progress = (currentStep / totalSteps) * 100

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "hi", name: "हिंदी (Hindi)", flag: "🇮🇳" },
    { code: "ta", name: "தமிழ் (Tamil)", flag: "🇮🇳" },
    { code: "te", name: "తెలుగు (Telugu)", flag: "🇮🇳" },
    { code: "bn", name: "বাংলা (Bengali)", flag: "🇧🇩" },
    { code: "mr", name: "मराठी (Marathi)", flag: "🇮🇳" },
    { code: "gu", name: "ગુજરાતી (Gujarati)", flag: "🇮🇳" },
    { code: "kn", name: "ಕನ್ನಡ (Kannada)", flag: "🇮🇳" },
  ]

  const goals = [
    { id: "save", label: "Save Money", icon: Target, color: "bg-green-100 text-green-800" },
    { id: "budget", label: "Better Budgeting", icon: Brain, color: "bg-blue-100 text-blue-800" },
    { id: "track", label: "Track Expenses", icon: Wallet, color: "bg-purple-100 text-purple-800" },
    { id: "family", label: "Family Finance", icon: Users, color: "bg-orange-100 text-orange-800" },
  ]

  const interests = [
    "Groceries",
    "Restaurants",
    "Shopping",
    "Travel",
    "Entertainment",
    "Health",
    "Education",
    "Technology",
  ]

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const toggleGoal = (goalId: string) => {
    setUserProfile((prev) => ({
      ...prev,
      goals: prev.goals.includes(goalId) ? prev.goals.filter((g) => g !== goalId) : [...prev.goals, goalId],
    }))
  }

  const toggleInterest = (interest: string) => {
    setUserProfile((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Welcome to Raseed
                </h1>
                <Badge
                  variant="secondary"
                  className="text-xs bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700"
                >
                  AI-Powered Personalization
                </Badge>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Step {currentStep} of {totalSteps}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Personalization Progress</span>
            <span className="text-sm text-gray-500">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-3" />
        </div>

        {/* Step 1: Welcome & Introduction */}
        {currentStep === 1 && (
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader className="text-center pb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Wallet className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-3xl text-gray-900 mb-4">Transform Your Google Wallet Experience</CardTitle>
              <CardDescription className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Raseed is your AI-powered receipt manager that turns every purchase into smart Google Wallet passes with
                personalized financial insights. Let's set up your perfect experience!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                  <Camera className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Smart Scanning</h3>
                  <p className="text-sm text-gray-600">Photo, video, voice - scan receipts in any language</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                  <Brain className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">AI Insights</h3>
                  <p className="text-sm text-gray-600">Personalized spending analysis and smart recommendations</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                  <Gamepad2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Gamification</h3>
                  <p className="text-sm text-gray-600">Earn badges, compete with friends, achieve financial goals</p>
                </div>
              </div>
              <div className="flex justify-center">
                <Button onClick={nextStep} size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 px-8">
                  Let's Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Personal Information */}
        {currentStep === 2 && (
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Tell Us About Yourself</CardTitle>
              <CardDescription className="text-gray-600">Help us personalize your Raseed experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-900 font-medium">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={userProfile.name}
                    onChange={(e) => setUserProfile((prev) => ({ ...prev, name: e.target.value }))}
                    className="bg-white/80 border-gray-300 focus:border-blue-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-gray-900 font-medium">
                    Monthly Budget (₹)
                  </Label>
                  <Input
                    id="budget"
                    placeholder="e.g., 50000"
                    value={userProfile.monthlyBudget}
                    onChange={(e) => setUserProfile((prev) => ({ ...prev, monthlyBudget: e.target.value }))}
                    className="bg-white/80 border-gray-300 focus:border-blue-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-gray-900 font-medium">Preferred Language</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {languages.map((lang) => (
                    <Button
                      key={lang.code}
                      variant={userProfile.language === lang.code ? "default" : "outline"}
                      className={`justify-start h-auto p-3 ${
                        userProfile.language === lang.code
                          ? "bg-gradient-to-r from-blue-600 to-purple-600"
                          : "bg-white/80 hover:bg-blue-50"
                      }`}
                      onClick={() => setUserProfile((prev) => ({ ...prev, language: lang.code }))}
                    >
                      <span className="mr-2">{lang.flag}</span>
                      <span className="text-sm">{lang.name}</span>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between pt-6">
                <Button onClick={prevStep} variant="outline" className="bg-white/80">
                  Previous
                </Button>
                <Button
                  onClick={nextStep}
                  disabled={!userProfile.name || !userProfile.language}
                  className="bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Financial Goals */}
        {currentStep === 3 && (
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">What Are Your Financial Goals?</CardTitle>
              <CardDescription className="text-gray-600">
                Select your primary objectives (choose multiple)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                {goals.map((goal) => (
                  <Button
                    key={goal.id}
                    variant={userProfile.goals.includes(goal.id) ? "default" : "outline"}
                    className={`h-auto p-6 justify-start ${
                      userProfile.goals.includes(goal.id)
                        ? "bg-gradient-to-r from-blue-600 to-purple-600"
                        : `bg-white/80 hover:bg-blue-50 ${goal.color} border`
                    }`}
                    onClick={() => toggleGoal(goal.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          userProfile.goals.includes(goal.id) ? "bg-white/20" : "bg-white/50"
                        }`}
                      >
                        <goal.icon className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold">{goal.label}</div>
                        <div className="text-sm opacity-80">
                          {goal.id === "save" && "Get AI-powered savings suggestions"}
                          {goal.id === "budget" && "Smart budget tracking and alerts"}
                          {goal.id === "track" && "Detailed expense categorization"}
                          {goal.id === "family" && "Share and manage family expenses"}
                        </div>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>

              <div className="flex justify-between pt-6">
                <Button onClick={prevStep} variant="outline" className="bg-white/80">
                  Previous
                </Button>
                <Button
                  onClick={nextStep}
                  disabled={userProfile.goals.length === 0}
                  className="bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Spending Categories */}
        {currentStep === 4 && (
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">What Do You Spend On Most?</CardTitle>
              <CardDescription className="text-gray-600">
                Help us customize your experience (select your top categories)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {interests.map((interest) => (
                  <Button
                    key={interest}
                    variant={userProfile.interests.includes(interest) ? "default" : "outline"}
                    className={`h-auto p-4 ${
                      userProfile.interests.includes(interest)
                        ? "bg-gradient-to-r from-blue-600 to-purple-600"
                        : "bg-white/80 hover:bg-blue-50"
                    }`}
                    onClick={() => toggleInterest(interest)}
                  >
                    <span className="text-sm font-medium">{interest}</span>
                  </Button>
                ))}
              </div>

              <div className="flex justify-between pt-6">
                <Button onClick={prevStep} variant="outline" className="bg-white/80">
                  Previous
                </Button>
                <Button
                  onClick={nextStep}
                  disabled={userProfile.interests.length === 0}
                  className="bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

  {/* Step 5: Personalization Complete */}
        {currentStep === 5 && (
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader className="text-center pb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-3xl text-gray-900 mb-4">You're All Set!</CardTitle>
              <CardDescription className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Your personalized Raseed experience is ready. Start scanning receipts and get AI-powered insights
                instantly!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                  <Camera className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Scan Your First Receipt</h3>
                  <p className="text-sm text-gray-600">Photo, video, or live camera - any format works!</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                  <Mic className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Try Voice Commands</h3>
                  <p className="text-sm text-gray-600">Ask questions in {userProfile.language} language</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                  <Wallet className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Check Google Wallet</h3>
                  <p className="text-sm text-gray-600">Your receipts will appear as smart passes</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8"
                >
                  <Link href="/upload">
                    <Camera className="w-4 h-4 mr-2" />
                    Scan First Receipt
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-white/80 hover:bg-blue-50 border-blue-200 text-blue-700"
                >
                  <Link href="/dashboard">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Explore Dashboard
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
