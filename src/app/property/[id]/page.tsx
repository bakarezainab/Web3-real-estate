"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Bed, Bath, Square, MapPin, EclipseIcon as Ethereum, FileText, Clock, Heart, Share2 } from "lucide-react"

export default function PropertyDetail({ params }: { params: { id: string } }) {
  const [isFavorite, setIsFavorite] = useState(false)

  // Mock property data - in a real app, you would fetch this based on the ID
  const property = {
    id: params.id,
    title: "Modern Apartment in Downtown",
    description:
      "This beautiful modern apartment is located in the heart of downtown. It features high ceilings, large windows, and a spacious open floor plan. The kitchen is equipped with high-end appliances and the bathroom has been recently renovated.",
    location: "123 Main St, New York, NY",
    price: "1.2 ETH",
    image: "/placeholder.svg?height=500&width=800",
    images: [
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
    ],
    bedrooms: 2,
    bathrooms: 2,
    area: "1,200 sqft",
    tokenId: "NFT-1234",
    owner: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    history: [
      { date: "Jan 15, 2023", price: "1.0 ETH", action: "Listed" },
      { date: "Feb 20, 2023", price: "1.1 ETH", action: "Price Change" },
      { date: "Apr 05, 2023", price: "1.2 ETH", action: "Price Change" },
    ],
    amenities: [
      "Air Conditioning",
      "Heating",
      "Washer/Dryer",
      "Dishwasher",
      "Parking",
      "Gym",
      "Swimming Pool",
      "Elevator",
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Property Images and Details */}
          <div className="lg:w-2/3">
            <div className="relative mb-6">
              <img
                src={property.image || "/placeholder.svg"}
                alt={property.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <button
                  className={`p-2 rounded-full ${isFavorite ? "bg-red-100" : "bg-white"}`}
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart size={20} className={isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"} />
                </button>
                <button className="p-2 rounded-full bg-white">
                  <Share2 size={20} className="text-gray-400" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 flex space-x-2">
                {property.images.map((img, index) => (
                  <img
                    key={index}
                    src={img || "/placeholder.svg"}
                    alt={`Property thumbnail ${index + 1}`}
                    className="w-16 h-16 object-cover rounded border-2 border-white cursor-pointer"
                  />
                ))}
              </div>
            </div>

            <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin size={18} className="mr-1" />
              <span>{property.location}</span>
            </div>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center">
                <Bed size={20} className="mr-2 text-[#4E67E5]" />
                <span>{property.bedrooms} Bedrooms</span>
              </div>
              <div className="flex items-center">
                <Bath size={20} className="mr-2 text-[#4E67E5]" />
                <span>{property.bathrooms} Bathrooms</span>
              </div>
              <div className="flex items-center">
                <Square size={20} className="mr-2 text-[#4E67E5]" />
                <span>{property.area}</span>
              </div>
              <div className="flex items-center">
                <FileText size={20} className="mr-2 text-[#4E67E5]" />
                <span>Token ID: {property.tokenId}</span>
              </div>
            </div>

            <Tabs defaultValue="description">
              <TabsList className="mb-4">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="history">Transaction History</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">{property.description}</p>
              </TabsContent>

              <TabsContent value="amenities" className="p-4 bg-gray-50 rounded-lg">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-[#4E67E5] rounded-full mr-2"></div>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="history" className="p-4 bg-gray-50 rounded-lg">
                <div className="space-y-4">
                  {property.history.map((item, index) => (
                    <div key={index} className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center">
                        <Clock size={18} className="mr-2 text-[#4E67E5]" />
                        <span>{item.date}</span>
                      </div>
                      <div>{item.action}</div>
                      <div className="font-semibold flex items-center">
                        <Ethereum size={16} className="mr-1" />
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Purchase/Lease Info */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 bg-white p-6 rounded-lg border border-gray-200 shadow-md">
              <div className="flex items-center mb-4">
                <Ethereum size={24} className="text-[#4E67E5] mr-2" />
                <span className="text-3xl font-bold">{property.price}</span>
              </div>

              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-1">Current Owner</div>
                <div className="text-gray-700 font-medium truncate">{property.owner}</div>
              </div>

              <div className="space-y-4 mb-6">
                <Button className="w-full bg-[#4E67E5] hover:bg-[#3A53D1] text-lg py-6">Buy Now</Button>
                <Button variant="outline" className="w-full border-[#4E67E5] text-[#4E67E5] text-lg py-6">
                  Make Offer
                </Button>
                <Button variant="outline" className="w-full border-[#4E67E5] text-[#4E67E5] text-lg py-6">
                  Lease Property
                </Button>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Property Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Property Type:</span>
                    <span>Apartment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Year Built:</span>
                    <span>2018</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Blockchain:</span>
                    <span>Ethereum</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Smart Contract:</span>
                    <span className="truncate">0x1234...5678</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
