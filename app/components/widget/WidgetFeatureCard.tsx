"use client";

import { ChevronUp } from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  votes: number;
  status: "live" | "planned" | "in-progress";
  category: string;
  userVoted: boolean;
}

interface WidgetFeatureCardProps {
  feature: Feature;
  onVote: (featureId: string) => void;
}

export default function WidgetFeatureCard({ feature, onVote }: WidgetFeatureCardProps) {
  const getStatusColor = (status: Feature["status"]) => {
    switch (status) {
      case "live":
        return { bg: "var(--color-success-bg)", color: "var(--color-success)", label: "✓ Live" };
      case "in-progress":
        return { bg: "var(--color-accent-light)", color: "var(--color-accent)", label: "In Progress" };
      case "planned":
        return { bg: "var(--color-warning-bg)", color: "var(--color-warning)", label: "Planned" };
    }
  };

  const statusStyle = getStatusColor(feature.status);

  return (
    <div
      className="card flex"
      style={{
        padding: "14px",
        gap: "12px",
        cursor: "pointer",
        transition: "all 0.2s",
      }}
    >
      {/* Vote Button */}
      <button
        className={`vote-btn ${feature.userVoted ? "upvoted" : ""}`}
        style={{
          width: "52px",
          minHeight: "64px",
          flexDirection: "column",
          gap: "4px",
          padding: "8px",
        }}
        onClick={(e) => {
          e.stopPropagation();
          onVote(feature.id);
        }}
      >
        <ChevronUp size={20} strokeWidth={2.5} />
        <span style={{ fontSize: "16px", fontWeight: 700 }}>{feature.votes}</span>
      </button>

      {/* Content */}
      <div className="flex-1 flex flex-col" style={{ gap: "8px", minWidth: 0 }}>
        <div>
          <h3
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: "var(--color-foreground)",
              lineHeight: "1.4",
              marginBottom: "4px",
            }}
          >
            {feature.title}
          </h3>
          <p
            style={{
              fontSize: "13px",
              color: "var(--color-muted)",
              lineHeight: "1.5",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {feature.description}
          </p>
        </div>

        <div className="flex items-center" style={{ gap: "8px" }}>
          <div
            style={{
              background: statusStyle.bg,
              color: statusStyle.color,
              fontSize: "11px",
              fontWeight: 600,
              padding: "3px 8px",
              borderRadius: "4px",
            }}
          >
            {statusStyle.label}
          </div>
          <div className="category-tag" style={{ padding: "3px 8px", fontSize: "11px" }}>
            {feature.category}
          </div>
        </div>
      </div>
    </div>
  );
}

