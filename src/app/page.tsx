import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProperties } from "@/components/featured-properties"
import { HowItWorks } from "@/components/how-it-works"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1A1E2C]">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProperties />
        <HowItWorks />

        {/* CTA Section */}
        <section className="py-16 bg-[#F8F9FC]">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already buying, selling, and leasing properties as NFTs on our platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-[#4E67E5] hover:bg-[#3A53D1]">
                Explore Properties
              </Button>
              <Button size="lg" variant="outline" className="border-[#4E67E5] text-[#4E67E5]">
                List Your Property
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
