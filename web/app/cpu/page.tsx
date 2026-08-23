import PageHeader from "../../components/PageHeader"
import PageTransition from "../../components/PageTransition"

export default function CPUPage() {
  return (
    <PageTransition>
      <PageHeader
        title="CPU"
        description="Processor performance and monitoring"
      />

      <div className="wos-empty-state">
        CPU monitoring will be connected later.
      </div>
    </PageTransition>
  )
}
