/**
 * VoteHub - Feature Request Management Demo
 * Theme: Dark charcoal with electric cyan and coral accents
 * 
 * This is a demo mockup. Features are simulated for presentation purposes.
 * Shows a developer tool for collecting and managing feature requests with community voting.
 */

"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import FeatureList from "./components/FeatureList";
import CreateFeatureModal from "./components/CreateFeatureModal";

export interface Feature {
  id: string;
  title: string;
  description: string;
  status: "planned" | "in-progress" | "completed" | "under-review";
  category: string;
  votes: number;
  comments: number;
  author: string;
  date: string;
  userVote: "up" | "down" | null;
}

const initialFeatures: Feature[] = [
  {
    id: "1",
    title: "Dark mode support",
    description: "Add a toggle to switch between light and dark themes throughout the entire application.",
    status: "in-progress",
    category: "UI/UX",
    votes: 124,
    comments: 18,
    author: "Sarah Chen",
    date: "2024-01-15",
    userVote: "up",
  },
  {
    id: "2",
    title: "Keyboard shortcuts",
    description: "Implement customizable keyboard shortcuts for common actions to improve productivity.",
    status: "planned",
    category: "Productivity",
    votes: 89,
    comments: 12,
    author: "Mike Johnson",
    date: "2024-01-18",
    userVote: null,
  },
  {
    id: "3",
    title: "Export to CSV",
    description: "Allow users to export all feature requests and voting data to CSV format for external analysis.",
    status: "completed",
    category: "Integration",
    votes: 156,
    comments: 24,
    author: "Emma Williams",
    date: "2024-01-10",
    userVote: null,
  },
  {
    id: "4",
    title: "Email notifications",
    description: "Send email alerts when features change status or receive new comments.",
    status: "under-review",
    category: "Notifications",
    votes: 67,
    comments: 9,
    author: "Alex Rodriguez",
    date: "2024-01-20",
    userVote: null,
  },
  {
    id: "5",
    title: "Mobile app",
    description: "Create native iOS and Android apps for managing feature requests on the go.",
    status: "planned",
    category: "Platform",
    votes: 203,
    comments: 45,
    author: "James Lee",
    date: "2024-01-12",
    userVote: null,
  },
  {
    id: "6",
    title: "Advanced filtering",
    description: "Add more filter options like date range, vote count, and custom tags.",
    status: "in-progress",
    category: "Features",
    votes: 92,
    comments: 15,
    author: "Lisa Park",
    date: "2024-01-19",
    userVote: null,
  },
  {
    id: "7",
    title: "API webhooks",
    description: "Trigger webhooks when specific events occur (new feature, status change, etc.).",
    status: "planned",
    category: "Integration",
    votes: 78,
    comments: 11,
    author: "David Kim",
    date: "2024-01-17",
    userVote: null,
  },
  {
    id: "8",
    title: "Markdown support in descriptions",
    description: "Allow rich text formatting in feature descriptions using Markdown syntax.",
    status: "completed",
    category: "Features",
    votes: 134,
    comments: 22,
    author: "Rachel Green",
    date: "2024-01-08",
    userVote: null,
  },
];

export default function Home() {
  const [features, setFeatures] = useState<Feature[]>(initialFeatures);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [sortBy, setSortBy] = useState<"votes" | "recent">("votes");

  const handleVote = (featureId: string, voteType: "up" | "down") => {
    setFeatures((prev) =>
      prev.map((feature) => {
        if (feature.id === featureId) {
          let newVotes = feature.votes;
          let newUserVote: "up" | "down" | null = voteType;

          // Handle vote logic
          if (feature.userVote === voteType) {
            // Unvote
            newVotes -= voteType === "up" ? 1 : -1;
            newUserVote = null;
          } else if (feature.userVote) {
            // Change vote
            newVotes += voteType === "up" ? 2 : -2;
          } else {
            // New vote
            newVotes += voteType === "up" ? 1 : -1;
          }

          return { ...feature, votes: newVotes, userVote: newUserVote };
        }
        return feature;
      })
    );
  };

  const handleCreateFeature = (newFeature: Omit<Feature, "id" | "votes" | "comments" | "date" | "userVote">) => {
    const feature: Feature = {
      ...newFeature,
      id: Date.now().toString(),
      votes: 1,
      comments: 0,
      date: new Date().toISOString().split("T")[0],
      userVote: "up",
    };
    setFeatures((prev) => [feature, ...prev]);
    setIsCreateModalOpen(false);
  };

  return (
    <div className="flex flex-col" style={{ height: "100vh" }}>
      <Navbar onCreateClick={() => setIsCreateModalOpen(true)} />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
          features={features}
        />
        
        <FeatureList
          features={features}
          selectedFilter={selectedFilter}
          sortBy={sortBy}
          onSortChange={setSortBy}
          onVote={handleVote}
        />
      </div>

      {isCreateModalOpen && (
        <CreateFeatureModal
          onClose={() => setIsCreateModalOpen(false)}
          onCreate={handleCreateFeature}
        />
      )}
    </div>
  );
}
