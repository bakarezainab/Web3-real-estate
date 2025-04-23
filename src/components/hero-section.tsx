import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { Input } from "../"
import { Search } from "lucide-react"


export function HeroSection() {
  return (
    <section className="relative bg-[#F8F9FC] py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Buy, Sell, and Lease Properties as NFTs
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              ProptyPlace is revolutionizing real estate with blockchain technology. Own fractional shares of properties
              and trade them with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#4E67E5] hover:bg-[#3A53D1]">
                Explore Properties
              </Button>
              <Button size="lg" variant="outline" className="border-[#4E67E5] text-[#4E67E5]">
                Learn More
              </Button>
            </div>

            <div className="mt-10 bg-white p-4 rounded-lg shadow-md max-w-md">
              <div className="flex items-center gap-2 mb-4">
                <Button variant="ghost" className="rounded-full px-4 py-2 text-sm font-medium">
                  Buy
                </Button>
                <Button variant="ghost" className="rounded-full px-4 py-2 text-sm font-medium">
                  Rent
                </Button>
                <Button variant="ghost" className="rounded-full px-4 py-2 text-sm font-medium">
                  Sell
                </Button>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="search"
                  placeholder="Search by location, property type, or features..."
                  className="pl-10 pr-4 py-2 w-full rounded-full border-gray-300 focus:border-[#4E67E5] focus:ring-[#4E67E5]"
                />
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="relative">
              <img
                // src="/placeholder.svg?height=500&width=600"
                src="/images/Capture-real-est.jpg"                
                 width={500}
                height={300}
                alt="Modern property as NFT"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-sm text-gray-500">Current Price</div>
                <div className="text-xl font-bold text-gray-900">2.5 ETH</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
