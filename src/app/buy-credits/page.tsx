import CreditPurchase from '../../components/credit-purchase'
import { Zap, Star, TrendingUp } from 'lucide-react'

export default function BuyCreditsPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">Supercharge Your Experience</h1>
      <p className="text-xl text-center mb-10 text-gray-600 dark:text-gray-300">Unlock premium features and boost your productivity with our credit system</p>
      
      <div className="grid md:grid-cols-2 gap-10 mb-10">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <CreditPurchase />
        </div>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-full">
              <Zap className="h-6 w-6 text-purple-600 dark:text-purple-300" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">Instant Power-Up</h3>
              <p className="text-gray-600 dark:text-gray-300">Credits are added to your account immediately after purchase</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
              <Star className="h-6 w-6 text-blue-600 dark:text-blue-300" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">Premium Features</h3>
              <p className="text-gray-600 dark:text-gray-300">Unlock exclusive tools and capabilities with your credits</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
              <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-300" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">Boost Productivity</h3>
              <p className="text-gray-600 dark:text-gray-300">Accomplish more in less time with our credit-powered features</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
        <p>Need help? Contact our support team at support@example.com</p>
      </div>
    </div>
  )
}

