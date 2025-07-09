import { SignInForm } from "@/components/auth/sign-in-form"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex min-h-screen items-center justify-center">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-xl">BMSCE</div>
                <span className="ml-2 text-blue-600 font-semibold text-xl">Campus</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h1>
              <p className="text-gray-600">Sign in to access your campus portal</p>
            </div>
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <SignInForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
