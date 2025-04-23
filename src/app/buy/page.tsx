import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PropertyCard } from "@/components/property-card"
import { Search, MapPin, ArrowRight } from "lucide-react"

export default function BuyPage() {
  // Mock data for featured properties
  const featuredProperties = [
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
  ]

  // Mock data for popular cities
  const popularCities = [
    { name: "New York", count: 156, image: "/placeholder.svg?height=200&width=300" },
    { name: "Los Angeles", count: 143, image: "/placeholder.svg?height=200&width=300" },
    { name: "Miami", count: 112, image: "/placeholder.svg?height=200&width=300" },
    { name: "Chicago", count: 98, image: "/placeholder.svg?height=200&width=300" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-[#F8F9FC] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Find Your Dream Property as an NFT</h1>
              <p className="text-lg text-gray-600 mb-8">
                Browse through thousands of tokenized properties and find your perfect match. Own it fully or as a
                fractional share.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <Button variant="default" className="rounded-full px-6 py-2 text-sm font-medium bg-[#4E67E5]">
                    Buy
                  </Button>
                  <Button variant="ghost" className="rounded-full px-6 py-2 text-sm font-medium">
                    Rent
                  </Button>
                  <Button variant="ghost" className="rounded-full px-6 py-2 text-sm font-medium">
                    Sell
                  </Button>
                </div>

                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    type="search"
                    placeholder="Enter a location, city, or address..."
                    className="pl-10 pr-4 py-6 w-full rounded-md border-gray-300 focus:border-[#4E67E5] focus:ring-[#4E67E5]"
                  />
                  <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#4E67E5] hover:bg-[#3A53D1]">
                    <Search size={18} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold">Featured Properties for Sale</h2>
              <Button variant="ghost" className="text-[#4E67E5] flex items-center">
                View all <ArrowRight size={16} className="ml-1" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </section>

        {/* Popular Cities */}
        <section className="py-16 bg-[#F8F9FC]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Popular Cities</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularCities.map((city, index) => (
                <div key={index} className="relative rounded-lg overflow-hidden group cursor-pointer">
                  <img
                    src={city.image || "/placeholder.svg"}
                    alt={city.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-bold">{city.name}</h3>
                    <p>{city.count} Properties</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Buy with Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Buy with ProptyPlace</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-[#F0F3FF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#4E67E5]"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Secure Ownership</h3>
                <p className="text-gray-600">
                  Blockchain technology ensures your property ownership is secure, transparent, and immutable.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-[#F0F3FF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#4E67E5]"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Fractional Ownership</h3>
                <p className="text-gray-600">
                  Own a percentage of high-value properties that would otherwise be out of reach.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-[#F0F3FF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#4E67E5]"
                  >
                    <polyline points="1 4 1 10 7 10" />
                    <polyline points="23 20 23 14 17 14" />
                    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Instant Transactions</h3>
                <p className="text-gray-600">
                  Buy and sell properties in minutes, not months, with our streamlined blockchain process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#4E67E5] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Find Your Dream Property?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already buying properties as NFTs on our platform.
            </p>
            <Button size="lg" className="bg-white text-[#4E67E5] hover:bg-gray-100">
              Start Browsing
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
