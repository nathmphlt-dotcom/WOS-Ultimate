import PageHeader from "../../components/PageHeader"
import PageTransition from "../../components/PageTransition"

export default function ProcessesPage() {
  return (
    <PageTransition>
      <PageHeader
        title="Processes"
        description="Manage running processes"
      />

      <div className="wos-empty-state">
        Process manager will be connected later.
      </div>
    </PageTransition>
  )
}
