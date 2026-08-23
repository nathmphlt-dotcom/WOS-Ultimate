"use client"

import React from "react"

type PageHeaderProps = {
  title: string
  description?: string
  badge?: string
}

export default function PageHeader({
  title,
  description,
  badge,
}: PageHeaderProps) {
  return (
    <header className="wos-page-header">
      <div>
        <div className="wos-page-title-row">
          <h1>{title}</h1>

          {badge && (
            <span className="wos-page-badge">
              {badge}
            </span>
          )}
        </div>

        {description && (
          <p>{description}</p>
        )}
      </div>
    </header>
  )
}
