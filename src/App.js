import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import RecVids from "./components/RecVids/RecVids";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="app__page">
                <Sidebar />
                <RecVids />
              </div>
            }
          />
          <Route path="/search/:searchTerm" element={<h1>Search Page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
