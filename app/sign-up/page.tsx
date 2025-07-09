import { SignUpForm } from "@/components/auth/sign-up-form"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex min-h-screen items-center justify-center">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <Link href="/" className="inline-flex items-center justify-center mb-4">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-xl">BMSCE</div>
                <span className="ml-2 text-blue-600 font-semibold text-xl">Campus</span>
              </Link>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Create Account</h1>
              <p className="text-gray-600">Join the BMSCE campus community</p>
            </div>
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <SignUpForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
