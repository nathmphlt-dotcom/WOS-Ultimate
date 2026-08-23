import PageHeader from "../../components/PageHeader"
import PageTransition from "../../components/PageTransition"

export default function ScannerPage() {
  return (
    <PageTransition>
      <PageHeader
        title="System Scanner"
        description="Analyze your Windows system"
      />

      <div className="wos-empty-state">
        System Scanner will be connected in PART 3.
      </div>
    </PageTransition>
  )
}
