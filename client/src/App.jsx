import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Sidebar from "./component/Sidebar"
import SearchSection from "./component/SearchSection";
import Products from "./component/Products";
import SearchPage from "./pages/search";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <div className="page">
          <header className="page-header">
            <h1>Search</h1>
          </header>

          <SearchSection />
          <Products />
        </div>
      </main>
    </div>
  );
}

export default App;
