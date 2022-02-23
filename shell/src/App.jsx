import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Login />} />
    </Routes>
  </Router>  
);
ReactDOM.render(<App />, document.getElementById("app"));
