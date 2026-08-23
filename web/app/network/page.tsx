import PageHeader from "../../components/PageHeader"
import PageTransition from "../../components/PageTransition"

export default function NetworkPage() {
  return (
    <PageTransition>
      <PageHeader
        title="Network"
        description="Network diagnostics and optimization"
      />

      <div className="wos-empty-state">
        Network engine will be connected later.
      </div>
    </PageTransition>
  )
}
