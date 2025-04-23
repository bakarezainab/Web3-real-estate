"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Search, Menu, X } from "lucide-react"
import { ConnectWallet } from "@/components/connect-wallet"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-[#4E67E5]">ProptyPlace</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/buy" className="text-gray-700 hover:text-[#4E67E5]">
              Buy
            </Link>
            <Link href="/sell" className="text-gray-700 hover:text-[#4E67E5]">
              Sell
            </Link>
            <Link href="/lease" className="text-gray-700 hover:text-[#4E67E5]">
              Lease
            </Link>
            <Link href="/marketplace" className="text-gray-700 hover:text-[#4E67E5]">
              Marketplace
            </Link>
          </nav>

          {/* Search and Connect Wallet (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="search"
                placeholder="Search properties..."
                className="pl-10 pr-4 py-2 w-64 rounded-full border-gray-300 focus:border-[#4E67E5] focus:ring-[#4E67E5]"
              />
            </div>
            <ConnectWallet />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 mb-4">
              <Link href="/buy" className="text-gray-700 hover:text-[#4E67E5] px-2 py-1">
                Buy
              </Link>
              <Link href="/sell" className="text-gray-700 hover:text-[#4E67E5] px-2 py-1">
                Sell
              </Link>
              <Link href="/lease" className="text-gray-700 hover:text-[#4E67E5] px-2 py-1">
                Lease
              </Link>
              <Link href="/marketplace" className="text-gray-700 hover:text-[#4E67E5] px-2 py-1">
                Marketplace
              </Link>
            </nav>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="search"
                placeholder="Search properties..."
                className="pl-10 pr-4 py-2 w-full rounded-full border-gray-300 focus:border-[#4E67E5] focus:ring-[#4E67E5]"
              />
            </div>
            <ConnectWallet />
          </div>
        )}
      </div>
    </header>
  )
}
