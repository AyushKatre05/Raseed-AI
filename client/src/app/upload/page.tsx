"use client"

import { useState, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
} from "lucide-react"
import { useDropzone } from "react-dropzone"

export default function UploadPage() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [processing, setProcessing] = useState(false)
  const [processed, setProcessed] = useState<any[]>([])
  const [uploadProgress, setUploadProgress] = useState(0)

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

    // Simulate processing steps
    const steps = [
      { name: "Uploading to Firebase Storage", progress: 20 },
      { name: "AI Analysis with Gemini", progress: 50 },
      { name: "Extracting Receipt Data", progress: 70 },
      { name: "Creating Google Wallet Pass", progress: 90 },
      { name: "Saving to Database", progress: 100 },
    ]

    for (const step of steps) {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setUploadProgress(step.progress)
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
  }

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-gray-50">
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

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Tabs defaultValue="upload" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upload">Upload & Process</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="space-y-6">
            {/* Upload Area */}
            <Card>
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
                        <Upload className="w-8 h-8 text-blue-600" />
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
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
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
                    <Button onClick={processReceipts} className="w-full" size="lg">
                      <Brain className="w-4 h-4 mr-2" />
                      Process with AI ({uploadedFiles.length} files)
                    </Button>
                  </div>
                )}

                {/* Processing Status */}
                {processing && (
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span className="font-medium">Processing receipts...</span>
                    </div>
                    <Progress value={uploadProgress} className="w-full" />
                    <div className="text-sm text-gray-600">
                      {uploadProgress < 20 && "Uploading to Firebase Storage..."}
                      {uploadProgress >= 20 && uploadProgress < 50 && "AI Analysis with Gemini..."}
                      {uploadProgress >= 50 && uploadProgress < 70 && "Extracting Receipt Data..."}
                      {uploadProgress >= 70 && uploadProgress < 90 && "Creating Google Wallet Pass..."}
                      {uploadProgress >= 90 && "Saving to Database..."}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Processing Steps */}
            <Card>
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
          </TabsContent>

          <TabsContent value="results" className="space-y-6">
            {processed.length > 0 ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Processing Complete!</h3>
                  <Badge variant="default" className="bg-green-100 text-green-800">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {processed.length} Processed
                  </Badge>
                </div>

                {processed.map((receipt) => (
                  <Card key={receipt.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
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
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-1" />
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <div className="flex justify-center">
                  <Button asChild>
                    <a href="/dashboard">View in Dashboard</a>
                  </Button>
                </div>
              </div>
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No Results Yet</h3>
                  <p className="text-gray-600 mb-4">Upload and process some receipts to see results here.</p>
                  <Button variant="outline">Go to Upload Tab</Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
