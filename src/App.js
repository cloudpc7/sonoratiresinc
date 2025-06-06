import React from "react";
import "./styles/main.scss";

function App() {
  return (
    <div className="app-container">
      {/* Header Section */}
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

      {/* Hero Section */}
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

      {/* Demo Section */}
      <section className="mb-xl p-lg text-center">
        <h2 className="mb-lg">🎉 Advanced SCSS Structure Complete!</h2>

        <div className="mb-lg">
          <p className="mb-md">
            Your existing Sonora Tires styles have been successfully converted
            to use the new advanced SCSS architecture:
          </p>
        </div>

        {/* Button Examples */}
        <div className="mb-lg">
          <button className="btn btn--primary btn--lg mr-md">
            Primary Button
          </button>
          <button className="btn btn--outline-secondary btn--lg mr-md">
            Outline Button
          </button>
          <button className="call-action mr-md">Hero Button</button>
        </div>

        {/* Brand Button Examples */}
        <div className="mb-lg">
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
            Appt Style
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

        {/* Typography Examples */}
        <div className="mb-lg">
          <h3
            className="mb-md"
            style={{
              fontFamily: "Syne, serif",
              color: "#DAA520",
              textTransform: "uppercase",
            }}
          >
            Feature Title Style
          </h3>
          <p
            className="mb-md"
            style={{
              fontFamily: "Libre Baskerville, serif",
              fontSize: "1rem",
              lineHeight: "1.6em",
            }}
          >
            This demonstrates the Libre Baskerville font used for body text in
            your design system.
          </p>
        </div>

        {/* Features List */}
        <div className="text-left mx-auto" style={{ maxWidth: "600px" }}>
          <h4 className="mb-md text-center">✨ What's Been Converted:</h4>
          <ul className="mb-lg" style={{ listStyle: "none", padding: 0 }}>
            <li className="mb-sm">
              🎨 <strong>Brand colors</strong> - Goldenrod (#DAA520) primary
              theme
            </li>
            <li className="mb-sm">
              🔤 <strong>Typography system</strong> - Syne, Libre Baskerville,
              Orbitron, Oxanium
            </li>
            <li className="mb-sm">
              📱 <strong>Responsive breakpoints</strong> - Mobile-first design
            </li>
            <li className="mb-sm">
              🧩 <strong>Component mixins</strong> - Buttons, layouts,
              typography
            </li>
            <li className="mb-sm">
              📐 <strong>Grid systems</strong> - Hero, features, footer layouts
            </li>
            <li className="mb-sm">
              🛠️ <strong>Utility classes</strong> - Spacing, display, typography
            </li>
            <li className="mb-sm">
              🗂️ <strong>7-1 Architecture</strong> - Organized, scalable SCSS
              structure
            </li>
          </ul>
        </div>

        <p className="fs-sm" style={{ color: "#6c757d", fontStyle: "italic" }}>
          All your existing styles have been preserved and organized into the
          new advanced SCSS structure!
        </p>
      </section>
    </div>
  );
}

export default App;
