"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

// This is a mock implementation for the demo
// In a real app, you would use your actual Stripe publishable key
const stripePromise = loadStripe("pk_test_mock_key")

interface StripeProps {
  children: React.ReactNode
  options: {
    mode: "payment" | "subscription"
    amount: number
    currency: string
  }
  className?: string
}

export function Stripe({ children, options, className }: StripeProps) {
  const [clientSecret, setClientSecret] = useState("")

  useEffect(() => {
    // This is a mock implementation
    // In a real app, you would make an API call to your server to create a PaymentIntent
    console.log("Creating mock payment intent with options:", options)

    // Simulate API response
    setTimeout(() => {
      setClientSecret("mock_client_secret")
    }, 500)
  }, [options])

  return (
    <div className={className}>
      {clientSecret && (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret,
            appearance: {
              theme: "stripe",
            },
          }}
        >
          {children}
        </Elements>
      )}
      {!clientSecret && (
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#4E67E5]"></div>
        </div>
      )}
    </div>
  )
}
