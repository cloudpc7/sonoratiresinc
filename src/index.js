/**
 * Sonora Tires Inc. - Main Application Entry Point
 *
 * This file initializes the React application with the new advanced SCSS architecture.
 * The SCSS system implements a DRY, scalable design system while preserving all
 * existing Sonora Tires brand styling.
 *
 * Architecture Features:
 * - 7-1 SCSS pattern with design tokens
 * - Type-safe utility functions
 * - Generated utility classes
 * - Responsive design system
 * - Enterprise-grade maintainability
 */

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// External CSS imports (imported as CSS to avoid SCSS compilation issues)
// These provide the foundation for Bootstrap components and FontAwesome icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-social/bootstrap-social.css";
import "font-awesome/css/font-awesome.css";

// Our comprehensive SCSS architecture
// This single import brings in the entire 7-1 SCSS system:
// - Design tokens and variables
// - DRY functions and mixins
// - Component styles
// - Utility classes
// - All brand-specific styling
import "./styles/main.scss";

// Main App component with advanced SCSS implementation
import App from "./App";

// Initialize React application
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

/**
 * 🎉 Sonora Tires Advanced SCSS Architecture Initialized!
 *
 * The application now uses:
 * ✅ Design token system for consistent styling
 * ✅ DRY mixins and functions
 * ✅ Generated utility classes
 * ✅ Responsive breakpoint system
 * ✅ Component-based architecture
 * ✅ All existing brand styling preserved
 * ✅ Enterprise-grade maintainability
 */
