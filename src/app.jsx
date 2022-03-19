import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import { Switch } from "react-router-dom";
import ProductDetails from "./components/productDetails";
import { Redirect } from "react-router-dom";
import NotFound from "./components/notFound";

const App = () => (
  <div>
    <NavBar />
    <div className="content">
      <Switch>
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/products" component={Products} />
        <Route path="/posts/:year?/:month?" component={Posts} />
        <Route path="/admin" component={Dashboard} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" component={Home} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  </div>
);

export default App;
