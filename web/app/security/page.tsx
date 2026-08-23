import PageHeader from "../../components/PageHeader"
import PageTransition from "../../components/PageTransition"

export default function SecurityPage() {
  return (
    <PageTransition>
      <PageHeader
        title="Security"
        description="Security and privilege management"
        badge="SECURITY"
      />

      <div className="wos-empty-state">
        Security system will be implemented in PART 2.
      </div>
    </PageTransition>
  )
}
