"use client";

import { ArrowUpDown, Search } from "lucide-react";
import type { Feature } from "../page";
import FeatureCard from "./FeatureCard";

interface FeatureListProps {
  features: Feature[];
  selectedFilter: string;
  sortBy: "votes" | "recent";
  onSortChange: (sort: "votes" | "recent") => void;
  onVote: (featureId: string, voteType: "up" | "down") => void;
}

export default function FeatureList({
  features,
  selectedFilter,
  sortBy,
  onSortChange,
  onVote,
}: FeatureListProps) {
  // Filter features
  const filteredFeatures = features.filter((feature) => {
    if (selectedFilter === "all") return true;
    return feature.status === selectedFilter;
  });

  // Sort features
  const sortedFeatures = [...filteredFeatures].sort((a, b) => {
    if (sortBy === "votes") {
      return b.votes - a.votes;
    } else {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  return (
    <main className="flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <div 
        className="flex items-center justify-between" 
        style={{ 
          padding: "24px 32px",
          borderBottom: "1px solid var(--color-border)",
          background: "var(--color-card)"
        }}
      >
        <div>
          <h1 style={{ fontSize: "24px", fontWeight: 700, color: "var(--color-foreground)", marginBottom: "4px" }}>
            Feature Requests
          </h1>
          <p style={{ fontSize: "14px", color: "var(--color-muted)" }}>
            {filteredFeatures.length} {filteredFeatures.length === 1 ? "request" : "requests"}
          </p>
        </div>

        <div className="flex items-center" style={{ gap: "12px" }}>
          <div className="relative flex items-center">
            <Search 
              size={18} 
              style={{ 
                position: "absolute", 
                left: "12px", 
                color: "var(--color-muted)" 
              }} 
            />
            <input
              type="text"
              placeholder="Search requests..."
              className="input"
              style={{ paddingLeft: "40px", paddingRight: "16px", paddingTop: "10px", paddingBottom: "10px", width: "280px" }}
            />
          </div>

          <button
            className="btn-secondary flex items-center"
            style={{ padding: "10px 16px", gap: "8px" }}
            onClick={() => onSortChange(sortBy === "votes" ? "recent" : "votes")}
          >
            <ArrowUpDown size={16} />
            {sortBy === "votes" ? "Most Votes" : "Most Recent"}
          </button>
        </div>
      </div>

      {/* Feature List */}
      <div 
        className="flex-1 overflow-y-auto" 
        style={{ 
          padding: "24px 32px",
          background: "var(--color-background)"
        }}
      >
        <div className="flex flex-col" style={{ gap: "16px" }}>
          {sortedFeatures.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              onVote={onVote}
            />
          ))}

          {sortedFeatures.length === 0 && (
            <div 
              className="flex flex-col items-center justify-center" 
              style={{ padding: "80px 20px" }}
            >
              <div 
                style={{ 
                  width: "80px", 
                  height: "80px",
                  background: "var(--color-background-secondary)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px"
                }}
              >
                <Search size={32} color="var(--color-muted)" />
              </div>
              <div style={{ fontSize: "18px", fontWeight: 600, color: "var(--color-foreground)", marginBottom: "8px" }}>
                No requests found
              </div>
              <div style={{ fontSize: "14px", color: "var(--color-muted)" }}>
                Try adjusting your filters or create a new request
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

