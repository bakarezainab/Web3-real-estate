"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PropertyCard } from "@/components/property-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, SlidersHorizontal, X } from "lucide-react"

export default function Marketplace() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [priceRange, setPriceRange] = useState([0.5, 5])

  // Mock data for properties
  const properties = [
    {
      id: 1,
      title: "Modern Apartment in Downtown",
      location: "New York, NY",
      price: "1.2 ETH",
      image: "/placeholder.svg?height=300&width=400",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,200 sqft",
      tokenId: "#NFT-1234",
    },
    {
      id: 2,
      title: "Luxury Villa with Pool",
      location: "Miami, FL",
      price: "3.5 ETH",
      image: "/placeholder.svg?height=300&width=400",
      bedrooms: 4,
      bathrooms: 3,
      area: "3,500 sqft",
      tokenId: "#NFT-5678",
    },
    {
      id: 3,
      title: "Cozy Studio Near University",
      location: "Boston, MA",
      price: "0.8 ETH",
      image: "/placeholder.svg?height=300&width=400",
      bedrooms: 1,
      bathrooms: 1,
      area: "650 sqft",
      tokenId: "#NFT-9012",
    },
    {
      id: 4,
      title: "Beachfront Condo",
      location: "San Diego, CA",
      price: "2.2 ETH",
      image: "/placeholder.svg?height=300&width=400",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,800 sqft",
      tokenId: "#NFT-3456",
    },
    {
      id: 5,
      title: "Mountain View Cabin",
      location: "Denver, CO",
      price: "1.5 ETH",
      image: "/placeholder.svg?height=300&width=400",
      bedrooms: 2,
      bathrooms: 1,
      area: "1,000 sqft",
      tokenId: "#NFT-7890",
    },
    {
      id: 6,
      title: "Downtown Loft",
      location: "Chicago, IL",
      price: "1.8 ETH",
      image: "/placeholder.svg?height=300&width=400",
      bedrooms: 1,
      bathrooms: 1,
      area: "950 sqft",
      tokenId: "#NFT-2345",
    },
    {
      id: 7,
      title: "Suburban Family Home",
      location: "Austin, TX",
      price: "2.7 ETH",
      image: "/placeholder.svg?height=300&width=400",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,500 sqft",
      tokenId: "#NFT-6789",
    },
    {
      id: 8,
      title: "Historic Brownstone",
      location: "Philadelphia, PA",
      price: "2.4 ETH",
      image: "/placeholder.svg?height=300&width=400",
      bedrooms: 3,
      bathrooms: 2,
      area: "2,200 sqft",
      tokenId: "#NFT-0123",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">NFT Property Marketplace</h1>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="search"
              placeholder="Search by location, property type, or features..."
              className="pl-10 pr-4 py-2 w-full rounded-md"
            />
          </div>

          <div className="flex gap-2">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <SlidersHorizontal size={18} />
              Filters
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar - Mobile Drawer */}
          {isFilterOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setIsFilterOpen(false)}>
              <div
                className="absolute right-0 top-0 h-full w-80 bg-white p-4 overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Filters</h2>
                  <Button variant="ghost" size="sm" onClick={() => setIsFilterOpen(false)}>
                    <X size={18} />
                  </Button>
                </div>

                {/* Filter Content - Same as desktop */}
                <div className="space-y-6">
                  {/* Price Range */}
                  <div>
                    <h3 className="font-semibold mb-2">Price Range (ETH)</h3>
                    <Slider
                      defaultValue={[0.5, 5]}
                      max={10}
                      step={0.1}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm">
                      <span>{priceRange[0]} ETH</span>
                      <span>{priceRange[1]} ETH</span>
                    </div>
                  </div>

                  {/* Property Type */}
                  <div>
                    <h3 className="font-semibold mb-2">Property Type</h3>
                    <div className="space-y-2">
                      {["Apartment", "House", "Condo", "Villa", "Land"].map((type) => (
                        <div key={type} className="flex items-center">
                          <Checkbox id={`type-${type}`} />
                          <Label htmlFor={`type-${type}`} className="ml-2">
                            {type}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bedrooms */}
                  <div>
                    <h3 className="font-semibold mb-2">Bedrooms</h3>
                    <div className="flex flex-wrap gap-2">
                      {[1, 2, 3, 4, "5+"].map((num) => (
                        <Button key={num} variant="outline" className="px-3 py-1 h-auto">
                          {num}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Bathrooms */}
                  <div>
                    <h3 className="font-semibold mb-2">Bathrooms</h3>
                    <div className="flex flex-wrap gap-2">
                      {[1, 2, 3, "4+"].map((num) => (
                        <Button key={num} variant="outline" className="px-3 py-1 h-auto">
                          {num}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="font-semibold mb-2">Features</h3>
                    <div className="space-y-2">
                      {["Pool", "Garden", "Garage", "Balcony", "Elevator", "Furnished"].map((feature) => (
                        <div key={feature} className="flex items-center">
                          <Checkbox id={`feature-${feature}`} />
                          <Label htmlFor={`feature-${feature}`} className="ml-2">
                            {feature}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-[#4E67E5] hover:bg-[#3A53D1]">Apply Filters</Button>
                </div>
              </div>
            </div>
          )}

          {/* Filters Sidebar - Desktop */}
          <div className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 bg-white p-4 rounded-lg border border-gray-200">
              <h2 className="text-xl font-bold mb-4">Filters</h2>

              <div className="space-y-6">
                {/* Price Range */}
                <div>
                  <h3 className="font-semibold mb-2">Price Range (ETH)</h3>
                  <Slider
                    defaultValue={[0.5, 5]}
                    max={10}
                    step={0.1}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm">
                    <span>{priceRange[0]} ETH</span>
                    <span>{priceRange[1]} ETH</span>
                  </div>
                </div>

                {/* Property Type */}
                <div>
                  <h3 className="font-semibold mb-2">Property Type</h3>
                  <div className="space-y-2">
                    {["Apartment", "House", "Condo", "Villa", "Land"].map((type) => (
                      <div key={type} className="flex items-center">
                        <Checkbox id={`type-desktop-${type}`} />
                        <Label htmlFor={`type-desktop-${type}`} className="ml-2">
                          {type}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bedrooms */}
                <div>
                  <h3 className="font-semibold mb-2">Bedrooms</h3>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4, "5+"].map((num) => (
                      <Button key={num} variant="outline" className="px-3 py-1 h-auto">
                        {num}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Bathrooms */}
                <div>
                  <h3 className="font-semibold mb-2">Bathrooms</h3>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, "4+"].map((num) => (
                      <Button key={num} variant="outline" className="px-3 py-1 h-auto">
                        {num}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="font-semibold mb-2">Features</h3>
                  <div className="space-y-2">
                    {["Pool", "Garden", "Garage", "Balcony", "Elevator", "Furnished"].map((feature) => (
                      <div key={feature} className="flex items-center">
                        <Checkbox id={`feature-desktop-${feature}`} />
                        <Label htmlFor={`feature-desktop-${feature}`} className="ml-2">
                          {feature}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-[#4E67E5] hover:bg-[#3A53D1]">Apply Filters</Button>
              </div>
            </div>
          </div>

          {/* Property Grid */}
          <div className="flex-grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-1">
                <Button variant="outline" className="w-10 h-10 p-0">
                  &lt;
                </Button>
                <Button variant="outline" className="w-10 h-10 p-0 bg-[#4E67E5] text-white">
                  1
                </Button>
                <Button variant="outline" className="w-10 h-10 p-0">
                  2
                </Button>
                <Button variant="outline" className="w-10 h-10 p-0">
                  3
                </Button>
                <Button variant="outline" className="w-10 h-10 p-0">
                  &gt;
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
