import { SignUpForm } from "@/components/auth/sign-up-form"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Shield, Zap, Globe } from "lucide-react"
import Link from "next/link"

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative min-h-screen flex">
        {/* Left Side - Sign Up Form */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden text-center mb-8">
              <Link href="/" className="inline-flex items-center">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-2xl shadow-lg">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <div className="ml-4">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    BMSCE
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">Campus Portal</p>
                </div>
              </Link>
            </div>

            {/* Sign Up Card */}
            <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Join BMSCE Community</h2>
                  <p className="text-gray-600 dark:text-gray-400">Create your account to get started</p>
                </div>
                <SignUpForm />
              </CardContent>
            </Card>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © 2024 BMSCE Campus Portal. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Benefits & Info */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-12 xl:px-16">
          <div className="max-w-md">
            {/* Logo */}
            <Link href="/" className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-2xl shadow-lg">
                <GraduationCap className="h-8 w-8" />
              </div>
              <div className="ml-4">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  BMSCE
                </h1>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Campus Portal</p>
              </div>
            </Link>

            {/* Hero Content */}
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Start Your
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Academic Journey
              </span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Join thousands of students who trust BMSCE Campus Portal for their academic needs.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">Secure & Private Data Protection</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                  <Zap className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">Real-time Updates & Notifications</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-pink-100 dark:bg-pink-900/30 p-2 rounded-lg">
                  <Globe className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">Access Anywhere, Anytime</span>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">5000+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">200+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Faculty</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Departments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
