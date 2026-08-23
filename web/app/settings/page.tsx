import PageHeader from "../../components/PageHeader"
import PageTransition from "../../components/PageTransition"

export default function SettingsPage() {
  return (
    <PageTransition>
      <PageHeader
        title="Settings"
        description="Configure WOS Ultimate"
      />

      <div className="wos-empty-state">
        WOS settings will be implemented here.
      </div>
    </PageTransition>
  )
}
