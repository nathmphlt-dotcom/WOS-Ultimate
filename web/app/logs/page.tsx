import PageHeader from "../../components/PageHeader"
import PageTransition from "../../components/PageTransition"

export default function LogsPage() {
  return (
    <PageTransition>
      <PageHeader
        title="Logs"
        description="View WOS operation history"
      />

      <div className="wos-empty-state">
        WOS activity logs will appear here.
      </div>
    </PageTransition>
  )
}
