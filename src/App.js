import "./App.css";
import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Weather from "./Weather";
import Currency from "./Currency";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/weather" component={Weather} />
        <Route path="/currency" component={Currency} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;
