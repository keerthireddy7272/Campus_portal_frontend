import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { ProctorDiary } from "@/components/dashboard/proctor-diary"

export default function ProctorPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Proctor Diary</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Your academic mentor and personal information</p>
        </div>
        <ProctorDiary />
      </div>
    </DashboardLayout>
  )
}
