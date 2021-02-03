import React, { Component } from "react";
import axios from "axios";

class Weather extends Component {
  state = {};
  render() {
    return <div>Weather</div>;
  }

  componentDidMount() {
    //   axios
    //     .get(
    //       "https://api.exchangeratesapi.io/history?start_at=2020-01-01&end_at=2021-02-02&base=USD"
    //     )
    //     .then((i) => {
    //       console.log(i.data);
    //     });
  }
}

export default Weather;
