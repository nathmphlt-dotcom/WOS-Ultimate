import PageHeader from "../../components/PageHeader"
import PageTransition from "../../components/PageTransition"

export default function DashboardPage() {
  return (
    <PageTransition>
      <PageHeader
        title="Dashboard"
        description="Overview of your Windows system"
        badge="SYSTEM"
      />

      <div className="wos-page-grid">
        <div className="wos-placeholder-card">
          <span>CPU</span>
          <strong>--%</strong>
          <small>Waiting for System Monitor</small>
        </div>

        <div className="wos-placeholder-card">
          <span>GPU</span>
          <strong>--%</strong>
          <small>Waiting for System Monitor</small>
        </div>

        <div className="wos-placeholder-card">
          <span>RAM</span>
          <strong>-- GB</strong>
          <small>Waiting for System Monitor</small>
        </div>

        <div className="wos-placeholder-card">
          <span>NETWORK</span>
          <strong>-- ms</strong>
          <small>Waiting for Network Monitor</small>
        </div>
      </div>
    </PageTransition>
  )
}
