import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { OnlinePaymentsOverview } from "@/components/dashboard/online-payments-overview"

export default function PaymentsPage() {
  return (
    <DashboardLayout>
      <OnlinePaymentsOverview />
    </DashboardLayout>
  )
}
