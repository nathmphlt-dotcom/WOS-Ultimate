"use client";

interface TopbarProps {
  page: string;
}

export default function Topbar({
  page,
}: TopbarProps) {
  return (
    <header className="topbar">
      <div>
        <div className="page-kicker">
          WINDOWS OPTIMIZER SUITE
        </div>

        <h1>{page}</h1>
      </div>

      <div className="top-actions">
        <button
          type="button"
          className="icon-button"
          aria-label="Search"
        >
          ⌕
        </button>

        <button
          type="button"
          className="icon-button notification"
          aria-label="Notifications"
        >
          ◇
          <span />
        </button>

        <div className="admin-badge">
          <div className="admin-dot" />

          <div>
            <strong>ADMIN</strong>
            <small>
              Privilege status
            </small>
          </div>
        </div>
      </div>
    </header>
  );
}
