import PageHeader from "../../components/PageHeader"
import PageTransition from "../../components/PageTransition"

export default function GPUPage() {
  return (
    <PageTransition>
      <PageHeader
        title="GPU"
        description="Graphics performance and configuration"
      />

      <div className="wos-empty-state">
        GPU monitoring and optimization will be connected later.
      </div>
    </PageTransition>
  )
}
