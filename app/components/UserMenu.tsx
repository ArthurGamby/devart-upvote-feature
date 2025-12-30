"use client";

import { useState } from "react";
import { User, Settings, CreditCard, LogOut } from "lucide-react";

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="avatar cursor-pointer"
        style={{ width: "36px", height: "36px" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        JD
      </button>

      {isOpen && (
        <>
          <div
            style={{
              position: "fixed",
              inset: "0",
              zIndex: 40,
            }}
            onClick={() => setIsOpen(false)}
          />
          <div
            className="dropdown animate-slide-down"
            style={{
              top: "calc(100% + 8px)",
              right: "0",
              width: "220px",
            }}
          >
            <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--color-border)" }}>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--color-foreground)" }}>
                John Doe
              </div>
              <div style={{ fontSize: "13px", color: "var(--color-muted)", marginTop: "2px" }}>
                john@company.com
              </div>
            </div>

            <div style={{ padding: "8px" }}>
              <button
                className="flex items-center btn-ghost"
                style={{ 
                  width: "100%", 
                  padding: "10px 12px", 
                  gap: "12px",
                  justifyContent: "flex-start"
                }}
              >
                <User size={16} />
                <span style={{ fontSize: "14px" }}>Profile</span>
              </button>

              <button
                className="flex items-center btn-ghost"
                style={{ 
                  width: "100%", 
                  padding: "10px 12px", 
                  gap: "12px",
                  justifyContent: "flex-start"
                }}
              >
                <Settings size={16} />
                <span style={{ fontSize: "14px" }}>Settings</span>
              </button>

              <button
                className="flex items-center btn-ghost"
                style={{ 
                  width: "100%", 
                  padding: "10px 12px", 
                  gap: "12px",
                  justifyContent: "flex-start"
                }}
              >
                <CreditCard size={16} />
                <span style={{ fontSize: "14px" }}>Billing</span>
              </button>
            </div>

            <div className="divider-h" />

            <div style={{ padding: "8px" }}>
              <button
                className="flex items-center btn-ghost"
                style={{ 
                  width: "100%", 
                  padding: "10px 12px", 
                  gap: "12px",
                  justifyContent: "flex-start",
                  color: "var(--color-danger)"
                }}
              >
                <LogOut size={16} />
                <span style={{ fontSize: "14px" }}>Logout</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

