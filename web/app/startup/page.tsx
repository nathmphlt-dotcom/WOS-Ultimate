import PageHeader from "../../components/PageHeader"
import PageTransition from "../../components/PageTransition"

export default function StartupPage() {
  return (
    <PageTransition>
      <PageHeader
        title="Startup"
        description="Manage Windows startup applications"
      />

      <div className="wos-empty-state">
        Startup manager will be connected later.
      </div>
    </PageTransition>
  )
}
