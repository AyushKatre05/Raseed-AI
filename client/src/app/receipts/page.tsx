"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Receipt, Search, Eye, Download, MoreHorizontal, SortAsc, SortDesc, Grid, List, Wallet } from "lucide-react"
import Link from "next/link"

export default function ReceiptsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list")
  const [sortBy, setSortBy] = useState("date")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Mock receipt data
  const receipts = [
    {
      id: 1,
      store: "Walmart Supercenter",
      amount: 127.45,
      date: "2024-01-15",
      items: 12,
      category: "Groceries",
      image: "/placeholder.svg?height=200&width=300",
      walletPass: true,
      status: "processed",
    },
    {
      id: 2,
      store: "Starbucks Coffee",
      amount: 15.8,
      date: "2024-01-15",
      items: 2,
      category: "Restaurants",
      image: "/placeholder.svg?height=200&width=300",
      walletPass: true,
      status: "processed",
    },
    {
      id: 3,
      store: "Amazon.com",
      amount: 89.99,
      date: "2024-01-14",
      items: 3,
      category: "Shopping",
      image: "/placeholder.svg?height=200&width=300",
      walletPass: true,
      status: "processed",
    },
    {
      id: 4,
      store: "Shell Gas Station",
      amount: 45.2,
      date: "2024-01-14",
      items: 1,
      category: "Transportation",
      image: "/placeholder.svg?height=200&width=300",
      walletPass: false,
      status: "processing",
    },
    {
      id: 5,
      store: "Target",
      amount: 234.67,
      date: "2024-01-13",
      items: 8,
      category: "Shopping",
      image: "/placeholder.svg?height=200&width=300",
      walletPass: true,
      status: "processed",
    },
    {
      id: 6,
      store: "McDonald's",
      amount: 12.45,
      date: "2024-01-13",
      items: 3,
      category: "Restaurants",
      image: "/placeholder.svg?height=200&width=300",
      walletPass: true,
      status: "processed",
    },
  ]

  const categories = ["all", "Groceries", "Restaurants", "Shopping", "Transportation", "Entertainment"]

  const filteredReceipts = receipts
    .filter((receipt) => {
      const matchesSearch = receipt.store.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "all" || receipt.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      let comparison = 0
      switch (sortBy) {
        case "date":
          comparison = new Date(a.date).getTime() - new Date(b.date).getTime()
          break
        case "amount":
          comparison = a.amount - b.amount
          break
        case "store":
          comparison = a.store.localeCompare(b.store)
          break
        default:
          comparison = 0
      }
      return sortOrder === "asc" ? comparison : -comparison
    })

  const totalAmount = filteredReceipts.reduce((sum, receipt) => sum + receipt.amount, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Receipt Management</h1>
              <p className="text-gray-600">Organize and manage all your receipts</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export All
              </Button>
              <Button asChild>
                <Link href="/upload">
                  <Receipt className="w-4 h-4 mr-2" />
                  Add Receipt
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Filters and Controls */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-3 flex-1">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search receipts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Category Filter */}
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">Date</SelectItem>
                    <SelectItem value="amount">Amount</SelectItem>
                    <SelectItem value="store">Store</SelectItem>
                  </SelectContent>
                </Select>

                {/* Sort Order */}
                <Button variant="outline" size="sm" onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
                  {sortOrder === "asc" ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
                </Button>
              </div>

              <div className="flex items-center gap-2">
                {/* View Mode Toggle */}
                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-r-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-l-none"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Results Summary */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <div className="text-sm text-gray-600">
                Showing {filteredReceipts.length} of {receipts.length} receipts
              </div>
              <div className="text-sm font-medium">Total: ${totalAmount.toLocaleString()}</div>
            </div>
          </CardContent>
        </Card>

        {/* Receipts Display */}
        {viewMode === "list" ? (
          <div className="space-y-4">
            {filteredReceipts.map((receipt) => (
              <Card key={receipt.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Receipt className="w-8 h-8 text-gray-400" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-lg">{receipt.store}</h3>
                          <Badge variant="secondary">{receipt.category}</Badge>
                          {receipt.walletPass && (
                            <Badge variant="outline" className="text-green-600 border-green-200">
                              <Wallet className="w-3 h-3 mr-1" />
                              Wallet
                            </Badge>
                          )}
                        </div>
                        <div className="text-2xl font-bold text-green-600">${receipt.amount}</div>
                        <div className="text-sm text-gray-600">
                          {receipt.items} items • {new Date(receipt.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/receipts/${receipt.id}`}>
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredReceipts.map((receipt) => (
              <Card key={receipt.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="p-4">
                  <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    <Receipt className="w-12 h-12 text-gray-400" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base truncate">{receipt.store}</CardTitle>
                      {receipt.walletPass && <Wallet className="w-4 h-4 text-green-600" />}
                    </div>
                    <div className="text-xl font-bold text-green-600">${receipt.amount}</div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{receipt.items} items</span>
                      <span>{new Date(receipt.date).toLocaleDateString()}</span>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {receipt.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                      <Link href={`/receipts/${receipt.id}`}>
                        <Eye className="w-3 h-3 mr-1" />
                        View
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {filteredReceipts.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Receipt className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No receipts found</h3>
              <p className="text-gray-600 mb-4">
                {searchQuery || selectedCategory !== "all"
                  ? "Try adjusting your search or filters"
                  : "Upload your first receipt to get started"}
              </p>
              <Button asChild>
                <Link href="/upload">
                  <Receipt className="w-4 h-4 mr-2" />
                  Upload Receipt
                </Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
