import "./App.css";
import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

import Currency from "./Currency";
import RandomImage from "./RandomImage";
import Data from "./Data";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/data" component={Data} />
        <Route path="/randomimage" component={RandomImage} />
        <Route path="/currency" component={Currency} />
        <Route path="/" component={Currency} />
      </Switch>
    );
  }
}

export default App;
