import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { CIEMarksTable } from "@/components/dashboard/cie-marks-table"

export default function CIEPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">CIE Marks</h1>
          <p className="text-gray-600 mt-2">View your Continuous Internal Evaluation marks</p>
        </div>
        <CIEMarksTable />
      </div>
    </DashboardLayout>
  )
}
