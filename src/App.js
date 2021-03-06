import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Router>
    </div>
  );
}

export default App;
