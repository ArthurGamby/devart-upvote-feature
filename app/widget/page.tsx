/**
 * VoteHub Widget Demo - Public View
 * This shows how the voting widget appears on a client's website
 * 
 * Features:
 * - Floating trigger button (like Intercom)
 * - Slide-in panel from the right
 * - Compact feature list with voting
 * - Quick feature submission
 * - Mobile responsive
 */

"use client";

import { useState } from "react";
import VoteWidget from "../components/widget/VoteWidget";

export default function WidgetDemoPage() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: "#ffffff" }}>
      {/* Demo Website Content */}
      <nav 
        style={{ 
          height: "70px",
          background: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div 
            style={{ 
              width: "36px", 
              height: "36px", 
              background: "#8b5cf6",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px"
            }}
          >
            🚀
          </div>
          <span style={{ fontSize: "20px", fontWeight: 700, color: "#111827" }}>
            ProductDemo
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <a href="#" style={{ color: "#6b7280", textDecoration: "none", fontWeight: 500 }}>Features</a>
          <a href="#" style={{ color: "#6b7280", textDecoration: "none", fontWeight: 500 }}>Pricing</a>
          <a href="#" style={{ color: "#6b7280", textDecoration: "none", fontWeight: 500 }}>About</a>
          <button 
            style={{ 
              background: "#8b5cf6",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              fontWeight: 600,
              cursor: "pointer"
            }}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main style={{ padding: "80px 40px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h1 
            style={{ 
              fontSize: "56px", 
              fontWeight: 800, 
              color: "#111827",
              marginBottom: "20px",
              lineHeight: "1.2"
            }}
          >
            Build Better Products
            <br />
            <span style={{ color: "#8b5cf6" }}>With Your Community</span>
          </h1>
          <p 
            style={{ 
              fontSize: "20px", 
              color: "#6b7280",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6"
            }}
          >
            This is a demo website showing how VoteHub integrates seamlessly into your product
          </p>
        </div>

        <div 
          style={{ 
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px",
            marginTop: "80px"
          }}
        >
          {[
            { emoji: "⚡", title: "Lightning Fast", desc: "Built for speed and performance" },
            { emoji: "🎨", title: "Beautiful Design", desc: "Polished UI that users love" },
            { emoji: "🔒", title: "Secure by Default", desc: "Enterprise-grade security" },
          ].map((feature, i) => (
            <div
              key={i}
              style={{
                background: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: "16px",
                padding: "32px",
                textAlign: "center"
              }}
            >
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>{feature.emoji}</div>
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#111827", marginBottom: "12px" }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: "16px", color: "#6b7280", lineHeight: "1.6" }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* More realistic website content */}
        <div style={{ marginTop: "120px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 700, color: "#111827", marginBottom: "16px" }}>
              Trusted by 10,000+ teams
            </h2>
            <p style={{ fontSize: "18px", color: "#6b7280" }}>
              Join the companies building better products
            </p>
          </div>

          {/* Testimonial */}
          <div 
            style={{ 
              background: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: "20px",
              padding: "48px",
              maxWidth: "800px",
              margin: "0 auto"
            }}
          >
            <p style={{ fontSize: "20px", color: "#111827", lineHeight: "1.7", marginBottom: "24px" }}>
              "This product has completely transformed how we work. The team is incredibly responsive and the features just keep getting better."
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div 
                style={{ 
                  width: "48px", 
                  height: "48px", 
                  borderRadius: "50%",
                  background: "#8b5cf6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 700
                }}
              >
                JD
              </div>
              <div>
                <div style={{ fontSize: "16px", fontWeight: 600, color: "#111827" }}>Jane Doe</div>
                <div style={{ fontSize: "14px", color: "#6b7280" }}>CEO, TechCorp</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer 
          style={{ 
            marginTop: "120px",
            paddingTop: "60px",
            borderTop: "1px solid #e5e7eb",
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: "60px"
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div 
                style={{ 
                  width: "32px", 
                  height: "32px", 
                  background: "#8b5cf6",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px"
                }}
              >
                🚀
              </div>
              <span style={{ fontSize: "18px", fontWeight: 700, color: "#111827" }}>
                ProductDemo
              </span>
            </div>
            <p style={{ fontSize: "14px", color: "#6b7280" }}>
              © 2024 ProductDemo. All rights reserved.
            </p>
          </div>

          <div style={{ display: "flex", gap: "60px" }}>
            <div>
              <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#111827", marginBottom: "16px" }}>Product</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <a href="#" style={{ fontSize: "14px", color: "#6b7280", textDecoration: "none" }}>Features</a>
                <a href="#" style={{ fontSize: "14px", color: "#6b7280", textDecoration: "none" }}>Pricing</a>
                <a href="#" style={{ fontSize: "14px", color: "#6b7280", textDecoration: "none" }}>Changelog</a>
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#111827", marginBottom: "16px" }}>Company</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <a href="#" style={{ fontSize: "14px", color: "#6b7280", textDecoration: "none" }}>About</a>
                <a href="#" style={{ fontSize: "14px", color: "#6b7280", textDecoration: "none" }}>Blog</a>
                <a href="#" style={{ fontSize: "14px", color: "#6b7280", textDecoration: "none" }}>Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Action Buttons - Bottom Right */}
      {!isWidgetOpen && (
        <div 
          style={{ 
            position: "fixed",
            bottom: "24px",
            right: "100px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            zIndex: 999
          }}
          className="animate-fade-in"
        >
          <button
            onClick={() => setIsWidgetOpen(true)}
            style={{
              background: "white",
              color: "#111827",
              border: "1px solid #e5e7eb",
              padding: "12px 20px",
              borderRadius: "12px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.2s",
              whiteSpace: "nowrap"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
            }}
          >
            <span style={{ fontSize: "16px" }}>🗺️</span>
            View Roadmap
          </button>

          <button
            onClick={() => setIsWidgetOpen(true)}
            style={{
              background: "white",
              color: "#111827",
              border: "1px solid #e5e7eb",
              padding: "12px 20px",
              borderRadius: "12px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.2s",
              whiteSpace: "nowrap"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
            }}
          >
            <span style={{ fontSize: "16px" }}>💡</span>
            Request Feature
          </button>
        </div>
      )}

      {/* VoteHub Widget */}
      <VoteWidget 
        isOpen={isWidgetOpen}
        onToggle={() => setIsWidgetOpen(!isWidgetOpen)}
      />
    </div>
  );
}

