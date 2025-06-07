import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";

// External CSS imports (for stability)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-social/bootstrap-social.css";
import "font-awesome/css/font-awesome.css";

// Import TireProvider
import TireProvider from "./providers/TireProvider";

// Import our new advanced SCSS architecture
import "./styles/main.scss";

// Import the restored App with full functionality
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <TireProvider>
          <App />
        </TireProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
