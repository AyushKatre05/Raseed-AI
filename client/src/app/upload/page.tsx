"use client"

import { useState, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Upload,
  Camera,
  FileImage,
  Video,
  CheckCircle,
  AlertCircle,
  Loader2,
  X,
  Eye,
  Brain,
  Wallet,
  ArrowRight,
} from "lucide-react"
import { useDropzone } from "react-dropzone"


export default function UploadPage() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [processing, setProcessing] = useState(false)
  const [processed, setProcessed] = useState<any[]>([])
  const [uploadProgress, setUploadProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [stepText, setStepText] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [selectedReceipt, setSelectedReceipt] = useState<any | null>(null)

  const steps = [
    {
      icon: (
        <span className="relative flex items-center justify-center">
          <span className="absolute inline-flex h-12 w-12 rounded-full bg-blue-200 opacity-60 animate-ping" />
          <Upload className="w-7 h-7 text-blue-600 animate-bounce" />
        </span>
      ),
      label: "Uploading"
    },
    {
      icon: (
        <span className="relative flex items-center justify-center">
          <span className="absolute inline-flex h-12 w-12 rounded-full bg-purple-200 opacity-60 animate-pulse" />
          <Brain className="w-7 h-7 text-purple-600 animate-spin-slow" />
        </span>
      ),
      label: "AI Analysis"
    },
    {
      icon: (
        <span className="relative flex items-center justify-center">
          <span className="absolute inline-flex h-12 w-12 rounded-full bg-green-200 opacity-60 animate-pulse" />
          <Wallet className="w-7 h-7 text-green-600 animate-bounce" />
        </span>
      ),
      label: "Wallet Pass"
    },
    {
      icon: (
        <span className="relative flex items-center justify-center">
          <span className="absolute inline-flex h-12 w-12 rounded-full bg-orange-200 opacity-60 animate-pulse" />
          <CheckCircle className="w-7 h-7 text-orange-600 animate-bounce" />
        </span>
      ),
      label: "Done"
    },
  ]

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setUploadedFiles((prev) => [...prev, ...acceptedFiles])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".webp"],
      "video/*": [".mp4", ".mov", ".avi"],
    },
    multiple: true,
  })

  const processReceipts = async () => {
    setProcessing(true)
    setUploadProgress(0)
    setCurrentStep(0)
    setStepText("Uploading to Firebase Storage...")

    // Simulate processing steps
    const stepDetails = [
      { text: "Uploading to Firebase Storage...", progress: 20 },
      { text: "AI Analysis with Gemini...", progress: 50 },
      { text: "Creating Google Wallet Pass...", progress: 80 },
      { text: "Saving to Database...", progress: 100 },
    ]

    for (let i = 0; i < stepDetails.length; i++) {
      setCurrentStep(i)
      setStepText(stepDetails[i].text)
      setUploadProgress(stepDetails[i].progress)
      await new Promise((resolve) => setTimeout(resolve, 1200))
    }

    // Mock processed data
    const mockProcessed = uploadedFiles.map((file, index) => ({
      id: index + 1,
      filename: file.name,
      store: ["Walmart", "Target", "Starbucks", "Amazon"][index % 4],
      total: [127.45, 89.99, 15.8, 234.5][index % 4],
      items: [12, 3, 2, 8][index % 4],
      date: new Date().toISOString().split("T")[0],
      category: ["Groceries", "Shopping", "Restaurants", "Electronics"][index % 4],
      walletPassCreated: true,
    }))

    setProcessed(mockProcessed)
    setProcessing(false)
    setCurrentStep(steps.length - 1)
    setStepText("All done! Ready in dashboard.")
  }

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Upload Receipts</h1>
              <p className="text-gray-600">Upload your receipts for AI-powered analysis</p>
            </div>
            <Badge variant="outline" className="text-green-600 border-green-200">
              <Brain className="w-3 h-3 mr-1" />
              AI-Powered
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Upload Area */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Upload Receipt Images or Videos</CardTitle>
            <CardDescription>
              Supports JPEG, PNG, WebP images and MP4, MOV, AVI videos. Any language supported.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                isDragActive ? "border-blue-400 bg-blue-50" : "border-gray-300 hover:border-gray-400"
              }`}
            >
              <input {...getInputProps()} />
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Upload className="w-8 h-8 text-blue-600 animate-bounce" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {isDragActive ? "Drop files here" : "Drag & drop files here"}
                  </h3>
                  <p className="text-gray-600">or click to browse</p>
                </div>
                <div className="flex justify-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <FileImage className="w-4 h-4" />
                    Images
                  </div>
                  <div className="flex items-center gap-1">
                    <Video className="w-4 h-4" />
                    Videos
                  </div>
                  <div className="flex items-center gap-1">
                    <Camera className="w-4 h-4" />
                    Camera
                  </div>
                </div>
              </div>
            </div>

            {/* Uploaded Files */}
            {uploadedFiles.length > 0 && (
              <div className="mt-6 space-y-3">
                <h4 className="font-medium text-gray-900">Uploaded Files ({uploadedFiles.length})</h4>
                <div className="space-y-2">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg animate-fade-in">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                          {file.type.startsWith("image/") ? (
                            <FileImage className="w-4 h-4 text-blue-600" />
                          ) : (
                            <Video className="w-4 h-4 text-blue-600" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium text-sm">{file.name}</div>
                          <div className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => removeFile(index)}>
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Process Button */}
            {uploadedFiles.length > 0 && !processing && processed.length === 0 && (
              <div className="mt-6">
                <Button onClick={processReceipts} className="w-full text-lg py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Brain className="w-5 h-5 mr-2 animate-spin" />
                  Process with AI ({uploadedFiles.length} files)
                </Button>
              </div>
            )}

            {/* Processing Stepper & Progress */}
            {processing && (
              <div className="mt-10 space-y-8 animate-fade-in">
                <div className="flex items-center justify-center gap-10">
                  {steps.map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center relative">
                      <div className={`w-14 h-14 flex items-center justify-center rounded-full border-4 shadow-lg transition-all duration-300 ${idx < currentStep ? 'border-green-400 bg-green-100' : idx === currentStep ? 'border-blue-500 bg-blue-100' : 'border-gray-200 bg-gray-50'} overflow-visible`}
                        style={{ zIndex: 2 }}>
                        {step.icon}
                      </div>
                      <span className={`mt-3 text-xs font-semibold ${idx === currentStep ? 'text-blue-700' : idx < currentStep ? 'text-green-700' : 'text-gray-400'} transition-all duration-300`}>{step.label}</span>
                      {idx < steps.length - 1 && <div className="absolute left-1/2 top-14 w-1 h-8 -translate-x-1/2 bg-gradient-to-b from-blue-400 to-purple-400 opacity-60" style={{ zIndex: 1 }}></div>}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Progress value={uploadProgress} className="w-full h-3" />
                  <div className="text-center text-base text-blue-700 font-semibold animate-pulse tracking-wide mt-2">{stepText}</div>
                </div>
              </div>
            )}

          </CardContent>
        </Card>

        {/* Results Section */}
        {processed.length > 0 && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-green-700 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" /> Processing Complete!
              </h3>
              <Badge variant="default" className="bg-green-100 text-green-800">
                {processed.length} Processed
              </Badge>
            </div>

            {processed.map((receipt) => (
              <Card key={receipt.id} className="border-green-100 bg-white/90 shadow-md animate-fade-in">
                <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-lg">{receipt.store}</h4>
                      <Badge variant="secondary">{receipt.category}</Badge>
                    </div>
                    <div className="text-2xl font-bold text-green-600">${receipt.total}</div>
                    <div className="text-sm text-gray-600">
                      {receipt.items} items • {receipt.date}
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        AI Processed
                      </div>
                      <div className="flex items-center gap-1 text-blue-600">
                        <Wallet className="w-4 h-4" />
                        Wallet Pass Created
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/80 hover:bg-blue-50 border-blue-200 text-blue-700"
                      onClick={() => {
                        setSelectedReceipt(receipt);
                        setShowModal(true);
                      }}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View Details
                    </Button>
                    <Button variant="outline" size="sm" className="bg-white/80 hover:bg-green-50 border-green-200 text-green-700">
                      <Wallet className="w-4 h-4 mr-1" />
                      Save to Wallet
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        {/* Receipt Details Modal */}
        {showModal && selectedReceipt && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8 relative animate-fade-in">
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Eye className="w-5 h-5 text-blue-600" /> Receipt Details
              </h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Store:</span> {selectedReceipt.store}
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Category:</span> {selectedReceipt.category}
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Date:</span> {selectedReceipt.date}
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Total:</span> ${selectedReceipt.total}
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Items:</span> {selectedReceipt.items}
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Wallet Pass:</span>
                  {selectedReceipt.walletPassCreated ? (
                    <span className="text-green-600 font-semibold flex items-center gap-1"><Wallet className="w-4 h-4" /> Created</span>
                  ) : (
                    <span className="text-gray-400">Not Created</span>
                  )}
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-2">
                <Button variant="outline" onClick={() => setShowModal(false)}>
                  Close
                </Button>
                <Button variant="default" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
        )}

            <div className="flex justify-center mt-6">
              <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700">
                <a href="/dashboard">
                  Go to Dashboard <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        )}

        {/* How It Works Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
            <CardDescription>Our AI-powered receipt processing workflow</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Upload className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-medium">1. Upload</h4>
                <p className="text-sm text-gray-600">Secure upload to Firebase Storage</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-medium">2. AI Analysis</h4>
                <p className="text-sm text-gray-600">Gemini extracts all details</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Wallet className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-medium">3. Wallet Pass</h4>
                <p className="text-sm text-gray-600">Auto-create Google Wallet pass</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-medium">4. Ready</h4>
                <p className="text-sm text-gray-600">Available in dashboard</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
