import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/property-card"
import { ArrowRight, Calendar, Key, FileText, Check } from "lucide-react"

export default function LeasePage() {
  // Mock data for lease properties
  const leaseProperties = [
    {
      id: 1,
      title: "Modern Apartment in Downtown",
      location: "New York, NY",
      price: "0.05 ETH/month",
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
      price: "0.12 ETH/month",
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
      price: "0.03 ETH/month",
      image: "/placeholder.svg?height=300&width=400",
      bedrooms: 1,
      bathrooms: 1,
      area: "650 sqft",
      tokenId: "#NFT-9012",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-[#F8F9FC] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Lease Properties with Smart Contracts</h1>
              <p className="text-lg text-gray-600 mb-8">
                Secure, transparent, and efficient property leasing powered by blockchain technology. No more
                complicated paperwork or middlemen.
              </p>
              <Button size="lg" className="bg-[#4E67E5] hover:bg-[#3A53D1]">
                Browse Lease Properties
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Lease Properties */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold">Featured Properties for Lease</h2>
              <Button variant="ghost" className="text-[#4E67E5] flex items-center">
                View all <ArrowRight size={16} className="ml-1" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {leaseProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </section>

        {/* How Leasing Works */}
        <section className="py-16 bg-[#F8F9FC]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">How Leasing Works</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-[#F0F3FF] w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Calendar className="h-8 w-8 text-[#4E67E5]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">1. Find & Reserve</h3>
                <p className="text-gray-600 text-center">
                  Browse available properties and reserve the one you like by connecting your wallet.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-[#F0F3FF] w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <FileText className="h-8 w-8 text-[#4E67E5]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">2. Smart Contract</h3>
                <p className="text-gray-600 text-center">
                  Sign a blockchain-based smart contract that outlines terms, conditions, and payment schedule.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-[#F0F3FF] w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Key className="h-8 w-8 text-[#4E67E5]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">3. Move In</h3>
                <p className="text-gray-600 text-center">
                  Once payment is confirmed, receive digital access keys and move into your new property.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Leasing benefits"
                  className="rounded-lg shadow-xl"
                />
              </div>

              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Benefits of Blockchain Leasing</h2>
                <p className="text-gray-600 mb-8">
                  Our blockchain-based leasing system offers numerous advantages over traditional rental agreements.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-[#F0F3FF] p-2 rounded-full mr-4">
                      <Check className="h-5 w-5 text-[#4E67E5]" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Automated Payments</h3>
                      <p className="text-gray-600 text-sm">
                        Rent payments are automatically processed through smart contracts on predetermined dates.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#F0F3FF] p-2 rounded-full mr-4">
                      <Check className="h-5 w-5 text-[#4E67E5]" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">No Security Deposits</h3>
                      <p className="text-gray-600 text-sm">
                        Smart contracts eliminate the need for large security deposits, using escrow instead.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#F0F3FF] p-2 rounded-full mr-4">
                      <Check className="h-5 w-5 text-[#4E67E5]" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Transparent History</h3>
                      <p className="text-gray-600 text-sm">
                        Complete transparency of property history, previous tenants, and maintenance records.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#F0F3FF] p-2 rounded-full mr-4">
                      <Check className="h-5 w-5 text-[#4E67E5]" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Dispute Resolution</h3>
                      <p className="text-gray-600 text-sm">
                        Built-in arbitration mechanisms to fairly resolve any disputes between parties.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#4E67E5] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Lease Your Next Property?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the future of property leasing with blockchain technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-[#4E67E5] hover:bg-gray-100">
                Find a Property
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-[#3A53D1]">
                List for Lease
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
