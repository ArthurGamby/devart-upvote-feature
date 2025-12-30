"use client";

import { 
  LayoutGrid, 
  Clock, 
  Loader, 
  CheckCircle2, 
  FileSearch,
  Code,
  Zap
} from "lucide-react";
import type { Feature } from "../page";

interface SidebarProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
  features: Feature[];
}

export default function Sidebar({ selectedFilter, onFilterChange, features }: SidebarProps) {
  const filterItems = [
    { id: "all", label: "All Requests", icon: LayoutGrid },
    { id: "under-review", label: "Under Review", icon: FileSearch },
    { id: "planned", label: "Planned", icon: Clock },
    { id: "in-progress", label: "In Progress", icon: Loader },
    { id: "completed", label: "Completed", icon: CheckCircle2 },
  ];

  const getFilterCount = (filterId: string) => {
    if (filterId === "all") return features.length;
    return features.filter((f) => f.status === filterId).length;
  };

  return (
    <aside className="sidebar">
      <div style={{ padding: "24px 16px" }}>
        <div style={{ marginBottom: "24px" }}>
          <div 
            style={{ 
              fontSize: "12px", 
              fontWeight: 600, 
              color: "var(--color-muted)", 
              marginBottom: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.5px"
            }}
          >
            Status
          </div>
          
          <div className="flex flex-col" style={{ gap: "4px" }}>
            {filterItems.map((item) => {
              const Icon = item.icon;
              const count = getFilterCount(item.id);
              
              return (
                <button
                  key={item.id}
                  className={`sidebar-item ${selectedFilter === item.id ? "active" : ""}`}
                  style={{ padding: "10px 12px", gap: "10px" }}
                  onClick={() => onFilterChange(item.id)}
                >
                  <Icon size={18} />
                  <span className="flex-1" style={{ textAlign: "left" }}>
                    {item.label}
                  </span>
                  <span 
                    style={{ 
                      fontSize: "12px", 
                      fontWeight: 600,
                      color: selectedFilter === item.id ? "var(--color-accent)" : "var(--color-muted)"
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="divider-h" style={{ margin: "24px 0" }} />

        <div>
          <div 
            style={{ 
              fontSize: "12px", 
              fontWeight: 600, 
              color: "var(--color-muted)", 
              marginBottom: "16px",
              textTransform: "uppercase",
              letterSpacing: "0.5px"
            }}
          >
            Quick Stats
          </div>
          
          <div className="flex flex-col" style={{ gap: "16px" }}>
            <div 
              className="card" 
              style={{ 
                padding: "16px",
                background: "linear-gradient(135deg, var(--color-accent-light), transparent)"
              }}
            >
              <div className="flex items-center" style={{ gap: "12px", marginBottom: "8px" }}>
                <div 
                  style={{ 
                    width: "32px", 
                    height: "32px",
                    background: "var(--color-accent-light)",
                    border: "1px solid var(--color-accent)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Zap size={16} color="var(--color-accent)" />
                </div>
                <div>
                  <div style={{ fontSize: "24px", fontWeight: 700, color: "var(--color-accent)" }}>
                    {features.reduce((sum, f) => sum + f.votes, 0)}
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--color-muted)" }}>
                    Total Votes
                  </div>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: "16px" }}>
              <div className="flex items-center" style={{ gap: "12px" }}>
                <Code size={20} color="var(--color-muted)" />
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-foreground)" }}>
                    API Integration
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--color-muted)", marginTop: "2px" }}>
                    View docs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

