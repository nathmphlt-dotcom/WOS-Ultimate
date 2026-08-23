import PageHeader from "../../components/PageHeader"
import PageTransition from "../../components/PageTransition"

export default function FiveMPage() {
  return (
    <PageTransition>
      <PageHeader
        title="FiveM Booster"
        description="FiveM performance optimization"
        badge="GAMING"
      />

      <div className="wos-empty-state">
        FiveM optimization engine will be connected later.
      </div>
    </PageTransition>
  )
}
