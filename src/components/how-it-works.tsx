import { Card, CardContent } from "@/components/ui/card"
import { Wallet, Home, FileSignature, ArrowRight } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Wallet,
      title: "Connect Your Wallet",
      description: "Connect your cryptocurrency wallet to access the platform and manage your real estate NFTs.",
    },
    {
      icon: Home,
      title: "Browse Properties",
      description: "Explore our curated selection of tokenized properties available for purchase or lease.",
    },
    {
      icon: FileSignature,
      title: "Complete Transaction",
      description: "Securely buy, sell, or lease property NFTs with smart contracts ensuring transparent transactions.",
    },
    {
      icon: ArrowRight,
      title: "Manage Your Assets",
      description: "Track your real estate portfolio, collect rental income, and trade your property tokens.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ProptyPlace makes real estate investing simple and accessible through blockchain technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="p-6 text-center">
                <div className="bg-[#F0F3FF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon size={24} className="text-[#4E67E5]" />
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
