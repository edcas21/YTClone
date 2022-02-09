import React from "react";

import "./App.css";

import Header from "./components/Header/Header";
import RecVids from "./components/RecVids/RecVids";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      <Header />
      <div className="app__page">
        {/* Sidebar */}
        <Sidebar />
        {/* Recommended Video */}
        <RecVids />
      </div>
    </div>
  );
}

export default App;
