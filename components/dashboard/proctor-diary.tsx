"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Settings, Mail, Phone, MapPin, Calendar, GraduationCap } from "lucide-react"

const studentData = {
  name: "KAMIREDDY KEERTHI REDDY",
  id: "1BM23CS137",
  profileImage: "/placeholder-user.jpg",
  contactInfo: {
    mobile: "9030339331",
    email: "kamireddy.cs23@bmsce.ac.in",
    phone: "9440532856",
    personalEmail: "keerthireddy7903@gmail.com",
  },
  personalInfo: {
    dateOfBirth: "29-05-2006",
    bloodGroup: "O+",
    accommodation: "-",
    modeOfAdmission: "COMDE - K (COLLEGE CODE- E048)",
  },
  addresses: {
    permanent: "RKR COMPLEX, KADAPA ROAD, PILERU, ANDHERA PRADESH, 517214",
    present: "NHG-1, ASHOK NAGAR 3RD CROSS, BASAVANNAGUDI, KARNATAKA, 560004",
  },
  familyInfo: {
    father: {
      name: "K RAMACHANDRA REDDY",
      occupation: "VETERINARY ASST SURGEON",
      qualification: "VETERINARY DOCTOR",
      mobile: "9440532856",
      email: "krcreddy001@gmail.com",
    },
    mother: {
      name: "C BABITHA",
      occupation: "B.ED",
      qualification: "-",
      mobile: "9492847211",
      email: "babithachichilli@gmail.com",
    },
  },
  proctor: {
    name: "Vikranth B.M",
    designation: "Assistant Professor",
    profileImage: "/placeholder-proctor.jpg",
  },
}

const qualifyingExaminations = [
  {
    qualification: "12th Standard",
    instituteName: "Sri Chaitanya Junior College",
    yearOfPassing: "2023",
    securedPercentage: "95.2%",
    lastUpdate: "15-08-2023",
  },
  {
    qualification: "10th Standard",
    instituteName: "Narayana High School",
    yearOfPassing: "2021",
    securedPercentage: "96.8%",
    lastUpdate: "20-05-2021",
  },
]

export function ProctorDiary() {
  return (
    <div className="space-y-6">
      {/* Student Information Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl text-blue-600">STUDENT INFORMATION</CardTitle>
          <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent">
            <Settings className="h-4 w-4 mr-2" />
            Manage
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Section */}
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="w-32 h-32">
                <AvatarImage src={studentData.profileImage || "/placeholder.svg"} alt={studentData.name} />
                <AvatarFallback className="text-2xl bg-blue-100 text-blue-600">
                  {studentData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{studentData.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{studentData.id}</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Mobile</h4>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <span className="text-blue-600">{studentData.contactInfo.mobile}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Email</h4>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <span className="text-blue-600 text-sm">{studentData.contactInfo.email}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Phone</h4>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <span className="text-blue-600">{studentData.contactInfo.phone}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Email</h4>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <span className="text-blue-600 text-sm">{studentData.contactInfo.personalEmail}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Date of Birth</h4>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-600" />
                    <span>{studentData.personalInfo.dateOfBirth}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Blood Group</h4>
                  <Badge variant="outline" className="text-red-600 border-red-200">
                    {studentData.personalInfo.bloodGroup}
                  </Badge>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Accommodation</h4>
                  <span className="text-gray-600 dark:text-gray-400">
                    {studentData.personalInfo.accommodation || "Not specified"}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Mode of Admission</h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {studentData.personalInfo.modeOfAdmission}
                  </span>
                </div>
              </div>
            </div>

            {/* Proctor Information */}
            <div className="space-y-4">
              <div className="text-center">
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-4">PROCTOR</h4>
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage
                    src={studentData.proctor.profileImage || "/placeholder.svg"}
                    alt={studentData.proctor.name}
                  />
                  <AvatarFallback className="text-lg bg-green-100 text-green-600">
                    {studentData.proctor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-bold text-gray-900 dark:text-gray-100">{studentData.proctor.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{studentData.proctor.designation}</p>
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Permanent Address
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                {studentData.addresses.permanent}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Present Address
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                {studentData.addresses.present}
              </p>
            </div>
          </div>

          {/* Family Information */}
          <div className="mt-8">
            <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-4">Family Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Father / Guardian</h5>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Name:</span> {studentData.familyInfo.father.name}
                  </div>
                  <div>
                    <span className="font-medium">Occupation:</span> {studentData.familyInfo.father.occupation}
                  </div>
                  <div>
                    <span className="font-medium">Qualification:</span> {studentData.familyInfo.father.qualification}
                  </div>
                  <div>
                    <span className="font-medium">Mobile:</span> {studentData.familyInfo.father.mobile}
                  </div>
                  <div>
                    <span className="font-medium">Email:</span> {studentData.familyInfo.father.email}
                  </div>
                </div>
              </div>
              <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg">
                <h5 className="font-semibold text-pink-800 dark:text-pink-200 mb-3">Mother</h5>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Name:</span> {studentData.familyInfo.mother.name}
                  </div>
                  <div>
                    <span className="font-medium">Occupation:</span> {studentData.familyInfo.mother.occupation}
                  </div>
                  <div>
                    <span className="font-medium">Qualification:</span>{" "}
                    {studentData.familyInfo.mother.qualification || "Not specified"}
                  </div>
                  <div>
                    <span className="font-medium">Mobile:</span> {studentData.familyInfo.mother.mobile}
                  </div>
                  <div>
                    <span className="font-medium">Email:</span> {studentData.familyInfo.mother.email}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Qualifying Examination */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl text-blue-600">QUALIFYING EXAMINATION</CardTitle>
          <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent">
            <Settings className="h-4 w-4 mr-2" />
            Manage
          </Button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">#</TableHead>
                  <TableHead>Qualification</TableHead>
                  <TableHead>Institute Name</TableHead>
                  <TableHead className="text-center">Year of Passing</TableHead>
                  <TableHead className="text-center">Secured % / Grade</TableHead>
                  <TableHead className="text-center">Last Update</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {qualifyingExaminations.map((exam, index) => (
                  <TableRow key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <GraduationCap className="h-4 w-4 text-blue-600" />
                        <span className="font-medium">{exam.qualification}</span>
                      </div>
                    </TableCell>
                    <TableCell>{exam.instituteName}</TableCell>
                    <TableCell className="text-center">{exam.yearOfPassing}</TableCell>
                    <TableCell className="text-center">
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      >
                        {exam.securedPercentage}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center text-sm text-gray-600 dark:text-gray-400">
                      {exam.lastUpdate}
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
