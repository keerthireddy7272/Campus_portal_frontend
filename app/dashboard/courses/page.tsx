import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { CoursesOverview } from "@/components/dashboard/courses-overview"

export default function CoursesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Courses</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">View your enrolled courses and academic information</p>
        </div>
        <CoursesOverview />
      </div>
    </DashboardLayout>
  )
}
