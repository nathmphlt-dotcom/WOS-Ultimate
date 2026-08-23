import PageHeader from "../../components/PageHeader"
import PageTransition from "../../components/PageTransition"

export default function MemoryPage() {
  return (
    <PageTransition>
      <PageHeader
        title="Memory"
        description="RAM monitoring and optimization"
      />

      <div className="wos-empty-state">
        Memory monitor will be connected later.
      </div>
    </PageTransition>
  )
}
