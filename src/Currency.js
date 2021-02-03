import React, { Component } from "react";
import axios from "axios";

class Currency extends Component {
  state = {};
  render() {
    return <div>Currency</div>;
  }

  componentDidMount() {
    axios
      .get(
        "https://api.exchangeratesapi.io/history?start_at=2020-01-01&end_at=2021-02-02&base=USD"
      )
      .then((i) => {
        console.log(i.data);
      });
  }
}

export default Currency;
