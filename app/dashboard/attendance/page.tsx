import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { AttendanceOverview } from "@/components/dashboard/attendance-overview"

export default function AttendancePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Attendance</h1>
          <p className="text-gray-600 mt-2">Track your class attendance and participation</p>
        </div>
        <AttendanceOverview />
      </div>
    </DashboardLayout>
  )
}
