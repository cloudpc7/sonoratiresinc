import React from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Provider } from "react-redux";
import { store } from "./app/store";

import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import ShopPage from "./pages/ShopPage";
import TireProvider from "./providers/TireProvider";

// Import the new advanced SCSS architecture
import "./styles/main.scss";

function App() {
  return (
    <Provider store={store}>
      <TireProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </TireProvider>
    </Provider>
  );
}

export default App;
