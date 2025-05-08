// src/App.jsx

import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ScrollButtons from "./components/ScrollButtons";
import "./App.css";

/**
 * App
 * ----
 * Root component assembling the one-page layout:
 *  - Header + Nav
 *  - Home (contains all page sections internally)
 *  - Footer
 */
export default function App() {
  return (
    <div className="app">
      {/* ─── Header & Navigation ─────────────────────────────────────────── */}
      <Header />
      <Nav />

      {/* ─── Main Content ───────────────────────────────────────────────── */}
      <main className="main-content">
        <Home />
      </main>

      {/* ─── Footer ───────────────────────────────────────────────────────── */}
      <Footer />
      <ScrollButtons />
    </div>
  );
}
