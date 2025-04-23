import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1A1E2C] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ProptyPlace</h3>
            <p className="text-gray-400 mb-4">
              Revolutionizing real estate with blockchain technology. Buy, sell, and lease properties as NFTs.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/buy" className="text-gray-400 hover:text-white">
                  Buy Property
                </Link>
              </li>
              <li>
                <Link href="/sell" className="text-gray-400 hover:text-white">
                  Sell Property
                </Link>
              </li>
              <li>
                <Link href="/lease" className="text-gray-400 hover:text-white">
                  Lease Property
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-gray-400 hover:text-white">
                  NFT Marketplace
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-400 hover:text-white">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help-center" className="text-gray-400 hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4">Get the latest updates on new properties and features.</p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-[#2A2F3F] border-[#3A3F4F] text-white rounded-l-md"
              />
              <Button className="bg-[#4E67E5] hover:bg-[#3A53D1] rounded-l-none">
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} ProptyPlace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
