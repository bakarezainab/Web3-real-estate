"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Wallet } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function ConnectWallet() {
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const connectWallet = async (walletType: string) => {
    // This is a mock implementation
    // In a real app, you would use ethers.js or web3.js to connect to the wallet
    try {
      console.log(`Connecting to ${walletType}...`)

      // Mock successful connection
      const mockAddress = "0x71C7656EC7ab88b098defB751B7401B5f6d8976F"
      setWalletAddress(mockAddress)
      setIsConnected(true)
      setIsDialogOpen(false)
    } catch (error) {
      console.error("Error connecting wallet:", error)
    }
  }

  const disconnectWallet = () => {
    setIsConnected(false)
    setWalletAddress("")
  }

  return (
    <>
      {isConnected ? (
        <Button
          variant="outline"
          className="flex items-center space-x-2 border-[#4E67E5] text-[#4E67E5]"
          onClick={disconnectWallet}
        >
          <Wallet size={16} />
          <span className="truncate max-w-[100px]">
            {walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}
          </span>
        </Button>
      ) : (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#4E67E5] hover:bg-[#3A53D1]">Connect Wallet</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Connect your wallet</DialogTitle>
              <DialogDescription>Connect your wallet to access all features of ProptyPlace.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Button
                variant="outline"
                className="flex justify-between items-center w-full p-4 h-auto"
                onClick={() => connectWallet("MetaMask")}
              >
                <span>MetaMask</span>
                <img src="/placeholder.svg?height=24&width=24" alt="MetaMask logo" className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                className="flex justify-between items-center w-full p-4 h-auto"
                onClick={() => connectWallet("WalletConnect")}
              >
                <span>WalletConnect</span>
                <img src="/placeholder.svg?height=24&width=24" alt="WalletConnect logo" className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                className="flex justify-between items-center w-full p-4 h-auto"
                onClick={() => connectWallet("Coinbase Wallet")}
              >
                <span>Coinbase Wallet</span>
                <img src="/placeholder.svg?height=24&width=24" alt="Coinbase Wallet logo" className="h-6 w-6" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
