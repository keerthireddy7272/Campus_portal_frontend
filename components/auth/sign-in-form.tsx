"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { User, Lock, Loader2, AlertCircle, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function SignInForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    usn: "",
    password: "",
    rememberMe: false,
  })

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
      setError("Please enter a valid USN format (e.g., 1BM23CS137)")
      setIsLoading(false)
      return
    }

    // Simulate authentication
    setTimeout(() => {
      // Simulate potential error for demo
      if (formData.usn.toUpperCase() === "ERROR123") {
        setError("Invalid credentials. Please check your USN and password.")
        setIsLoading(false)
        return
      }

      // Simulate successful login - redirect to dashboard
      window.location.href = "/dashboard"
    }, 2000)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (error) setError("") // Clear error when user starts typing
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Alert variant="destructive" className="border-red-300 bg-red-100">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="text-red-800">{error}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="usn" className="text-sm font-semibold text-white">
          USN <span className="text-red-300">*</span>
        </Label>
        <div className="relative group">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-300 group-focus-within:text-white transition-colors" />
          <Input
            id="usn"
            type="text"
            placeholder="Enter your USN (e.g., 1BM23CS137)"
            value={formData.usn}
            onChange={(e) => handleInputChange("usn", e.target.value.toUpperCase())}
            className="pl-10 h-12 border-blue-700 bg-blue-800/50 text-white placeholder:text-blue-100 focus:border-white focus:ring-white transition-all duration-200"
            required
            disabled={isLoading}
            maxLength={10}
          />
        </div>
        <p className="text-xs text-blue-200">Enter your University Seat Number (10 characters)</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm font-semibold text-white">
          Password <span className="text-red-300">*</span>
        </Label>
        <div className="relative group">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-300 group-focus-within:text-white transition-colors" />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            className="pl-10 pr-10 h-12 border-blue-700 bg-blue-800/50 text-white placeholder:text-blue-100 focus:border-white focus:ring-white transition-all duration-200"
            required
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300 hover:text-white transition-colors"
            disabled={isLoading}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="remember"
            checked={formData.rememberMe}
            onCheckedChange={(checked) => handleInputChange("rememberMe", checked as boolean)}
            className="border-blue-500 data-[state=checked]:bg-white data-[state=checked]:text-blue-900"
            disabled={isLoading}
          />
          <Label htmlFor="remember" className="text-sm text-blue-200 cursor-pointer">
            Remember me
          </Label>
        </div>
        <Link href="/forgot-password" className="text-sm text-white hover:text-blue-100 font-medium transition-colors">
          Forgot password?
        </Link>
      </div>

      <Button
        type="submit"
        className="w-full h-12 bg-white text-blue-900 hover:bg-blue-50 font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Signing In...
          </>
        ) : (
          "Sign In to Portal"
        )}
      </Button>

      <div className="text-center pt-4 border-t border-blue-700">
        <p className="text-sm text-blue-200">
          Need help accessing your account?{" "}
          <a href="mailto:campus@bmsce.ac.in" className="text-white hover:text-blue-100 font-medium transition-colors">
            Contact Support
          </a>
        </p>
      </div>
    </form>
  )
}
