"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CreditCard, Download, CheckCircle, AlertCircle, Clock } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const feeData = {
  studentInfo: {
    name: "KAMIREDDY KEERTHI REDDY",
    id: "1BM23CS137",
  },
  academicYears: [
    {
      year: "2023-2024",
      yearType: "I",
      managementFees: {
        managementFee: 0,
        arrearsManagementFee: 0,
        totalManagementFee: 0,
        paidAmount: 0,
        balanceAmount: 0,
      },
      tuitionFees: {
        tuitionFee: 237706,
        vtuFee: 12110,
        autonomousExamFee: 3360,
        collegeMiscellaneousFee: 20000,
        arrearsTuitionFee: 0,
        lateFee: 0,
        lateFeeArrears: 0,
        lateFeeConcession: 0,
      },
    },
    {
      year: "2024-2025",
      yearType: "II",
      managementFees: {
        managementFee: 0,
        arrearsManagementFee: 0,
        totalManagementFee: 0,
        paidAmount: 0,
        balanceAmount: 0,
      },
      tuitionFees: {
        tuitionFee: 237706,
        vtuFee: 3510,
        autonomousExamFee: 3360,
        collegeMiscellaneousFee: 20000,
        arrearsTuitionFee: 0,
        lateFee: 0,
        lateFeeArrears: 0,
        lateFeeConcession: 0,
      },
    },
  ],
}

export function FeesOverview() {
  const calculateTotal = (fees: any) => {
    return Object.values(fees).reduce((sum: number, value: any) => sum + (typeof value === "number" ? value : 0), 0)
  }

  const currentYearTotal = calculateTotal(feeData.academicYears[1].tuitionFees)
  const previousYearTotal = calculateTotal(feeData.academicYears[0].tuitionFees)

  return (
    <div className="space-y-6">
      {/* Fee Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
              Total Fees Paid
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">₹{previousYearTotal.toLocaleString()}</div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">All previous dues cleared</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Clock className="h-5 w-5 mr-2 text-blue-600" />
              Current Year Fees
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">₹{currentYearTotal.toLocaleString()}</div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Academic Year 2024-2025</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <AlertCircle className="h-5 w-5 mr-2 text-orange-600" />
              Payment Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">Pending</div>
            <Progress value={0} className="mt-2" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Payment due soon</p>
          </CardContent>
        </Card>
      </div>

      {/* Student Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">{feeData.studentInfo.name} - FEE DETAILS</CardTitle>
          <p className="text-gray-600 dark:text-gray-400">Student ID: {feeData.studentInfo.id}</p>
        </CardHeader>
      </Card>

      {/* Fee Details Table */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Detailed Fee Structure</CardTitle>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download Receipt
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              <CreditCard className="h-4 w-4 mr-2" />
              Pay Now
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/3">Fee Type</TableHead>
                  <TableHead className="text-center">Academic Year</TableHead>
                  <TableHead className="text-center">Year</TableHead>
                  <TableHead className="text-right">2023-2024</TableHead>
                  <TableHead className="text-right">2024-2025</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Management Quote Fee Section */}
                <TableRow className="bg-yellow-50 dark:bg-yellow-900/20">
                  <TableCell
                    colSpan={5}
                    className="font-bold text-yellow-800 dark:text-yellow-200 bg-yellow-200 dark:bg-yellow-800"
                  >
                    MANAGEMENT QUOTE FEE
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Management Fee</TableCell>
                  <TableCell className="text-center">2023-2024</TableCell>
                  <TableCell className="text-center">I</TableCell>
                  <TableCell className="text-right">₹0</TableCell>
                  <TableCell className="text-right">₹0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Arrears Management Fee</TableCell>
                  <TableCell className="text-center">2024-2025</TableCell>
                  <TableCell className="text-center">II</TableCell>
                  <TableCell className="text-right">₹0</TableCell>
                  <TableCell className="text-right">₹0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Total Management Fee</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell className="text-right font-bold">₹0</TableCell>
                  <TableCell className="text-right font-bold">₹0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-blue-600">Paid Amount</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell className="text-right text-blue-600 font-bold">₹0</TableCell>
                  <TableCell className="text-right text-blue-600 font-bold">₹0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-red-600">Balance Amount</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell className="text-right text-red-600 font-bold">₹0</TableCell>
                  <TableCell className="text-right text-red-600 font-bold">₹0</TableCell>
                </TableRow>

                {/* Tuition Fee Section */}
                <TableRow className="bg-cyan-50 dark:bg-cyan-900/20">
                  <TableCell
                    colSpan={5}
                    className="font-bold text-cyan-800 dark:text-cyan-200 bg-cyan-200 dark:bg-cyan-800"
                  >
                    TUITION FEE
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Tuition Fee</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell className="text-right">
                    ₹{feeData.academicYears[0].tuitionFees.tuitionFee.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">
                    ₹{feeData.academicYears[1].tuitionFees.tuitionFee.toLocaleString()}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">VTU Fee</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell className="text-right text-blue-600">
                    ₹{feeData.academicYears[0].tuitionFees.vtuFee.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">
                    ₹{feeData.academicYears[1].tuitionFees.vtuFee.toLocaleString()}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Autonomous Exam Fee</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell className="text-right">
                    ₹{feeData.academicYears[0].tuitionFees.autonomousExamFee.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">
                    ₹{feeData.academicYears[1].tuitionFees.autonomousExamFee.toLocaleString()}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">College Miscellaneous Fee</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell className="text-right">
                    ₹{feeData.academicYears[0].tuitionFees.collegeMiscellaneousFee.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">
                    ₹{feeData.academicYears[1].tuitionFees.collegeMiscellaneousFee.toLocaleString()}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Arrears Tuition Fee</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell className="text-right">₹0</TableCell>
                  <TableCell className="text-right">₹0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Late Fee</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell className="text-right">₹0</TableCell>
                  <TableCell className="text-right">₹0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Late Fee Arrears</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell className="text-right">₹0</TableCell>
                  <TableCell className="text-right">₹0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Late Fee Concession</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell className="text-right">₹0</TableCell>
                  <TableCell className="text-right">₹0</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Payment Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-red-600">Terms & Conditions for Online Fee Payments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
            <ul className="text-sm text-red-800 dark:text-red-200 space-y-2">
              <li>• Online fee payment is available 24/7 for your convenience</li>
              <li>• Payment confirmation will be sent to your registered email and mobile number</li>
              <li>• Keep the transaction receipt for future reference</li>
              <li>• In case of payment failure, amount will be refunded within 5-7 working days</li>
              <li>• For any payment related queries, contact the accounts department</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
