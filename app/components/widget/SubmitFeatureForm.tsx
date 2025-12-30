"use client";

import { useState } from "react";
import { ArrowLeft, Send } from "lucide-react";

interface SubmitFeatureFormProps {
  onSubmit: (title: string, description: string, category: string) => void;
  onCancel: () => void;
}

export default function SubmitFeatureForm({ onSubmit, onCancel }: SubmitFeatureFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Features");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      onSubmit(title.trim(), description.trim(), category);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <button
        className="btn-ghost flex items-center"
        style={{ padding: "8px 12px", gap: "6px", marginBottom: "20px" }}
        onClick={onCancel}
      >
        <ArrowLeft size={16} />
        Back
      </button>

      <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: "20px" }}>
        <div>
          <label className="label" style={{ marginBottom: "8px" }}>
            Feature Title *
          </label>
          <input
            type="text"
            className="input"
            style={{ padding: "10px 14px", fontSize: "14px" }}
            placeholder="E.g., Dark mode toggle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            autoFocus
          />
        </div>

        <div>
          <label className="label" style={{ marginBottom: "8px" }}>
            Description *
          </label>
          <textarea
            className="textarea"
            style={{ padding: "10px 14px", fontSize: "14px", minHeight: "120px" }}
            placeholder="Describe the feature and why it would be valuable..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="label" style={{ marginBottom: "8px" }}>
            Category
          </label>
          <select
            className="select"
            style={{ padding: "10px 14px", fontSize: "14px" }}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Features">Features</option>
            <option value="UI/UX">UI/UX</option>
            <option value="Integration">Integration</option>
            <option value="Productivity">Productivity</option>
            <option value="Platform">Platform</option>
            <option value="Security">Security</option>
          </select>
        </div>

        <div
          style={{
            background: "var(--color-accent-light)",
            border: "1px solid var(--color-accent)",
            borderRadius: "8px",
            padding: "12px 14px",
            fontSize: "12px",
            color: "var(--color-accent)",
            lineHeight: "1.5",
          }}
        >
          💡 <strong>Tip:</strong> Be specific and explain the problem this feature would solve
        </div>

        <button
          type="submit"
          className="btn-primary flex items-center"
          style={{ padding: "12px", gap: "8px", justifyContent: "center" }}
          disabled={!title.trim() || !description.trim()}
        >
          <Send size={18} />
          Submit Request
        </button>
      </form>
    </div>
  );
}

