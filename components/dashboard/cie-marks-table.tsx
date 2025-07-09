"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Download, TrendingUp } from "lucide-react"

const cieData = [
  {
    id: 1,
    course: "Cryptography",
    courseCode: "23CS4ESCRP",
    faculty: "Syed Akram",
    cie1: { marks: 13.5, total: 20 },
    cie2: { marks: 18.5, total: 20 },
    cie3: { marks: 16, total: 20 },
    aat1: { marks: 10, total: 10 },
    aat2: { marks: null, total: 10 },
    theoryTotal: { marks: 45, total: 50 },
    lab1: { marks: null, total: 25 },
    lab2: { marks: null, total: 25 },
    labTotal: { marks: null, total: 25 },
    finalSummary: null,
    ncmc: null,
    cieTotal: { marks: 45, total: 50 },
    status: "ELIGIBLE",
  },
  {
    id: 2,
    course: "Theoretical Foundations Of Computations",
    courseCode: "23CS4PCTFC",
    faculty: "Sowmya T",
    cie1: { marks: 14.25, total: 20 },
    cie2: { marks: 19, total: 20 },
    cie3: { marks: 20, total: 20 },
    aat1: { marks: 4, total: 5 },
    aat2: { marks: 4.75, total: 5 },
    theoryTotal: { marks: 48, total: 50 },
    lab1: { marks: null, total: 25 },
    lab2: { marks: null, total: 25 },
    labTotal: { marks: null, total: 25 },
    finalSummary: null,
    ncmc: null,
    cieTotal: { marks: 48, total: 50 },
    status: "ELIGIBLE",
  },
  {
    id: 3,
    course: "Software Engineering",
    courseCode: "23CS4PCSED",
    faculty: "Rajeshwari Madli",
    cie1: { marks: 16, total: 20 },
    cie2: { marks: 17, total: 20 },
    cie3: { marks: 18, total: 20 },
    aat1: { marks: 5, total: 5 },
    aat2: { marks: 3, total: 5 },
    theoryTotal: { marks: 43, total: 50 },
    lab1: { marks: null, total: 25 },
    lab2: { marks: null, total: 25 },
    labTotal: { marks: null, total: 25 },
    finalSummary: null,
    ncmc: null,
    cieTotal: { marks: 43, total: 50 },
    status: "ELIGIBLE",
  },
]

export function CIEMarksTable() {
  const [selectedSemester, setSelectedSemester] = useState("2024-25 Even")
  const [selectedSection, setSelectedSection] = useState("BE-UG Semester:4 Section:C")

  const calculatePercentage = (marks: number | null, total: number) => {
    if (marks === null) return 0
    return (marks / total) * 100
  }

  const getGradeColor = (percentage: number) => {
    if (percentage >= 90) return "text-green-600 dark:text-green-400"
    if (percentage >= 80) return "text-blue-600 dark:text-blue-400"
    if (percentage >= 70) return "text-yellow-600 dark:text-yellow-400"
    if (percentage >= 60) return "text-orange-600 dark:text-orange-400"
    return "text-red-600 dark:text-red-400"
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Academic Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Academic Year:</span>
              <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024-25 Even">2024-25 Even</SelectItem>
                  <SelectItem value="2024-25 Odd">2024-25 Odd</SelectItem>
                  <SelectItem value="2023-24 Even">2023-24 Even</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Class:</span>
              <Select value={selectedSection} onValueChange={setSelectedSection}>
                <SelectTrigger className="w-60">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BE-UG Semester:4 Section:C">BE-UG Semester:4 Section:C</SelectItem>
                  <SelectItem value="BE-UG Semester:4 Section:A">BE-UG Semester:4 Section:A</SelectItem>
                  <SelectItem value="BE-UG Semester:4 Section:B">BE-UG Semester:4 Section:B</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button variant="outline" className="ml-auto bg-transparent">
              <Download className="h-4 w-4 mr-2" />
              Export Results
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Overall CIE Average</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600 mb-2">45.3/50</div>
            <Progress value={90.6} className="mb-2" />
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              90.6% - Excellent Performance
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Subjects Enrolled</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">9</div>
            <div className="text-sm text-gray-600">
              <span className="text-green-600 font-medium">9 Eligible</span> •
              <span className="text-red-600 font-medium ml-1">0 Not Eligible</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Best Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-semibold mb-1">Theoretical Foundations</div>
            <div className="text-2xl font-bold text-green-600 mb-2">48/50</div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              96% Score
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* CIE Marks Table */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed CIE Marks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">S.NO</TableHead>
                  <TableHead className="min-w-[200px]">COURSE</TableHead>
                  <TableHead className="text-center" colSpan={5}>
                    THEORY MARKS
                  </TableHead>
                  <TableHead className="text-center" colSpan={3}>
                    LAB MARKS
                  </TableHead>
                  <TableHead className="text-center">FINAL</TableHead>
                  <TableHead className="text-center">NCMC</TableHead>
                  <TableHead className="text-center">CIE TOTAL</TableHead>
                  <TableHead className="text-center">STATUS</TableHead>
                </TableRow>
                <TableRow>
                  <TableHead></TableHead>
                  <TableHead></TableHead>
                  <TableHead className="text-center">CIE-1</TableHead>
                  <TableHead className="text-center">CIE-2</TableHead>
                  <TableHead className="text-center">CIE-3</TableHead>
                  <TableHead className="text-center">AAT-1</TableHead>
                  <TableHead className="text-center">AAT-2</TableHead>
                  <TableHead className="text-center">LAB-1</TableHead>
                  <TableHead className="text-center">LAB-2</TableHead>
                  <TableHead className="text-center">TOTAL</TableHead>
                  <TableHead className="text-center">SUMMARY</TableHead>
                  <TableHead className="text-center">MARKS</TableHead>
                  <TableHead className="text-center">MARKS</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cieData.map((subject) => (
                  <TableRow key={subject.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <TableCell className="font-medium text-gray-900 dark:text-gray-100">{subject.id}</TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-gray-100">{subject.course}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">({subject.courseCode})</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{subject.faculty}</div>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className={getGradeColor(calculatePercentage(subject.cie1.marks, subject.cie1.total))}>
                        {subject.cie1.marks}/{subject.cie1.total}
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className={getGradeColor(calculatePercentage(subject.cie2.marks, subject.cie2.total))}>
                        {subject.cie2.marks}/{subject.cie2.total}
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className={getGradeColor(calculatePercentage(subject.cie3.marks, subject.cie3.total))}>
                        {subject.cie3.marks}/{subject.cie3.total}
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className={getGradeColor(calculatePercentage(subject.aat1.marks, subject.aat1.total))}>
                        {subject.aat1.marks}/{subject.aat1.total}
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      {subject.aat2.marks ? (
                        <div className={getGradeColor(calculatePercentage(subject.aat2.marks, subject.aat2.total))}>
                          {subject.aat2.marks}/{subject.aat2.total}
                        </div>
                      ) : (
                        <span className="text-gray-400 dark:text-gray-500">-</span>
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {subject.lab1.marks ? (
                        <div className="text-gray-900 dark:text-gray-100">
                          {subject.lab1.marks}/{subject.lab1.total}
                        </div>
                      ) : (
                        <span className="text-gray-400 dark:text-gray-500">-</span>
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {subject.lab2.marks ? (
                        <div className="text-gray-900 dark:text-gray-100">
                          {subject.lab2.marks}/{subject.lab2.total}
                        </div>
                      ) : (
                        <span className="text-gray-400 dark:text-gray-500">-</span>
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {subject.labTotal.marks ? (
                        <div className="text-gray-900 dark:text-gray-100">
                          {subject.labTotal.marks}/{subject.labTotal.total}
                        </div>
                      ) : (
                        <span className="text-gray-400 dark:text-gray-500">-</span>
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {subject.finalSummary ? (
                        <span className="text-gray-900 dark:text-gray-100">{subject.finalSummary}</span>
                      ) : (
                        <span className="text-gray-400 dark:text-gray-500">-</span>
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {subject.ncmc ? (
                        <span className="text-gray-900 dark:text-gray-100">{subject.ncmc}</span>
                      ) : (
                        <span className="text-gray-400 dark:text-gray-500">-</span>
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="font-semibold text-blue-600 dark:text-blue-400">
                        {subject.cieTotal.marks}/{subject.cieTotal.total}
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge
                        variant={subject.status === "ELIGIBLE" ? "default" : "destructive"}
                        className={
                          subject.status === "ELIGIBLE"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : ""
                        }
                      >
                        {subject.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
