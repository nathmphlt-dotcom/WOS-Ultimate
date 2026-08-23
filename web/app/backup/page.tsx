import PageHeader from "../../components/PageHeader"
import PageTransition from "../../components/PageTransition"

export default function BackupPage() {
  return (
    <PageTransition>
      <PageHeader
        title="Backup & Restore"
        description="System backup and rollback"
      />

      <div className="wos-empty-state">
        Backup and rollback system will be connected later.
      </div>
    </PageTransition>
  )
}
