"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Bed, Bath, Square, EclipseIcon as Ethereum } from "lucide-react"

interface PropertyCardProps {
  property: {
    id: number
    title: string
    location: string
    price: string
    image: string
    bedrooms: number
    bathrooms: number
    area: string
    tokenId: string
  }
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <img src={property.image || "/placeholder.svg"} alt={property.title} className="w-full h-48 object-cover" />
        <button
          className={`absolute top-3 right-3 p-2 rounded-full ${isFavorite ? "bg-red-100" : "bg-white"}`}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart size={18} className={isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"} />
        </button>
        <div className="absolute bottom-3 left-3 bg-[#4E67E5] text-white text-xs px-2 py-1 rounded">
          {property.tokenId}
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex items-center mb-2">
          <Ethereum size={16} className="text-[#4E67E5] mr-1" />
          <span className="font-bold text-lg">{property.price}</span>
        </div>
        <h3 className="font-bold text-lg mb-1 line-clamp-1">{property.title}</h3>
        <p className="text-gray-500 text-sm mb-3">{property.location}</p>

        <div className="flex justify-between text-sm text-gray-600">
          <div className="flex items-center">
            <Bed size={16} className="mr-1" />
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center">
            <Bath size={16} className="mr-1" />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center">
            <Square size={16} className="mr-1" />
            <span>{property.area}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Link href={`/property/${property.id}`} className="w-full">
          <Button variant="outline" className="w-full border-[#4E67E5] text-[#4E67E5]">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
