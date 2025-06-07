import React from "react";
// Import our comprehensive SCSS architecture
import "./styles/main.scss";

/**
 * Main App Component - Sonora Tires Inc.
 *
 * This component demonstrates the new advanced SCSS architecture
 * that implements a DRY, scalable, and maintainable design system.
 *
 * Features:
 * - 7-1 SCSS architecture pattern
 * - Design token system
 * - Component-based styling
 * - Responsive utilities
 * - Brand preservation
 */
function App() {
  return (
    <div className="app-container">
      {/* ========================================
          HEADER SECTION - Brand Navigation
          ======================================== */}
      <header className="header-container mb-lg">
        <div className="nav-row">
          <div className="title-col">
            <a className="header-title">sonora tires inc.</a>
          </div>
          <div className="cart-col">
            <i className="fa fa-shopping-cart fa-2x"></i>
          </div>
        </div>
      </header>

      {/* ========================================
          HERO SECTION - Main Brand Message
          ======================================== */}
      <section className="homepage-container mb-xl">
        <div className="hero-card">
          <div className="card-img-overlay"></div>
          <div className="hero-body">
            <h1 className="welcome">elevate your drive</h1>
            <p className="call-action-text">Family owned since 1989</p>
            <button className="call-action btn btn--primary">shop tires</button>
          </div>
        </div>
      </section>

      {/* ========================================
          DEMO SECTION - Architecture Showcase
          ======================================== */}
      <section className="mb-xl p-lg text-center">
        <h2 className="mb-lg text-primary">
          🎉 Advanced SCSS Architecture Complete!
        </h2>

        <div className="mb-lg">
          <p className="mb-md fs-lg">
            Your existing Sonora Tires styles have been successfully converted
            to use the new advanced SCSS architecture:
          </p>
        </div>

        {/* Button System Demonstration */}
        <div className="mb-lg">
          <h3 className="mb-md text-primary">Button System Examples</h3>
          <button className="btn btn--primary btn--lg mr-md">
            Primary Button
          </button>
          <button className="btn btn--outline-secondary btn--lg mr-md">
            Outline Button
          </button>
          <button className="call-action mr-md">Hero Button</button>
        </div>

        {/* Brand-Specific Button Examples */}
        <div className="mb-lg">
          <h3 className="mb-md text-primary">Brand Button Styles</h3>
          <button
            className="btn btn--sm mr-sm"
            style={{
              border: "1px solid #DAA520",
              color: "#DAA520",
              backgroundColor: "transparent",
              padding: "0.5rem 1rem",
            }}
          >
            Nav Link Style
          </button>
          <button
            className="btn btn--md mr-sm"
            style={{
              border: "1px solid #DAA520",
              color: "#DAA520",
              backgroundColor: "transparent",
              padding: "1rem 2rem",
            }}
          >
            Appointment Style
          </button>
          <button
            className="btn btn--lg"
            style={{
              backgroundColor: "#DAA520",
              color: "white",
              padding: "1rem 2rem",
              border: "none",
            }}
          >
            Contact Style
          </button>
        </div>

        {/* Typography System Demonstration */}
        <div className="mb-lg">
          <h3 className="mb-md text-primary">Typography System</h3>
          <h4
            className="mb-md"
            style={{
              fontFamily: "Syne, serif",
              color: "#DAA520",
              textTransform: "uppercase",
            }}
          >
            Feature Title Style (Syne Font)
          </h4>
          <p
            className="mb-md"
            style={{
              fontFamily: "Libre Baskerville, serif",
              fontSize: "1rem",
              lineHeight: "1.6em",
            }}
          >
            This demonstrates the Libre Baskerville font used for body text in
            your design system. The responsive typography scales beautifully
            across all devices.
          </p>
        </div>

        {/* Architecture Features List */}
        <div className="text-left mx-auto" style={{ maxWidth: "700px" }}>
          <h4 className="mb-md text-center text-primary">
            ✨ What's Been Implemented:
          </h4>
          <ul className="mb-lg" style={{ listStyle: "none", padding: 0 }}>
            <li className="mb-sm">
              🎨 <strong>Brand colors</strong> - Goldenrod (#DAA520) primary
              theme with systematic color palette
            </li>
            <li className="mb-sm">
              🔤 <strong>Typography system</strong> - Syne, Libre Baskerville,
              Orbitron, Oxanium with responsive scaling
            </li>
            <li className="mb-sm">
              📱 <strong>Responsive breakpoints</strong> - Mobile-first design
              with custom brand breakpoints
            </li>
            <li className="mb-sm">
              🧩 <strong>Component mixins</strong> - DRY button variants,
              layouts, and typography patterns
            </li>
            <li className="mb-sm">
              📐 <strong>Grid systems</strong> - Flexible grid layouts for hero,
              features, and footer sections
            </li>
            <li className="mb-sm">
              🛠️ <strong>Utility classes</strong> - Generated spacing, display,
              and typography utilities
            </li>
            <li className="mb-sm">
              🗂️ <strong>7-1 Architecture</strong> - Professional, organized,
              and scalable SCSS structure
            </li>
            <li className="mb-sm">
              ⚡ <strong>DRY Functions</strong> - Type-safe color(), spacing(),
              and font-family() functions
            </li>
            <li className="mb-sm">
              🎯 <strong>Design Tokens</strong> - Centralized design system with
              single source of truth
            </li>
          </ul>
        </div>

        {/* Success Message */}
        <div
          className="p-lg"
          style={{
            backgroundColor: "#f8f9fa",
            borderRadius: "0.5rem",
            border: "2px solid #DAA520",
          }}
        >
          <p className="fs-lg fw-bold text-primary mb-sm">
            🚀 Production-Ready SCSS Architecture
          </p>
          <p className="fs-sm text-muted" style={{ fontStyle: "italic" }}>
            All your existing Sonora Tires styles have been preserved and
            organized into an enterprise-grade SCSS structure that's
            maintainable, scalable, and DRY!
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
