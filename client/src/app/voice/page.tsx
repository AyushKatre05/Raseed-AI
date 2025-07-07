"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Mic,
  MicOff,
  Volume2,
  ArrowLeft,
  Brain,
  Sparkles,
  Camera,
  Wallet,
  MessageSquare,
  Globe,
  Zap,
} from "lucide-react"
import Link from "next/link"

interface VoiceCommand {
  id: string
  text: string
  timestamp: Date
  response: string
  action?: string
  confidence: number
}

export default function VoicePage() {
  const [isListening, setIsListening] = useState(false)
  const [commands, setCommands] = useState<VoiceCommand[]>([])
  const [currentTranscript, setCurrentTranscript] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState("en-US")
  const recognitionRef = useRef<any>(null)

  const languages = [
    { code: "en-US", name: "English", flag: "🇺🇸" },
    { code: "hi-IN", name: "हिंदी", flag: "🇮🇳" },
    { code: "ta-IN", name: "தமிழ்", flag: "🇮🇳" },
    { code: "te-IN", name: "తెలుగు", flag: "🇮🇳" },
    { code: "bn-IN", name: "বাংলা", flag: "🇧🇩" },
    { code: "mr-IN", name: "मराठी", flag: "🇮🇳" },
  ]

  const quickCommands = [
    { text: "Scan receipt", action: "scan", icon: Camera },
    { text: "Show spending", action: "analytics", icon: Brain },
    { text: "Open wallet", action: "wallet", icon: Wallet },
    { text: "Monthly budget", action: "budget", icon: MessageSquare },
  ]

  useEffect(() => {
    if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition
      recognitionRef.current = new SpeechRecognition()
      recognitionRef.current.continuous = true
      recognitionRef.current.interimResults = true
      recognitionRef.current.lang = selectedLanguage

      recognitionRef.current.onresult = (event: any) => {
        let transcript = ""
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript
        }
        setCurrentTranscript(transcript)

        if (event.results[event.results.length - 1].isFinal) {
          processVoiceCommand(transcript, event.results[event.results.length - 1][0].confidence)
        }
      }

      recognitionRef.current.onerror = (event: any) => {
        console.error("Speech recognition error:", event.error)
        setIsListening(false)
      }

      recognitionRef.current.onend = () => {
        setIsListening(false)
        setCurrentTranscript("")
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
    }
  }, [selectedLanguage])

  const startListening = () => {
    if (recognitionRef.current) {
      setIsListening(true)
      recognitionRef.current.start()
    }
  }

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop()
    }
    setIsListening(false)
  }

  const processVoiceCommand = (text: string, confidence: number) => {
    const lowerText = text.toLowerCase()
    let response = ""
    let action = ""

    // Smart command processing
    if (lowerText.includes("scan") || lowerText.includes("receipt") || lowerText.includes("photo")) {
      response = "Opening camera to scan receipt. Please hold your receipt in view."
      action = "scan"
    } else if (lowerText.includes("spending") || lowerText.includes("money") || lowerText.includes("expense")) {
      response = "Your total spending this month is ₹28,475. Would you like to see category breakdown?"
      action = "analytics"
    } else if (lowerText.includes("wallet") || lowerText.includes("pass")) {
      response = "Opening Google Wallet. You have 12 active receipt passes."
      action = "wallet"
    } else if (lowerText.includes("budget") || lowerText.includes("limit")) {
      response = "You've used 84% of your monthly budget. ₹4,800 remaining for this month."
      action = "budget"
    } else if (lowerText.includes("cook") || lowerText.includes("recipe")) {
      response =
        "Based on your recent grocery receipts, you can make: Pasta with tomato sauce, Rice with vegetables, or Chicken curry."
      action = "recipe"
    } else if (lowerText.includes("save") || lowerText.includes("savings")) {
      response = "You can save ₹2,400 this month by shopping at Big Bazaar instead of premium stores."
      action = "savings"
    } else {
      response = "I understand you said: '" + text + "'. How can I help you with your receipts and spending?"
      action = "general"
    }

    const newCommand: VoiceCommand = {
      id: Date.now().toString(),
      text,
      timestamp: new Date(),
      response,
      action,
      confidence: confidence * 100,
    }

    setCommands((prev) => [newCommand, ...prev])
  }

  const executeQuickCommand = (command: string, action: string) => {
    processVoiceCommand(command, 1.0)
  }

  const speakResponse = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = selectedLanguage
      speechSynthesis.speak(utterance)
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
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Mic className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Voice Commands</h1>
                  <p className="text-gray-600">Talk to manage your receipts and finances</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="text-purple-700 border-purple-300 bg-purple-50 px-3 py-1">
                <Sparkles className="w-3 h-3 mr-1" />
                AI Voice
              </Badge>
              <Badge variant="outline" className="text-green-700 border-green-300 bg-green-50 px-3 py-1">
                <Globe className="w-3 h-3 mr-1" />
                Multilingual
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Voice Interface */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Voice Control */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mic className="w-5 h-5 text-purple-600" />
                  Voice Assistant
                </CardTitle>
                <CardDescription>Speak naturally to manage your receipts and get financial insights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-6">
                  {/* Voice Visualizer */}
                  <div className="relative">
                    <div
                      className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center transition-all duration-300 ${
                        isListening
                          ? "bg-gradient-to-br from-purple-500 to-pink-600 shadow-2xl animate-pulse"
                          : "bg-gradient-to-br from-gray-400 to-gray-500 shadow-lg"
                      }`}
                    >
                      {isListening ? (
                        <Mic className="w-16 h-16 text-white" />
                      ) : (
                        <MicOff className="w-16 h-16 text-white" />
                      )}
                    </div>
                    {isListening && (
                      <div className="absolute inset-0 rounded-full border-4 border-purple-400 animate-ping"></div>
                    )}
                  </div>

                  {/* Current Transcript */}
                  {currentTranscript && (
                    <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                      <p className="text-purple-900 font-medium">Listening: "{currentTranscript}"</p>
                    </div>
                  )}

                  {/* Controls */}
                  <div className="flex justify-center gap-4">
                    {!isListening ? (
                      <Button
                        onClick={startListening}
                        size="lg"
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8"
                      >
                        <Mic className="w-4 h-4 mr-2" />
                        Start Listening
                      </Button>
                    ) : (
                      <Button
                        onClick={stopListening}
                        size="lg"
                        variant="outline"
                        className="bg-white/80 hover:bg-red-50 border-red-200 text-red-700"
                      >
                        <MicOff className="w-4 h-4 mr-2" />
                        Stop Listening
                      </Button>
                    )}
                  </div>

                  {/* Language Selection */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {languages.map((lang) => (
                      <Button
                        key={lang.code}
                        variant={selectedLanguage === lang.code ? "default" : "outline"}
                        size="sm"
                        className={`${
                          selectedLanguage === lang.code
                            ? "bg-gradient-to-r from-purple-600 to-pink-600"
                            : "bg-white/80 hover:bg-purple-50"
                        }`}
                        onClick={() => setSelectedLanguage(lang.code)}
                      >
                        <span className="mr-1">{lang.flag}</span>
                        {lang.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Command History */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle>Command History</CardTitle>
                <CardDescription>Your recent voice interactions</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96">
                  <div className="space-y-4">
                    {commands.length === 0 ? (
                      <div className="text-center py-8 text-gray-500">
                        <Mic className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>No voice commands yet. Try saying "Scan receipt" or "Show spending"</p>
                      </div>
                    ) : (
                      commands.map((command) => (
                        <div
                          key={command.id}
                          className="p-4 rounded-xl border bg-gradient-to-r from-gray-50 to-white hover:shadow-md transition-all duration-200"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Mic className="w-4 h-4 text-purple-600" />
                              <span className="font-medium text-gray-900">You said:</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary" className="text-xs">
                                {command.confidence.toFixed(0)}% confidence
                              </Badge>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => speakResponse(command.response)}
                                className="h-6 w-6 p-0"
                              >
                                <Volume2 className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                          <p className="text-gray-700 mb-3">"{command.text}"</p>
                          <div className="flex items-start gap-2">
                            <Brain className="w-4 h-4 text-blue-600 mt-0.5" />
                            <div>
                              <span className="font-medium text-gray-900">AI Response:</span>
                              <p className="text-gray-700 mt-1">{command.response}</p>
                            </div>
                          </div>
                          <div className="text-xs text-gray-500 mt-2">{command.timestamp.toLocaleTimeString()}</div>
                        </div>
                      ))
                    )}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Quick Commands Sidebar */}
          <div className="space-y-6">
            {/* Quick Commands */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-lg">Quick Commands</CardTitle>
                <CardDescription>Tap to execute common voice commands</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickCommands.map((command, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start h-auto p-4 bg-white/80 hover:bg-purple-50 border-purple-200 text-purple-700"
                    onClick={() => executeQuickCommand(command.text, command.action)}
                  >
                    <command.icon className="w-5 h-5 mr-3" />
                    <span className="font-medium">"{command.text}"</span>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Voice Tips */}
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Voice Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-purple-600 mt-0.5" />
                  <span>Say "Scan receipt" to open camera</span>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-purple-600 mt-0.5" />
                  <span>Ask "How much did I spend on groceries?"</span>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-purple-600 mt-0.5" />
                  <span>Try "What can I cook with my groceries?"</span>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-purple-600 mt-0.5" />
                  <span>Say "Show my budget status"</span>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-purple-600 mt-0.5" />
                  <span>Works in Hindi, Tamil, Telugu & more!</span>
                </div>
              </CardContent>
            </Card>

            {/* Voice Stats */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-lg">Voice Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Commands Today:</span>
                  <span className="font-semibold">{commands.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Avg Confidence:</span>
                  <span className="font-semibold">
                    {commands.length > 0
                      ? Math.round(commands.reduce((acc, cmd) => acc + cmd.confidence, 0) / commands.length)
                      : 0}
                    %
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Language:</span>
                  <span className="font-semibold">{languages.find((l) => l.code === selectedLanguage)?.name}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
