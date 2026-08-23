"use client";

import GlassCard from "./GlassCard";

type Accent =
  | "purple"
  | "cyan"
  | "green"
  | "orange";

interface ActionCardProps {
  icon: string;
  title: string;
  description: string;
  accent?: Accent;
  onClick?: () => void;
}

export default function ActionCard({
  icon,
  title,
  description,
  accent = "purple",
  onClick,
}: ActionCardProps) {
  return (
    <GlassCard
      className={`wos-action-card accent-${accent}`}
    >
      <button
        type="button"
        className="action-card-button"
        onClick={onClick}
      >
        <div className="action-icon">
          {icon}
        </div>

        <h3>{title}</h3>

        <p>{description}</p>
      </button>
    </GlassCard>
  );
  }
