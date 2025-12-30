"use client";

import { useState, useEffect } from "react";
import { MessageSquare, X, ChevronUp, Plus, Search, Filter, TrendingUp, Clock } from "lucide-react";
import WidgetFeatureCard from "./WidgetFeatureCard";
import SubmitFeatureForm from "./SubmitFeatureForm";

interface VoteWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
}

interface Feature {
  id: string;
  title: string;
  description: string;
  votes: number;
  status: "live" | "planned" | "in-progress";
  category: string;
  userVoted: boolean;
}

const demoFeatures: Feature[] = [
  {
    id: "1",
    title: "Dark mode support",
    description: "Add a toggle to switch between light and dark themes",
    votes: 124,
    status: "in-progress",
    category: "UI/UX",
    userVoted: true,
  },
  {
    id: "2",
    title: "Keyboard shortcuts",
    description: "Implement customizable keyboard shortcuts for common actions",
    votes: 89,
    status: "planned",
    category: "Productivity",
    userVoted: false,
  },
  {
    id: "3",
    title: "Export to CSV",
    description: "Allow users to export data to CSV format",
    votes: 156,
    status: "live",
    category: "Features",
    userVoted: false,
  },
  {
    id: "4",
    title: "Mobile app",
    description: "Create native iOS and Android apps",
    votes: 203,
    status: "planned",
    category: "Platform",
    userVoted: false,
  },
  {
    id: "5",
    title: "Two-factor authentication",
    description: "Add 2FA for enhanced account security",
    votes: 67,
    status: "in-progress",
    category: "Security",
    userVoted: false,
  },
  {
    id: "6",
    title: "API webhooks",
    description: "Trigger webhooks when specific events occur",
    votes: 78,
    status: "planned",
    category: "Integration",
    userVoted: false,
  },
];

export default function VoteWidget({ isOpen, onToggle }: VoteWidgetProps) {
  const [features, setFeatures] = useState<Feature[]>(demoFeatures);
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [sortBy, setSortBy] = useState<"votes" | "recent">("votes");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "live" | "planned" | "in-progress">("all");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleVote = (featureId: string) => {
    setFeatures((prev) =>
      prev.map((f) => {
        if (f.id === featureId) {
          const newVoted = !f.userVoted;
          return {
            ...f,
            votes: f.votes + (newVoted ? 1 : -1),
            userVoted: newVoted,
          };
        }
        return f;
      })
    );

    const feature = features.find((f) => f.id === featureId);
    if (feature) {
      setToastMessage(feature.userVoted ? "Vote removed" : "Thanks for voting! 🎉");
      setShowToast(true);
    }
  };

  const handleSubmitFeature = (title: string, description: string, category: string) => {
    const newFeature: Feature = {
      id: Date.now().toString(),
      title,
      description,
      votes: 1,
      status: "planned",
      category,
      userVoted: true,
    };
    setFeatures((prev) => [newFeature, ...prev]);
    setShowSubmitForm(false);
    setToastMessage("Feature request submitted! 🚀");
    setShowToast(true);
  };

  const filteredAndSortedFeatures = features
    .filter((f) => {
      if (filterStatus !== "all" && f.status !== filterStatus) return false;
      if (searchQuery && !f.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "votes") return b.votes - a.votes;
      return parseInt(b.id) - parseInt(a.id);
    });

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className="animate-scale-in"
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #00d4ff, #00a8cc)",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 30px rgba(0, 212, 255, 0.4)",
            zIndex: 1000,
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <MessageSquare size={28} color="#0a0e14" strokeWidth={2} />
        </button>
      )}

      {/* Slide-in Panel */}
      {isOpen && (
        <>
          {/* Backdrop for mobile */}
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0, 0, 0, 0.5)",
              zIndex: 999,
              opacity: isOpen ? 1 : 0,
              transition: "opacity 0.3s",
            }}
            onClick={onToggle}
          />

          {/* Panel */}
          <div
            className="animate-slide-up"
            style={{
              position: "fixed",
              right: "0",
              top: "0",
              bottom: "0",
              width: "440px",
              maxWidth: "100vw",
              background: "var(--color-card)",
              boxShadow: "-10px 0 50px rgba(0, 0, 0, 0.3)",
              zIndex: 1000,
              display: "flex",
              flexDirection: "column",
              animation: "slideInRight 0.3s ease-out",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "24px",
                borderBottom: "1px solid var(--color-border)",
                background: "var(--color-background-secondary)",
              }}
            >
              <div className="flex items-center justify-between" style={{ marginBottom: "8px" }}>
                <div className="flex items-center" style={{ gap: "10px" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      background: "linear-gradient(135deg, #00d4ff, #00a8cc)",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MessageSquare size={18} color="#0a0e14" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-foreground)" }}>
                      Feature Requests
                    </h2>
                    <p style={{ fontSize: "13px", color: "var(--color-muted)", marginTop: "2px" }}>
                      Vote on what we build next
                    </p>
                  </div>
                </div>

                <button
                  onClick={onToggle}
                  className="btn-icon"
                  style={{
                    color: "var(--color-muted)",
                  }}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Controls */}
            {!showSubmitForm && (
              <div style={{ padding: "16px", borderBottom: "1px solid var(--color-border)" }}>
                {/* Search */}
                <div className="relative flex items-center" style={{ marginBottom: "12px" }}>
                  <Search
                    size={16}
                    style={{
                      position: "absolute",
                      left: "12px",
                      color: "var(--color-muted)",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Search features..."
                    className="input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      paddingLeft: "38px",
                      paddingRight: "12px",
                      paddingTop: "8px",
                      paddingBottom: "8px",
                      fontSize: "13px",
                    }}
                  />
                </div>

                {/* Filters and Sort */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center" style={{ gap: "6px" }}>
                    <button
                      className={`badge ${filterStatus === "all" ? "badge-in-progress" : "category-tag"}`}
                      style={{ padding: "6px 12px", border: "1px solid var(--color-border)", cursor: "pointer" }}
                      onClick={() => setFilterStatus("all")}
                    >
                      All
                    </button>
                    <button
                      className={`badge ${filterStatus === "live" ? "badge-completed" : "category-tag"}`}
                      style={{ padding: "6px 12px", border: "1px solid var(--color-border)", cursor: "pointer" }}
                      onClick={() => setFilterStatus("live")}
                    >
                      Live
                    </button>
                    <button
                      className={`badge ${filterStatus === "in-progress" ? "badge-in-progress" : "category-tag"}`}
                      style={{ padding: "6px 12px", border: "1px solid var(--color-border)", cursor: "pointer" }}
                      onClick={() => setFilterStatus("in-progress")}
                    >
                      In Progress
                    </button>
                  </div>

                  <button
                    className="btn-ghost flex items-center"
                    style={{ padding: "6px 10px", gap: "4px", fontSize: "12px" }}
                    onClick={() => setSortBy(sortBy === "votes" ? "recent" : "votes")}
                  >
                    {sortBy === "votes" ? <TrendingUp size={14} /> : <Clock size={14} />}
                    {sortBy === "votes" ? "Top" : "New"}
                  </button>
                </div>
              </div>
            )}

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto" style={{ background: "var(--color-background)" }}>
              {showSubmitForm ? (
                <SubmitFeatureForm
                  onSubmit={handleSubmitFeature}
                  onCancel={() => setShowSubmitForm(false)}
                />
              ) : (
                <div style={{ padding: "16px" }}>
                  <div className="flex flex-col" style={{ gap: "12px" }}>
                    {filteredAndSortedFeatures.map((feature) => (
                      <WidgetFeatureCard
                        key={feature.id}
                        feature={feature}
                        onVote={handleVote}
                      />
                    ))}
                  </div>

                  {filteredAndSortedFeatures.length === 0 && (
                    <div
                      className="flex flex-col items-center justify-center"
                      style={{ padding: "60px 20px" }}
                    >
                      <Search size={40} color="var(--color-muted)" />
                      <p style={{ fontSize: "14px", color: "var(--color-muted)", marginTop: "12px" }}>
                        No features found
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            {!showSubmitForm && (
              <div
                style={{
                  padding: "16px",
                  borderTop: "1px solid var(--color-border)",
                  background: "var(--color-background-secondary)",
                }}
              >
                <button
                  className="btn-primary flex items-center"
                  style={{ width: "100%", padding: "12px", gap: "8px", justifyContent: "center" }}
                  onClick={() => setShowSubmitForm(true)}
                >
                  <Plus size={18} />
                  Request a Feature
                </button>

                <div
                  style={{
                    marginTop: "12px",
                    textAlign: "center",
                    fontSize: "11px",
                    color: "var(--color-muted)",
                  }}
                >
                  Powered by <strong style={{ color: "var(--color-accent)" }}>VoteHub</strong>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* Toast Notification */}
      {showToast && (
        <div
          className="toast toast-success animate-slide-up"
          style={{
            padding: "14px 20px",
            gap: "10px",
            bottom: isOpen ? "auto" : "100px",
            top: isOpen ? "24px" : "auto",
            right: isOpen ? "460px" : "24px",
          }}
        >
          <span style={{ fontSize: "14px", fontWeight: 500 }}>{toastMessage}</span>
        </div>
      )}

      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}

