import PageHeader from "../../components/PageHeader"
import PageTransition from "../../components/PageTransition"

export default function TweaksPage() {
  return (
    <PageTransition>
      <PageHeader
        title="Windows Tweaks"
        description="Advanced Windows configuration"
      />

      <div className="wos-empty-state">
        Windows Tweaks will be connected later.
      </div>
    </PageTransition>
  )
}
