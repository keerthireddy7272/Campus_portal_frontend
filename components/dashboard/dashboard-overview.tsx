import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Calendar,
  GraduationCap,
  CreditCard,
  FileText,
  RefreshCw,
  TrendingUp,
  Clock,
  CheckCircle,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

const quickActions = [
  {
    title: "College Fees",
    description: "View and pay your semester fees",
    icon: CreditCard,
    color: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300",
    href: "/dashboard/fees",
  },
  {
    title: "Re-Registration",
    description: "Complete your course registration",
    icon: RefreshCw,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300",
    href: "/dashboard/registration",
  },
  {
    title: "Re-appearing Examination",
    description: "Register for re-appearing exams",
    icon: FileText,
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300",
    href: "/dashboard/reappearing",
  },
  {
    title: "Certificates",
    description: "Download academic certificates",
    icon: GraduationCap,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300",
    href: "/dashboard/certificates",
  },
]

const recentActivities = [
  {
    title: "CIE-2 marks updated for Software Engineering",
    time: "2 hours ago",
    type: "academic",
  },
  {
    title: "Attendance marked for Operating Systems",
    time: "1 day ago",
    type: "attendance",
  },
  {
    title: "Fee payment reminder for Semester 4",
    time: "3 days ago",
    type: "payment",
  },
]

export function DashboardOverview() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, Kamireddy Keerthi Reddy</h1>
            <p className="text-blue-100 text-lg">Student ID: 1BM23CS137 | Computer Science Engineering</p>
          </div>
          <div className="text-right">
            <p className="text-blue-100">Current Semester</p>
            <p className="text-2xl font-bold">4th Semester</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Attendance</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">87.5%</div>
            <Progress value={87.5} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">Above minimum requirement</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">CIE Average</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">42.8/50</div>
            <div className="flex items-center mt-2">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-xs text-green-600">+2.3 from last CIE</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Fees</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">₹0</div>
            <div className="flex items-center mt-2">
              <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-xs text-green-600">All fees paid</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">9</div>
            <p className="text-xs text-muted-foreground mt-2">Current semester courses</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${action.color} flex items-center justify-center mb-4`}>
                  <action.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{action.title}</CardTitle>
                <CardDescription>{action.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Access
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Activity & Announcements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{activity.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Important Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg border border-orange-200 dark:border-orange-800">
              <div className="flex items-center mb-2">
                <BookOpen className="h-5 w-5 text-orange-600 dark:text-orange-400 mr-2" />
                <h3 className="font-semibold text-orange-800 dark:text-orange-200">Previous Year Question Papers</h3>
              </div>
              <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">
                Access previous year question papers for exam preparation
              </p>
              <Badge variant="secondary" className="text-xs">
                Campus Internet Only
              </Badge>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-center mb-2">
                <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                <h3 className="font-semibold text-blue-800 dark:text-blue-200">College Library Book Search</h3>
              </div>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                Search and reserve books from the college library
              </p>
              <Badge variant="secondary" className="text-xs">
                Campus Internet Only
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
