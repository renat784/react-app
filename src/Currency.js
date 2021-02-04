import React, { Component } from "react";
import axios from "axios";
import TableContent from "./TableContent";

class Currency extends Component {
  state = {
    data: [],
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
        <TableContent someData={this.state.data} />
        <h3>Exchange course </h3>
        <h5>foreign currencies to USD</h5>
        <small>
          (period from {this.state.date.fromDate} to {this.state.date.toDate})
        </small>

        <div className="row my-5">
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
        <div className="text-center my-5">
          <button onClick={this.getData} className="btn btn-success">
            Get New Data
          </button>
        </div>
      </div>
    );
  }

  getData = () => {
    // for some days data is not available - it's normal
    this.getCurrency(this.state.date.fromDate, this.state.date.toDate);

    // scroll to top to results
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  getCurrency(fromDate, toDate) {
    let url;

    if (!fromDate && !toDate) {
      // default url
      url = this.url;
    } else {
      // use specific url
      url = new URL(this.url);
      var search_params = url.searchParams;

      search_params.set("start_at", fromDate);
      search_params.set("end_at", toDate);

      url.search = search_params.toString();

      url = url.toString();
    }

    axios.get(url).then((i) => {
      let someData = i.data.rates;
      // console.log(someData);

      let newState = this.state;

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

      this.setState(newState);
      // console.log(this.state.data);
    });
  }

  componentDidMount() {
    this.getCurrency();
  }
}

export default Currency;
