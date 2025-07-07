"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Receipt,
  Calendar,
  MapPin,
  DollarSign,
  ShoppingCart,
  Download,
  Share,
  Edit,
  Trash2,
  Wallet,
  Brain,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function ReceiptDetailPage() {
  const params = useParams()
  const receiptId = params.id

  // Mock receipt data - in real app this would be fetched based on ID
  const receipt = {
    id: receiptId,
    store: "Walmart Supercenter",
    address: "123 Main St, Anytown, ST 12345",
    amount: 127.45,
    tax: 8.95,
    subtotal: 118.5,
    date: "2024-01-15T14:30:00",
    items: [
      { name: "Organic Bananas", quantity: 2, price: 3.98, category: "Produce" },
      { name: "Whole Milk - 1 Gallon", quantity: 1, price: 4.29, category: "Dairy" },
      { name: "Bread - Whole Wheat", quantity: 2, price: 5.98, category: "Bakery" },
      { name: "Ground Beef - 1lb", quantity: 1, price: 6.99, category: "Meat" },
      { name: "Pasta - Spaghetti", quantity: 3, price: 8.97, category: "Pantry" },
      { name: "Tomato Sauce", quantity: 2, price: 3.98, category: "Pantry" },
      { name: "Cheese - Cheddar", quantity: 1, price: 4.99, category: "Dairy" },
      { name: "Apples - Gala", quantity: 1, price: 2.99, category: "Produce" },
      { name: "Chicken Breast", quantity: 1, price: 8.99, category: "Meat" },
      { name: "Rice - Jasmine", quantity: 1, price: 3.99, category: "Pantry" },
      { name: "Yogurt - Greek", quantity: 2, price: 7.98, category: "Dairy" },
      { name: "Spinach - Fresh", quantity: 1, price: 2.99, category: "Produce" },
    ],
    category: "Groceries",
    paymentMethod: "Credit Card",
    walletPass: true,
    aiProcessed: true,
    confidence: 98.5,
    originalImage: "/placeholder.svg?height=600&width=400",
  }

  const categoryTotals = receipt.items.reduce(
    (acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + item.price
      return acc
    },
    {} as Record<string, number>,
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="/receipts">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Receipts
                </Link>
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{receipt.store}</h1>
                <p className="text-gray-600">Receipt Details</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </Button>
              <Button variant="outline" size="sm">
                <Share className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Receipt Overview */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl">{receipt.store}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {receipt.address}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-600">${receipt.amount}</div>
                    <div className="text-sm text-gray-600">
                      {new Date(receipt.date).toLocaleDateString()} at{" "}
                      {new Date(receipt.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <ShoppingCart className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                    <div className="font-semibold">{receipt.items.length}</div>
                    <div className="text-sm text-gray-600">Items</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <DollarSign className="w-6 h-6 mx-auto mb-2 text-green-600" />
                    <div className="font-semibold">${receipt.subtotal}</div>
                    <div className="text-sm text-gray-600">Subtotal</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Receipt className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                    <div className="font-semibold">${receipt.tax}</div>
                    <div className="text-sm text-gray-600">Tax</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Calendar className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                    <div className="font-semibold">{receipt.category}</div>
                    <div className="text-sm text-gray-600">Category</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Items List */}
            <Card>
              <CardHeader>
                <CardTitle>Items Purchased</CardTitle>
                <CardDescription>Detailed breakdown of all items</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="items" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="items">All Items</TabsTrigger>
                    <TabsTrigger value="categories">By Category</TabsTrigger>
                  </TabsList>

                  <TabsContent value="items" className="space-y-3 mt-4">
                    {receipt.items.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-gray-600">
                            Qty: {item.quantity} • {item.category}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">${item.price}</div>
                          {item.quantity > 1 && (
                            <div className="text-sm text-gray-600">${(item.price / item.quantity).toFixed(2)} each</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="categories" className="space-y-3 mt-4">
                    {Object.entries(categoryTotals).map(([category, total]) => (
                      <div key={category} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <Badge variant="secondary">{category}</Badge>
                          <span className="text-sm text-gray-600">
                            {receipt.items.filter((item) => item.category === category).length} items
                          </span>
                        </div>
                        <div className="font-semibold">${total.toFixed(2)}</div>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Processing Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-purple-600" />
                  AI Processing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Receipt Parsed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Items Extracted</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Categories Assigned</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Wallet Pass Created</span>
                </div>
                <Separator />
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{receipt.confidence}%</div>
                  <div className="text-sm text-gray-600">Confidence Score</div>
                </div>
              </CardContent>
            </Card>

            {/* Google Wallet Integration */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-blue-600" />
                  Google Wallet
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {receipt.walletPass ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">Pass Created</span>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="font-medium text-blue-900">{receipt.store}</div>
                      <div className="text-sm text-blue-700">
                        ${receipt.amount} • {receipt.items.length} items
                      </div>
                      <div className="text-xs text-blue-600 mt-1">{new Date(receipt.date).toLocaleDateString()}</div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      View in Wallet
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-orange-600">
                      <AlertCircle className="w-4 h-4" />
                      <span className="text-sm">Pass Pending</span>
                    </div>
                    <Button size="sm" className="w-full">
                      Create Wallet Pass
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Receipt Image */}
            <Card>
              <CardHeader>
                <CardTitle>Original Receipt</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-[3/4] bg-gray-100 rounded-lg flex items-center justify-center">
                  <Receipt className="w-16 h-16 text-gray-400" />
                </div>
                <Button variant="outline" size="sm" className="w-full mt-3 bg-transparent">
                  <Download className="w-4 h-4 mr-2" />
                  Download Image
                </Button>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Receipt
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                  <Share className="w-4 h-4 mr-2" />
                  Share Receipt
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                  <Download className="w-4 h-4 mr-2" />
                  Export Data
                </Button>
                <Separator />
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start text-red-600 hover:text-red-700 bg-transparent"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Receipt
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
