"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, User, Lock, Loader2, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function SignInForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    usn: "",
    password: "",
    rememberMe: false,
  })
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Basic validation
    if (!formData.usn || !formData.password) {
      setError("Please fill in all required fields")
      setIsLoading(false)
      return
    }

    // USN format validation
    const usnPattern = /^[0-9]{1}[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{3}$/
    if (!usnPattern.test(formData.usn.toUpperCase())) {
      setError("Please enter a valid USN format")
      setIsLoading(false)
      return
    }

    // Simulate authentication
    setTimeout(() => {
      // Simulate potential error for demo
      if (formData.usn === "ERROR123") {
        setError("Invalid credentials. Please check your USN and password.")
        setIsLoading(false)
        return
      }

      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (error) setError("") // Clear error when user starts typing
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Alert variant="destructive" className="border-red-300 bg-red-100 dark:border-red-700 dark:bg-red-900/50">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="text-red-800 dark:text-red-200">{error}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="usn" className="text-sm font-semibold text-blue-900">
            USN <span className="text-red-500">*</span>
          </Label>
          <div className="relative group">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-blue-900 transition-colors" />
            <Input
              id="usn"
              type="text"
              placeholder="Enter your USN"
              value={formData.usn}
              onChange={(e) => handleInputChange("usn", e.target.value.toUpperCase())}
              className="pl-10 h-12 border-gray-300 bg-white text-blue-900 placeholder:text-gray-500 focus:border-blue-900 focus:ring-blue-900 transition-all duration-200"
              required
              disabled={isLoading}
              maxLength={10}
            />
          </div>
          <p className="text-xs text-gray-500">Enter your University Seat Number (10 characters)</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-semibold text-blue-900">
            Password <span className="text-red-500">*</span>
          </Label>
          <div className="relative group">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-blue-900 transition-colors" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              className="pl-10 pr-10 h-12 border-gray-300 bg-white text-blue-900 placeholder:text-gray-500 focus:border-blue-900 focus:ring-blue-900 transition-all duration-200"
              required
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-900 transition-colors"
              disabled={isLoading}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="remember"
            checked={formData.rememberMe}
            onCheckedChange={(checked) => handleInputChange("rememberMe", checked as boolean)}
            className="border-gray-400 data-[state=checked]:bg-blue-900 data-[state=checked]:text-white"
            disabled={isLoading}
          />
          <Label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
            Remember me
          </Label>
        </div>
        <Link href="/forgot-password" className="text-sm text-blue-700 hover:text-blue-900 font-medium transition-colors">
          Forgot password?
        </Link>
      </div>

      <Button
        type="submit"
        className="w-full h-12 bg-blue-900 text-white hover:bg-blue-800 font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Signing in...
          </>
        ) : (
          "Sign In to Portal"
        )}
      </Button>

      <div className="text-center pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          Need help accessing your account?{" "}
          <a href="mailto:campus@bmsce.ac.in" className="text-blue-700 hover:text-blue-900 font-medium transition-colors">
            campus@bmsce.ac.in
          </a>
        </p>
      </div>
    </form>
  )
}
