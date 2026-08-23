"use client";

import GlassCard from "./GlassCard";
import StatusBadge from "./StatusBadge";

interface StatCardProps {
  title: string;
  value: string;
  unit?: string;
  icon: string;
  status?: "WAITING" | "OPTIMIZED" | "WARNING";
}

export default function StatCard({
  title,
  value,
  unit = "",
  icon,
  status = "WAITING",
}: StatCardProps) {
  return (
    <GlassCard className="wos-stat-card">
      <div className="stat-top">
        <div className="stat-icon">
          {icon}
        </div>

        <StatusBadge status={status} />
      </div>

      <div className="stat-title">
        {title}
      </div>

      <div className="stat-value">
        {value}

        {unit && (
          <span>{unit}</span>
        )}
      </div>

      <div className="stat-line">
        <div />
      </div>
    </GlassCard>
  );
}
