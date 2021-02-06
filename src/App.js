import "./App.css";
import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

import Currency from "./Currency";
import RandomImage from "./RandomImage";
import Data from "./Data";
import NotFound from "./NotFound";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/data" component={Data} />
        <Route exact path="/randomimage" component={RandomImage} />
        <Route exact path="/currency" component={Currency} />
        <Route exact path="/" component={Currency} />
        <Route path="**" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
