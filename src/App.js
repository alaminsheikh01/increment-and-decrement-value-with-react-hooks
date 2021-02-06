import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
