import React from "react";
import "./styles/main.scss";

function App() {
  return (
    <div className="app-container p-xl text-center">
      <h1 className="mb-lg">Sonora Tires Inc.</h1>
      <p className="mb-xl">Advanced SCSS structure is now working!</p>

      <div className="mb-lg">
        <button className="btn btn--primary btn--lg mr-md">
          Primary Button
        </button>
        <button className="btn btn--outline-secondary btn--lg">
          Secondary Button
        </button>
      </div>

      <div className="mb-lg">
        <button className="btn btn--success btn--sm mr-sm">Small</button>
        <button className="btn btn--warning btn--md mr-sm">Medium</button>
        <button className="btn btn--danger btn--lg">Large</button>
      </div>

      <p className="fs-sm text-muted">
        This demonstrates our advanced SCSS architecture with:
        <br />
        • Modular structure (7-1 pattern)
        <br />
        • Design tokens (variables)
        <br />
        • Reusable mixins & functions
        <br />
        • Utility classes
        <br />• Component-based styles
      </p>
    </div>
  );
}

export default App;
