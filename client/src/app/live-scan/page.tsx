"use client"

import { useState, useRef, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Camera, Square, Zap, ArrowLeft, CheckCircle, Brain, Wallet, Sparkles } from "lucide-react"
import Link from "next/link"

export default function LiveScanPage() {
  const [isScanning, setIsScanning] = useState(false)
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)
  const [detectedReceipt, setDetectedReceipt] = useState<any>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const streamRef = useRef<MediaStream | null>(null)

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" }, // Use back camera on mobile
        audio: false,
      })

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        streamRef.current = stream
        setHasPermission(true)
        setIsScanning(true)
      }
    } catch (error) {
      console.error("Camera access denied:", error)
      setHasPermission(false)
    }
  }, [])

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }
    setIsScanning(false)
  }, [])

  const captureReceipt = useCallback(() => {
    // Simulate AI processing
    setDetectedReceipt({
      store: "Big Bazaar",
      total: 12745,
      items: 8,
      confidence: 98.5,
      language: "Hindi/English",
    })

    // Auto-stop scanning after capture
    setTimeout(() => {
      stopCamera()
    }, 1000)
  }, [stopCamera])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" asChild className="bg-white/80">
                <Link href="/upload">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Upload
                </Link>
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Camera className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Live Receipt Scanner</h1>
                  <p className="text-gray-600">Real-time AI-powered receipt detection</p>
                </div>
              </div>
            </div>
            <Badge variant="outline" className="text-green-700 border-green-300 bg-green-50 px-3 py-1">
              <Sparkles className="w-3 h-3 mr-1" />
              Live AI Detection
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Camera Feed */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-5 h-5 text-blue-600" />
                  Live Camera Feed
                </CardTitle>
                <CardDescription>Point your camera at a receipt for instant AI analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden">
                  {!hasPermission && hasPermission !== null && (
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <div className="text-center">
                        <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <h3 className="text-lg font-semibold mb-2">Camera Access Required</h3>
                        <p className="text-gray-300 mb-4">Please allow camera access to scan receipts</p>
                        <Button onClick={startCamera} className="bg-blue-600 hover:bg-blue-700">
                          Enable Camera
                        </Button>
                      </div>
                    </div>
                  )}

                  {hasPermission === null && (
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <div className="text-center">
                        <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <h3 className="text-lg font-semibold mb-2">Ready to Scan</h3>
                        <p className="text-gray-300 mb-4">Start your camera to begin scanning receipts</p>
                        <Button onClick={startCamera} className="bg-green-600 hover:bg-green-700">
                          <Camera className="w-4 h-4 mr-2" />
                          Start Camera
                        </Button>
                      </div>
                    </div>
                  )}

                  <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />

                  {/* Scanning Overlay */}
                  {isScanning && (
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute inset-4 border-2 border-green-400 rounded-lg animate-pulse">
                        <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-green-400"></div>
                        <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-green-400"></div>
                        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-green-400"></div>
                        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-green-400"></div>
                      </div>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        <Brain className="w-4 h-4 inline mr-2" />
                        AI Scanning...
                      </div>
                    </div>
                  )}
                </div>

                {/* Camera Controls */}
                <div className="flex justify-center gap-4 mt-6">
                  {isScanning ? (
                    <>
                      <Button onClick={captureReceipt} size="lg" className="bg-green-600 hover:bg-green-700">
                        <Zap className="w-4 h-4 mr-2" />
                        Capture Receipt
                      </Button>
                      <Button onClick={stopCamera} variant="outline" size="lg">
                        <Square className="w-4 h-4 mr-2" />
                        Stop
                      </Button>
                    </>
                  ) : (
                    <Button onClick={startCamera} size="lg" className="bg-blue-600 hover:bg-blue-700">
                      <Camera className="w-4 h-4 mr-2" />
                      Start Scanning
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detection Results */}
          <div className="space-y-6">
            {detectedReceipt ? (
              <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Receipt Detected!
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Store:</span>
                      <span className="font-semibold">{detectedReceipt.store}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total:</span>
                      <span className="font-semibold text-green-600">₹{detectedReceipt.total.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Items:</span>
                      <span className="font-semibold">{detectedReceipt.items}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Language:</span>
                      <span className="font-semibold">{detectedReceipt.language}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Confidence:</span>
                      <span className="font-semibold text-blue-600">{detectedReceipt.confidence}%</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t space-y-3">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                      <Wallet className="w-4 h-4 mr-2" />
                      Add to Google Wallet
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <Link href="/receipts">View All Receipts</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Detection Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <Brain className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-600">
                      {isScanning ? "Scanning for receipts..." : "Start camera to begin detection"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Instructions */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Scanning Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Hold camera steady over receipt</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Ensure good lighting</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Works with any language</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>AI processes in real-time</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
