import { PropertyCard } from "@/components/property-card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function FeaturedProperties() {
  // Mock data for featured properties
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
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Featured Properties</h2>
          <Button variant="ghost" className="text-[#4E67E5] flex items-center">
            View all <ChevronRight size={16} className="ml-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}
