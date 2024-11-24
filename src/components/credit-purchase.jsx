'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Cookie, Minus, Plus, Zap } from 'lucide-react'
import Razorpay from 'razorpay'
import Cookies from 'js-cookie';




const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export default function CreditPurchase() {
  const [quantity, setQuantity] = useState(1)
  const creditsPerPurchase = 1000
  const pricePerPurchase = 50

  const incrementQuantity = () => setQuantity(prev => prev + 1)
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1))

  const totalCredits = quantity * creditsPerPurchase
  const totalPrice = quantity * pricePerPurchase

  const handlePurchase = async () => {
    
   try {
    const response = await fetch('/api/razorpayorder', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: totalPrice * 100 })
    })

    const { orderId } = await response.json()

    if (!orderId) {
      alert('Failed to initiate payment')
      return
    }

    // Initialize Razorpay Checkout
    const options = {
      key: process.env.RAZORPAY_KEY_ID, // Replace with your Razorpay API key
      amount: totalPrice * 100, // Amount in paise
      currency: 'INR',
      name: 'Your Company Name',
      description: `Purchase ${totalCredits} credits`,
      order_id: orderId,
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`)
        var res = fetch(`${process.env.NEXT_PUBLIC_API_URL}/buyCredits?${parseInt(Cookies.get('uid'))}&credits=${totalCredits}`)
        // Optionally, send the payment ID to your backend to verify the payment
      },
      theme: {
        color: '#F37254'
      }
    }
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
   );

   if (!res) {
      alert("Razropay failed to load!!");
      return;
  }

    const rzp = new window.Razorpay(options)
    rzp.open()
   } catch (error) {
    console.log(error)
   }
  }

  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white dark:from-purple-800 dark:to-blue-800">
        <CardTitle className="text-3xl font-bold text-center">Power Up Your Account!</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        <div className="text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300">Get more done with our high-powered credits</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">1000 credits for just ₹50</p>
        </div>
        <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <span className="text-lg font-medium dark:text-gray-200">Credits:</span>
          <div className="flex items-center space-x-2">
            <Zap className="text-yellow-500" />
            <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">{totalCredits}</span>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={decrementQuantity}
            className="h-10 w-10 rounded-full dark:border-gray-600 dark:text-gray-200"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="text-2xl font-bold w-16 text-center dark:text-gray-200">{quantity}</span>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={incrementQuantity}
            className="h-10 w-10 rounded-full dark:border-gray-600 dark:text-gray-200"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <span className="text-lg font-medium dark:text-gray-200">Total Price:</span>
          <span className="text-3xl font-bold text-green-600 dark:text-green-400">₹{totalPrice}</span>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 dark:bg-gray-900 p-6">
        <Button 
          className="w-full text-lg py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 dark:from-purple-700 dark:to-blue-700 dark:hover:from-purple-800 dark:hover:to-blue-800"
          onClick={handlePurchase}
        >
          Boost Your Account Now!
        </Button>
      </CardFooter>
    </Card>
  )
}
