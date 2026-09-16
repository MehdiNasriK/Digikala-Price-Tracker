import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Sidebar from "./component/Sidebar"
import SearchSection from "./component/SearchSection";
import Products from "./component/Products";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyListPage from "./pages/MyListPage";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/search" element={<SearchPage />}/>
        <Route exact path="/mylist" element={<MyListPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
