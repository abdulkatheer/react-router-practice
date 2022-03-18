import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import { Switch } from "react-router-dom";

const App = () => (
  <div>
    <NavBar />
    <div className="content">
      <Switch>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/admin">
          <Dashboard />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </div>
);

export default App;
