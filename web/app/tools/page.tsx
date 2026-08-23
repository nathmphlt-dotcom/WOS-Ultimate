import PageHeader from "../../components/PageHeader"
import PageTransition from "../../components/PageTransition"

export default function ToolsPage() {
  return (
    <PageTransition>
      <PageHeader
        title="System Tools"
        description="Advanced Windows system utilities"
      />

      <div className="wos-empty-state">
        Advanced system tools will be connected later.
      </div>
    </PageTransition>
  )
}
