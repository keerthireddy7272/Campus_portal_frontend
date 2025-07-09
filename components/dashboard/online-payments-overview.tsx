"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  CreditCard,
  FileText,
  GraduationCap,
  RefreshCw,
  Download,
  Clock,
  CheckCircle,
  AlertCircle,
  ExternalLink,
} from "lucide-react"

const paymentOptions = [
  {
    title: "Supplementary Semester End Exam (FastTrack Fee)",
    description: "Pay fees for supplementary examinations",
    amount: "₹3,500",
    status: "available",
    icon: GraduationCap,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    title: "Reregistration Fees",
    description: "Course registration fees for next semester",
    amount: "₹2,000",
    status: "available",
    icon: RefreshCw,
    color: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300",
  },
  {
    title: "Certificates (PDC/Transcript/Gradecard etc)",
    description: "Official document and certificate fees",
    amount: "₹500",
    status: "available",
    icon: FileText,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300",
  },
  {
    title: "ICD Payment Link",
    description: "Strictly for ICD Students Only",
    amount: "₹5,000",
    status: "restricted",
    icon: CreditCard,
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300",
  },
]

const recentTransactions = [
  {
    title: "Semester 4 Tuition Fee",
    amount: "₹237,706",
    date: "Dec 15, 2024",
    status: "completed",
    transactionId: "TXN123456789",
  },
  {
    title: "VTU Fee Payment",
    amount: "₹3,510",
    date: "Dec 10, 2024",
    status: "completed",
    transactionId: "TXN123456788",
  },
  {
    title: "College Miscellaneous Fee",
    amount: "₹20,000",
    date: "Dec 5, 2024",
    status: "completed",
    transactionId: "TXN123456787",
  },
]

export function OnlinePaymentsOverview() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Online Payments</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Manage your fee payments and download receipts</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Payment History
          </Button>
          <Button variant="outline" size="sm">
            <FileText className="h-4 w-4 mr-2" />
            Download Receipt
          </Button>
        </div>
      </div>

      {/* Payment Options */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Available Payment Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paymentOptions.map((option, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-lg ${option.color} flex items-center justify-center`}>
                      <option.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{option.title}</CardTitle>
                      <CardDescription className="mt-1">{option.description}</CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{option.amount}</p>
                    {option.status === "available" ? (
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      >
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Available
                      </Badge>
                    ) : (
                      <Badge
                        variant="secondary"
                        className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                      >
                        <AlertCircle className="h-3 w-3 mr-1" />
                        Restricted Access
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {option.status === "restricted" && (
                      <p className="text-orange-600 dark:text-orange-400">
                        This payment option is only available for ICD students
                      </p>
                    )}
                  </div>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600"
                    disabled={option.status === "restricted"}
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    Pay Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Recent Transactions
              </CardTitle>
              <CardDescription>Your payment history and transaction details</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <ExternalLink className="h-4 w-4 mr-2" />
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map((transaction, index) => (
              <div key={index}>
                <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-full bg-green-100 dark:bg-green-900">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">{transaction.title}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {transaction.date} • Transaction ID: {transaction.transactionId}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900 dark:text-gray-100">{transaction.amount}</p>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    >
                      Completed
                    </Badge>
                  </div>
                </div>
                {index < recentTransactions.length - 1 && <Separator className="my-2" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Payment Guidelines */}
      <Card className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950">
        <CardHeader>
          <CardTitle className="text-blue-800 dark:text-blue-200">Payment Guidelines & Terms</CardTitle>
        </CardHeader>
        <CardContent className="text-blue-700 dark:text-blue-300">
          <ul className="space-y-2 text-sm">
            <li>• All payments are processed securely through our payment gateway</li>
            <li>• Transaction fees may apply for certain payment methods</li>
            <li>• Refunds will be processed within 7-10 working days if applicable</li>
            <li>• Keep your transaction ID for future reference</li>
            <li>• Contact the accounts office for any payment-related queries</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
