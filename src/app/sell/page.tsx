import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Check, ArrowRight } from "lucide-react"

export default function SellPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-[#F8F9FC] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">List Your Property as an NFT</h1>
              <p className="text-lg text-gray-600 mb-8">
                Tokenize your real estate and sell it on the blockchain. Reach a global audience of buyers and
                investors.
              </p>
              <Button size="lg" className="bg-[#4E67E5] hover:bg-[#3A53D1]">
                Get Started
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="bg-[#F0F3FF] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-[#4E67E5]">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Submit Your Property</h3>
                <p className="text-gray-600 mb-4">
                  Fill out our form with details about your property, including photos, documents, and pricing
                  information.
                </p>
                <div className="hidden md:block absolute top-8 right-0 w-1/2 h-1 border-t-2 border-dashed border-[#4E67E5]"></div>
              </div>

              <div className="relative">
                <div className="bg-[#F0F3FF] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-[#4E67E5]">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Verification & Tokenization</h3>
                <p className="text-gray-600 mb-4">
                  Our team verifies your property details and creates an NFT representing ownership of your property.
                </p>
                <div className="hidden md:block absolute top-8 right-0 w-1/2 h-1 border-t-2 border-dashed border-[#4E67E5]"></div>
              </div>

              <div>
                <div className="bg-[#F0F3FF] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-[#4E67E5]">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">List & Sell</h3>
                <p className="text-gray-600 mb-4">
                  Your property is listed on our marketplace, where buyers can purchase it in full or as fractional
                  shares.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Listing Form */}
        <section className="py-16 bg-[#F8F9FC]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">List Your Property</h2>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <form>
                  <div className="space-y-6">
                    {/* Property Details */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Property Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="property-title">Property Title</Label>
                          <Input id="property-title" placeholder="e.g. Modern Apartment in Downtown" />
                        </div>
                        <div>
                          <Label htmlFor="property-type">Property Type</Label>
                          <Select>
                            <SelectTrigger id="property-type">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="apartment">Apartment</SelectItem>
                              <SelectItem value="house">House</SelectItem>
                              <SelectItem value="condo">Condo</SelectItem>
                              <SelectItem value="villa">Villa</SelectItem>
                              <SelectItem value="land">Land</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="bedrooms">Bedrooms</Label>
                          <Select>
                            <SelectTrigger id="bedrooms">
                              <SelectValue placeholder="Select number" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1</SelectItem>
                              <SelectItem value="2">2</SelectItem>
                              <SelectItem value="3">3</SelectItem>
                              <SelectItem value="4">4</SelectItem>
                              <SelectItem value="5+">5+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="bathrooms">Bathrooms</Label>
                          <Select>
                            <SelectTrigger id="bathrooms">
                              <SelectValue placeholder="Select number" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1</SelectItem>
                              <SelectItem value="2">2</SelectItem>
                              <SelectItem value="3">3</SelectItem>
                              <SelectItem value="4+">4+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="area">Area (sqft)</Label>
                          <Input id="area" type="number" placeholder="e.g. 1200" />
                        </div>
                        <div>
                          <Label htmlFor="price">Price (ETH)</Label>
                          <Input id="price" type="number" placeholder="e.g. 2.5" />
                        </div>
                      </div>
                    </div>

                    {/* Location */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Location</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                          <Label htmlFor="address">Address</Label>
                          <Input id="address" placeholder="Street address" />
                        </div>
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input id="city" placeholder="City" />
                        </div>
                        <div>
                          <Label htmlFor="state">State</Label>
                          <Input id="state" placeholder="State/Province" />
                        </div>
                        <div>
                          <Label htmlFor="zip">Zip Code</Label>
                          <Input id="zip" placeholder="Zip/Postal code" />
                        </div>
                        <div>
                          <Label htmlFor="country">Country</Label>
                          <Select>
                            <SelectTrigger id="country">
                              <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="us">United States</SelectItem>
                              <SelectItem value="ca">Canada</SelectItem>
                              <SelectItem value="uk">United Kingdom</SelectItem>
                              <SelectItem value="au">Australia</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Description</h3>
                      <div>
                        <Label htmlFor="description">Property Description</Label>
                        <Textarea id="description" placeholder="Describe your property in detail..." className="h-32" />
                      </div>
                    </div>

                    {/* Photos */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Photos</h3>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-600">Drag and drop your photos here, or click to browse</p>
                        <p className="mt-1 text-xs text-gray-500">(Max 10 photos, 5MB each)</p>
                        <Button variant="outline" className="mt-4">
                          Upload Photos
                        </Button>
                      </div>
                    </div>

                    {/* Documents */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Legal Documents</h3>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-600">
                          Upload property deed, title, and other legal documents
                        </p>
                        <p className="mt-1 text-xs text-gray-500">(PDF format preferred)</p>
                        <Button variant="outline" className="mt-4">
                          Upload Documents
                        </Button>
                      </div>
                    </div>

                    <Button className="w-full bg-[#4E67E5] hover:bg-[#3A53D1] py-6 text-lg">Submit Property</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Selling with ProptyPlace</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-[#F0F3FF] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-[#4E67E5]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Global Reach</h3>
                <p className="text-gray-600">Access buyers from around the world, not just your local market.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-[#F0F3FF] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-[#4E67E5]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Faster Sales</h3>
                <p className="text-gray-600">Sell your property in days or weeks, not months or years.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-[#F0F3FF] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-[#4E67E5]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Lower Fees</h3>
                <p className="text-gray-600">Save on traditional real estate commissions and closing costs.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-[#F0F3FF] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-[#4E67E5]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Fractional Sales</h3>
                <p className="text-gray-600">Option to sell portions of your property to multiple investors.</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" className="border-[#4E67E5] text-[#4E67E5] flex items-center mx-auto">
                Learn more about our selling process <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
