import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import About from "./About";
const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/about" Component={About} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
