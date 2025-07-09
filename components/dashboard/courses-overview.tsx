"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, GraduationCap, Users, Clock, Settings } from "lucide-react"

const coursesData = {
  semesters: [
    {
      id: "2024-25-even",
      academicYear: "2024-25 Even",
      program: "BE-UG",
      semester: "Semester:4",
      section: "Section:C",
      courses: [
        {
          sno: 1,
          courseCode: "23CS4ESCRP",
          courseName: "Cryptography",
          courseType: "Professional Core Course (PC)",
          facultyName: "Syed Akram",
          credits: 4,
          category: "core",
        },
        {
          sno: 2,
          courseCode: "23CS4PCTFC",
          courseName: "Theoretical Foundations Of Computations",
          courseType: "Professional Core Course (PC)",
          facultyName: "Sowmya T",
          credits: 4,
          category: "core",
        },
        {
          sno: 3,
          courseCode: "23CS4PCSED",
          courseName: "Software Engineering",
          courseType: "Professional Core Course (PC)",
          facultyName: "Rajeshwari Madli",
          credits: 3,
          category: "core",
        },
        {
          sno: 4,
          courseCode: "23CS4PCADA",
          courseName: "Analysis And Design Of Algorithms",
          courseType: "Professional Core Course (PC)",
          facultyName: "Sarala D V",
          credits: 4,
          category: "core",
        },
        {
          sno: 5,
          courseCode: "23CS4PCOPS",
          courseName: "Operating Systems",
          courseType: "Professional Core Course (PC)",
          facultyName: "Radhika A D",
          credits: 4,
          category: "core",
        },
        {
          sno: 6,
          courseCode: "24NCMC4WD2",
          courseName: "Western Dance - 2",
          courseType: "Non-Credit Mandatory Course (NCMC)",
          facultyName: "Dr. Prathima Bhat K",
          credits: 0,
          category: "ncmc",
        },
        {
          sno: 7,
          courseCode: "23MA4BSLAO",
          courseName: "Linear Algebra and Optimization",
          courseType: "Basic Science Courses (BS)",
          facultyName: "Dr Hemanth Kumar C",
          credits: 3,
          category: "basic",
        },
        {
          sno: 8,
          courseCode: "22MA4AEUHV",
          courseName: "Universal Human Values",
          courseType: "Ability Enhancement Courses (AE)",
          facultyName: "Rashmi H",
          credits: 1,
          category: "ability",
        },
        {
          sno: 9,
          courseCode: "23CS4AEMAD",
          courseName: "Mobile Application Development",
          courseType: "Ability Enhancement Courses (AE)",
          facultyName: "Shravya AR",
          credits: 2,
          category: "ability",
        },
      ],
    },
    {
      id: "2024-25-odd",
      academicYear: "2024-25 Odd",
      program: "BE-UG",
      semester: "Semester:3",
      section: "Section:C",
      courses: [
        {
          sno: 1,
          courseCode: "23CS3PCOOJ",
          courseName: "Object Oriented Java Programming",
          courseType: "Professional Core Course (PC)",
          facultyName: "Dr. Seema patil",
          credits: 4,
          category: "core",
        },
        {
          sno: 2,
          courseCode: "23CS3PCLOD",
          courseName: "Logic Design",
          courseType: "Professional Core Course (PC)",
          facultyName: "Surabhi S",
          credits: 3,
          category: "core",
        },
        {
          sno: 3,
          courseCode: "23CS3PCDBM",
          courseName: "Database Management Systems",
          courseType: "Professional Core Course (PC)",
          facultyName: "Sheetal V A",
          credits: 4,
          category: "core",
        },
        {
          sno: 4,
          courseCode: "23CS3PCDST",
          courseName: "Data Structures",
          courseType: "Professional Core Course (PC)",
          facultyName: "Namratha M",
          credits: 4,
          category: "core",
        },
        {
          sno: 5,
          courseCode: "23CS3PCUSP",
          courseName: "Unix Shell Programming",
          courseType: "Professional Core Course (PC)",
          facultyName: "SNEHA P",
          credits: 3,
          category: "core",
        },
        {
          sno: 6,
          courseCode: "24NCMC3WD1",
          courseName: "Western Dance - 1",
          courseType: "Non-Credit Mandatory Course (NCMC)",
          facultyName: "Dr. Prathima Bhat K",
          credits: 0,
          category: "ncmc",
        },
        {
          sno: 7,
          courseCode: "23MA3BSSDM",
          courseName: "Statistics And Discrete Mathematics",
          courseType: "Basic Science Courses (BS)",
          facultyName: "Shobha P H",
          credits: 4,
          category: "basic",
        },
        {
          sno: 8,
          courseCode: "23CS3ESCOA",
          courseName: "Computer Organization And Architecture",
          courseType: "Engineering Science Courses (ES)",
          facultyName: "Ms. Ambuja K",
          credits: 3,
          category: "engineering",
        },
        {
          sno: 9,
          courseCode: "23CS3AEFWD",
          courseName: "Full Stack Web Development",
          courseType: "Ability Enhancement Courses (AE)",
          facultyName: "Amruta",
          credits: 2,
          category: "ability",
        },
      ],
    },
  ],
}

export function CoursesOverview() {
  const [selectedSemester, setSelectedSemester] = useState("2024-25-even")

  const currentSemester = coursesData.semesters.find((sem) => sem.id === selectedSemester)

  const getCourseTypeColor = (courseType: string) => {
    if (courseType.includes("Professional Core")) return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    if (courseType.includes("Non-Credit")) return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
    if (courseType.includes("Basic Science")) return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    if (courseType.includes("Ability Enhancement"))
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
    if (courseType.includes("Engineering Science"))
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
    return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
  }

  const getCreditStats = (courses: any[]) => {
    const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0)
    const coreCredits = courses.filter((c) => c.category === "core").reduce((sum, course) => sum + course.credits, 0)
    const electiveCredits = courses
      .filter((c) => c.category === "ability" || c.category === "basic" || c.category === "engineering")
      .reduce((sum, course) => sum + course.credits, 0)

    return { totalCredits, coreCredits, electiveCredits }
  }

  const stats = currentSemester
    ? getCreditStats(currentSemester.courses)
    : { totalCredits: 0, coreCredits: 0, electiveCredits: 0 }

  return (
    <div className="space-y-6">
      {/* Semester Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Academic Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 items-center">
            <Select value={selectedSemester} onValueChange={setSelectedSemester}>
              <SelectTrigger className="w-60">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {coursesData.semesters.map((semester) => (
                  <SelectItem key={semester.id} value={semester.id}>
                    {semester.academicYear} - {semester.semester}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {currentSemester && (
              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                <span>{currentSemester.program}</span>
                <span>•</span>
                <span>{currentSemester.semester}</span>
                <span>•</span>
                <span>{currentSemester.section}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Credit Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
              Total Credits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">{stats.totalCredits}</div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">This semester</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <GraduationCap className="h-5 w-5 mr-2 text-green-600" />
              Core Credits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">{stats.coreCredits}</div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Professional core courses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Users className="h-5 w-5 mr-2 text-purple-600" />
              Elective Credits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">{stats.electiveCredits}</div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Elective & enhancement</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Clock className="h-5 w-5 mr-2 text-orange-600" />
              Total Courses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-600">{currentSemester?.courses.length || 0}</div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Enrolled courses</p>
          </CardContent>
        </Card>
      </div>

      {/* Courses Table */}
      {currentSemester && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-xl">
                {currentSemester.academicYear} {currentSemester.program} {currentSemester.semester}{" "}
                {currentSemester.section}
              </CardTitle>
            </div>
            <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent">
              <Settings className="h-4 w-4 mr-2" />
              Course Registration Form
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-16">S.NO</TableHead>
                    <TableHead>COURSE CODE</TableHead>
                    <TableHead>COURSE NAME</TableHead>
                    <TableHead>COURSE TYPE</TableHead>
                    <TableHead className="text-center">CREDITS</TableHead>
                    <TableHead>FACULTY NAME</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentSemester.courses.map((course) => (
                    <TableRow key={course.sno} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <TableCell className="font-medium">{course.sno}</TableCell>
                      <TableCell>
                        <span className="font-mono text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                          {course.courseCode}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium text-blue-600 dark:text-blue-400">{course.courseName}</div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className={getCourseTypeColor(course.courseType)}>
                          {course.courseType}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex items-center justify-center">
                          <span
                            className={`font-bold text-lg ${
                              course.credits === 0
                                ? "text-gray-400"
                                : course.credits >= 4
                                  ? "text-green-600"
                                  : course.credits >= 3
                                    ? "text-blue-600"
                                    : "text-orange-600"
                            }`}
                          >
                            {course.credits}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{course.facultyName}</div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Course Categories Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Course Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="font-medium">Professional Core (PC)</span>
                </div>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {currentSemester?.courses.filter((c) => c.category === "core").length || 0} courses
                </Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="font-medium">Basic Science (BS)</span>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                >
                  {currentSemester?.courses.filter((c) => c.category === "basic").length || 0} courses
                </Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  <span className="font-medium">Ability Enhancement (AE)</span>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                >
                  {currentSemester?.courses.filter((c) => c.category === "ability").length || 0} courses
                </Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                  <span className="font-medium">Non-Credit Mandatory (NCMC)</span>
                </div>
                <Badge variant="secondary" className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  {currentSemester?.courses.filter((c) => c.category === "ncmc").length || 0} courses
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Academic Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Credit Requirements</h4>
                <ul className="text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Minimum 18-22 credits per semester</li>
                  <li>• Professional Core courses are mandatory</li>
                  <li>• NCMC courses carry 0 credits but are compulsory</li>
                </ul>
              </div>

              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Course Registration</h4>
                <ul className="text-green-700 dark:text-green-300 space-y-1">
                  <li>• Registration opens at the beginning of each semester</li>
                  <li>• Late registration may incur additional fees</li>
                  <li>• Course changes allowed within first two weeks</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
