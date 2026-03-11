import { useState } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Routing from "./Components/Routing";
import Footer from "./Components/Footer";

function AppContent() {
  const { pathname } = useLocation();
  const isLanding = pathname === "/";

  return (
    <>
      <div className="flex">
        <Sidebar />
        <Routing />
      </div>
      {!isLanding && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
