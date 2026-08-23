import PageHeader from "../../components/PageHeader"
import PageTransition from "../../components/PageTransition"

export default function OptimizerPage() {
  return (
    <PageTransition>
      <PageHeader
        title="Optimizer"
        description="Optimize Windows performance"
      />

      <div className="wos-empty-state">
        Optimization Engine will be connected here.
      </div>
    </PageTransition>
  )
}
