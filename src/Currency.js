import React, { Component } from "react";
import axios from "axios";
import TableContent from "./TableContent";
import Chart from "./Chart";

class Currency extends Component {
  state = {
    data: [],
    dataForChart: [],
    date: { fromDate: "2020-01-01", toDate: "2020-04-01" },
  };

  url =
    "https://api.exchangeratesapi.io/history?start_at=2020-01-01&end_at=2020-04-01&base=USD";

  DateChanged = (e) => {
    let newState = this.state;

    if (e.target.id === "fromDate") {
      newState.date.fromDate = e.target.value;
    }
    if (e.target.id === "toDate") {
      newState.date.toDate = e.target.value;
    }
    this.setState(newState);
  };

  render() {
    return (
      <div className="text-center my-4">
        <div>
          <h3>Exchange course foreign currencies to USD</h3>

          <h6 style={{ color: "red" }}>
            (period from {this.state.date.fromDate} to {this.state.date.toDate})
          </h6>
          <p>
            <small>for some days data is not available</small>
          </p>
        </div>
        <Chart dataForChart={this.state.dataForChart}></Chart>
        <TableContent someData={this.state.data} />

        <div className="my-5">
          <h5>Change Period</h5>
          <div className="row">
            <div className="col-2 offset-4 text-left">
              <label>From This Date</label>
              <input
                id="fromDate"
                type="date"
                className="form-control"
                onChange={this.DateChanged}
                value={this.state.date.fromDate}
              />
            </div>
            <div className="col-2 text-right">
              <label>To That Date</label>
              <input
                id="toDate"
                type="date"
                className="form-control"
                onChange={this.DateChanged}
                value={this.state.date.toDate}
              />
            </div>
          </div>
          <div className="text-center my-3">
            <button onClick={this.getData} className="btn btn-success">
              Get New Data
            </button>
          </div>
        </div>
      </div>
    );
  }

  getData = () => {
    console.log(this.state.date.fromDate + " " + this.state.date.toDate);
    // for some days data is not available - it's normal
    this.getCurrency(this.state.date.fromDate, this.state.date.toDate);

    // scroll to top to results
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  getCurrency(fromDate, toDate) {
    let url;

    // use specific url
    url = new URL(this.url);
    var search_params = url.searchParams;

    search_params.set("start_at", fromDate);
    search_params.set("end_at", toDate);

    url.search = search_params.toString();

    url = url.toString();

    console.log(url);

    axios.get(url).then((i) => {
      let someData = i.data.rates;
      // console.log(someData);

      let newState = this.state;
      newState.data = [];

      //  make normal json objects from api response
      //  because default response has bad json structure
      for (const prop in someData) {
        let date = prop;
        let cad = someData[prop]["CAD"];
        let eur = someData[prop]["EUR"];
        let gbp = someData[prop]["GBP"];
        newState.data.push({ date, cad, eur, gbp });
      }

      //  sort data by date in ASC order because by default it's not sorted
      newState.data = newState.data.sort((a, b) => {
        let fa = a.date;
        let fb = b.date;

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });

      // make data for chart
      let dataChart = [];

      newState.data.map((i) => {
        dataChart.push({ name: i.date, eur: i.eur, gbp: i.gbp, cad: i.cad });
      });

      newState.dataForChart = dataChart;

      this.setState(newState);

      // console.log(this.state.data);
    });
  }

  componentDidMount() {
    this.getCurrency("2020-01-01", "2020-04-01");
  }
}

export default Currency;
