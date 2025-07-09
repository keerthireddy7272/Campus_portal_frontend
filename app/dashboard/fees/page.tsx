import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { FeesOverview } from "@/components/dashboard/fees-overview"

export default function FeesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Fee Details</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">View your academic fee structure and payment status</p>
        </div>
        <FeesOverview />
      </div>
    </DashboardLayout>
  )
}
