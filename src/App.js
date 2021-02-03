import "./App.css";
import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";
import Products from "./Products";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/products/:id" component={Products} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;
