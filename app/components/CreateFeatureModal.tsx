"use client";

import { useState } from "react";
import { X, Check } from "lucide-react";
import type { Feature } from "../page";

interface CreateFeatureModalProps {
  onClose: () => void;
  onCreate: (feature: Omit<Feature, "id" | "votes" | "comments" | "date" | "userVote">) => void;
}

export default function CreateFeatureModal({ onClose, onCreate }: CreateFeatureModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Features");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !description.trim()) return;

    onCreate({
      title: title.trim(),
      description: description.trim(),
      status: "under-review",
      category,
      author: "You",
    });

    setShowSuccess(true);
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  return (
    <div className="modal-backdrop animate-fade-in" onClick={onClose}>
      <div className="modal animate-scale-in" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div 
          className="flex items-center justify-between" 
          style={{ 
            padding: "24px",
            borderBottom: "1px solid var(--color-border)"
          }}
        >
          <h2 style={{ fontSize: "20px", fontWeight: 700, color: "var(--color-foreground)" }}>
            Create Feature Request
          </h2>
          <button
            className="btn-icon"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ padding: "24px" }}>
          <div className="flex flex-col" style={{ gap: "20px" }}>
            {/* Title */}
            <div>
              <label className="label" style={{ marginBottom: "8px" }}>
                Title *
              </label>
              <input
                type="text"
                className="input"
                style={{ padding: "12px 16px" }}
                placeholder="Brief, descriptive title for the feature"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                autoFocus
              />
            </div>

            {/* Description */}
            <div>
              <label className="label" style={{ marginBottom: "8px" }}>
                Description *
              </label>
              <textarea
                className="textarea"
                style={{ padding: "12px 16px" }}
                placeholder="Describe what you'd like to see and why it would be valuable..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="label" style={{ marginBottom: "8px" }}>
                Category
              </label>
              <select
                className="select"
                style={{ padding: "12px 16px" }}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Features">Features</option>
                <option value="UI/UX">UI/UX</option>
                <option value="Integration">Integration</option>
                <option value="Productivity">Productivity</option>
                <option value="Platform">Platform</option>
                <option value="Notifications">Notifications</option>
              </select>
            </div>

            {/* Info box */}
            <div 
              style={{ 
                background: "var(--color-accent-light)",
                border: "1px solid var(--color-accent)",
                borderRadius: "8px",
                padding: "12px 16px",
                fontSize: "13px",
                color: "var(--color-accent)",
                lineHeight: "1.5"
              }}
            >
              <strong>Note:</strong> Your request will be reviewed by the team and made visible to the community for voting.
            </div>
          </div>

          {/* Footer */}
          <div 
            className="flex items-center justify-end" 
            style={{ 
              marginTop: "24px",
              paddingTop: "24px",
              borderTop: "1px solid var(--color-border)",
              gap: "12px"
            }}
          >
            <button
              type="button"
              className="btn-secondary"
              style={{ padding: "10px 20px" }}
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary flex items-center"
              style={{ padding: "10px 24px", gap: "8px" }}
              disabled={!title.trim() || !description.trim()}
            >
              {showSuccess ? (
                <>
                  <Check size={18} />
                  Created!
                </>
              ) : (
                "Create Request"
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Success Toast */}
      {showSuccess && (
        <div className="toast toast-success animate-slide-up" style={{ padding: "16px 20px", gap: "12px" }}>
          <Check size={20} />
          <span style={{ fontSize: "14px", fontWeight: 500 }}>
            Feature request created successfully!
          </span>
        </div>
      )}
    </div>
  );
}

