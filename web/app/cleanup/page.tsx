import PageHeader from "../../components/PageHeader"
import PageTransition from "../../components/PageTransition"

export default function CleanupPage() {
  return (
    <PageTransition>
      <PageHeader
        title="Cleanup"
        description="Clean unnecessary system files"
      />

      <div className="wos-empty-state">
        Cleanup engine will be connected later.
      </div>
    </PageTransition>
  )
}
