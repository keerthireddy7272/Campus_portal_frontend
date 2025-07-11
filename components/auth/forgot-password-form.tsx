"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User, Loader2, AlertCircle, CheckCircle, Mail } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [usn, setUsn] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setSuccess(false)

    // Basic validation
    if (!usn) {
      setError("Please enter your USN")
      setIsLoading(false)
      return
    }

    // USN format validation
    const usnPattern = /^[0-9]{1}[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{3}$/
    if (!usnPattern.test(usn.toUpperCase())) {
      setError("Please enter a valid USN format")
      setIsLoading(false)
      return
    }

    // Simulate password reset request
    setTimeout(() => {
      // Simulate potential error for demo
      if (usn === "ERROR123") {
        setError("USN not found. Please check your USN and try again.")
        setIsLoading(false)
        return
      }

      setIsLoading(false)
      setSuccess(true)
    }, 2000)
  }

  const handleInputChange = (value: string) => {
    setUsn(value)
    if (error) setError("") // Clear error when user starts typing
    if (success) setSuccess(false) // Clear success when user starts typing again
  }

  if (success) {
    return (
      <div className="space-y-6">
        <Alert className="border-green-300 bg-green-100 dark:border-green-700 dark:bg-green-900/50">
          <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
          <AlertDescription className="text-green-800 dark:text-green-200">
            Password reset instructions have been sent to your registered email address.
          </AlertDescription>
        </Alert>

        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full">
            <Mail className="h-8 w-8 text-green-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Check Your Email</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We've sent password reset instructions to the email address associated with USN: <strong>{usn}</strong>
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <Button
            onClick={() => {
              setSuccess(false)
              setUsn("")
            }}
            variant="outline"
            className="w-full border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white bg-white transition-all duration-200"
          >
            Send Another Reset Link
          </Button>
        </div>

        <div className="text-center pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Didn't receive the email?{" "}
            <a
              href="mailto:campus@bmsce.ac.in"
              className="text-blue-700 hover:text-blue-900 font-medium transition-colors"
            >
              Contact Support
            </a>
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Alert variant="destructive" className="border-red-300 bg-red-100 dark:border-red-700 dark:bg-red-900/50">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="text-red-800 dark:text-red-200">{error}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="reset-usn" className="text-sm font-semibold text-blue-900">
          USN <span className="text-red-500">*</span>
        </Label>
        <div className="relative group">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-blue-900 transition-colors" />
          <Input
            id="reset-usn"
            type="text"
            placeholder="Enter your USN"
            value={usn}
            onChange={(e) => handleInputChange(e.target.value.toUpperCase())}
            className="pl-10 h-12 border-gray-300 bg-white text-blue-900 placeholder:text-gray-500 focus:border-blue-900 focus:ring-blue-900 transition-all duration-200"
            required
            disabled={isLoading}
            maxLength={10}
          />
        </div>
        <p className="text-xs text-gray-500">Enter your University Seat Number to receive reset instructions</p>
      </div>

      <Button
        type="submit"
        className="w-full h-12 bg-blue-900 text-white hover:bg-blue-800 font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending Reset Link...
          </>
        ) : (
          "Send Reset Instructions"
        )}
      </Button>

      <div className="text-center pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          Remember your password?{" "}
          <a href="/" className="text-blue-700 hover:text-blue-900 font-medium transition-colors">
            Back to Sign In
          </a>
        </p>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h3 className="text-sm font-semibold text-blue-900 mb-2">Need Help?</h3>
        <p className="text-xs text-blue-700 mb-2">
          If you're having trouble accessing your account, contact the campus support team.
        </p>
        <a
          href="mailto:campus@bmsce.ac.in"
          className="text-xs text-blue-700 hover:text-blue-900 font-medium transition-colors"
        >
          campus@bmsce.ac.in
        </a>
      </div>
    </form>
  )
}
