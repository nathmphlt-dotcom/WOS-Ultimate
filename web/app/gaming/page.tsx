import PageHeader from "../../components/PageHeader"
import PageTransition from "../../components/PageTransition"

export default function GamingPage() {
  return (
    <PageTransition>
      <PageHeader
        title="Gaming"
        description="Gaming optimization center"
      />

      <div className="wos-empty-state">
        Gaming optimization modules will be added later.
      </div>
    </PageTransition>
  )
}
