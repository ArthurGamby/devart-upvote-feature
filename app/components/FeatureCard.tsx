"use client";

import { ChevronUp, ChevronDown, MessageCircle, Calendar, User } from "lucide-react";
import type { Feature } from "../page";

interface FeatureCardProps {
  feature: Feature;
  onVote: (featureId: string, voteType: "up" | "down") => void;
}

export default function FeatureCard({ feature, onVote }: FeatureCardProps) {
  const getStatusBadgeClass = (status: Feature["status"]) => {
    switch (status) {
      case "planned":
        return "badge-planned";
      case "in-progress":
        return "badge-in-progress";
      case "completed":
        return "badge-completed";
      case "under-review":
        return "badge-under-review";
    }
  };

  const getStatusLabel = (status: Feature["status"]) => {
    switch (status) {
      case "planned":
        return "Planned";
      case "in-progress":
        return "In Progress";
      case "completed":
        return "Completed";
      case "under-review":
        return "Under Review";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  return (
    <div className="card flex" style={{ padding: "20px", gap: "20px" }}>
      {/* Vote Section */}
      <div className="flex flex-col items-center" style={{ gap: "8px" }}>
        <button
          className={`vote-btn ${feature.userVote === "up" ? "upvoted" : ""}`}
          style={{ width: "44px", height: "44px" }}
          onClick={() => onVote(feature.id, "up")}
        >
          <ChevronUp size={20} strokeWidth={2.5} />
        </button>
        
        <div 
          style={{ 
            fontSize: "18px", 
            fontWeight: 700, 
            color: feature.userVote === "up" 
              ? "var(--color-accent)" 
              : feature.userVote === "down" 
              ? "var(--color-secondary)" 
              : "var(--color-foreground)"
          }}
        >
          {feature.votes}
        </div>
        
        <button
          className={`vote-btn ${feature.userVote === "down" ? "downvoted" : ""}`}
          style={{ width: "44px", height: "44px" }}
          onClick={() => onVote(feature.id, "down")}
        >
          <ChevronDown size={20} strokeWidth={2.5} />
        </button>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col" style={{ gap: "12px" }}>
        <div>
          <div className="flex items-start justify-between" style={{ marginBottom: "8px" }}>
            <h3 
              className="cursor-pointer" 
              style={{ 
                fontSize: "18px", 
                fontWeight: 600, 
                color: "var(--color-foreground)",
                lineHeight: "1.4"
              }}
            >
              {feature.title}
            </h3>
            
            <div className={`badge ${getStatusBadgeClass(feature.status)}`} style={{ padding: "4px 10px" }}>
              {getStatusLabel(feature.status)}
            </div>
          </div>

          <p style={{ fontSize: "14px", color: "var(--color-muted)", lineHeight: "1.6" }}>
            {feature.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: "16px" }}>
            <div className="category-tag" style={{ padding: "4px 10px" }}>
              {feature.category}
            </div>

            <div className="flex items-center" style={{ gap: "6px", color: "var(--color-muted)", fontSize: "13px" }}>
              <MessageCircle size={14} />
              <span>{feature.comments} {feature.comments === 1 ? "comment" : "comments"}</span>
            </div>

            <div className="flex items-center" style={{ gap: "6px", color: "var(--color-muted)", fontSize: "13px" }}>
              <Calendar size={14} />
              <span>{formatDate(feature.date)}</span>
            </div>
          </div>

          <div className="flex items-center" style={{ gap: "8px" }}>
            <User size={14} color="var(--color-muted)" />
            <span style={{ fontSize: "13px", color: "var(--color-muted)" }}>
              {feature.author}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

