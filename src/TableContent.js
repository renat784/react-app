import React, { Component } from "react";

class TableContent extends Component {
  state = {
    data: [],
    table: {
      min: 0,
      max: 10,
    },
  };

  componentDidMount() {
    let newState = this.state;
    newState.data = this.props.someData;

    this.setState(newState);
  }

  ShowPrev = () => {
    let newState = this.state;
    newState.table.min -= 10;
    newState.table.max -= 10;
    this.setState(newState);
  };

  ShowNext = () => {
    let newState = this.state;
    newState.table.min += 10;

    if (newState.table.max + 10 > newState.data.length)
      newState.table.max = newState.data.length;
    else newState.table.max += 10;

    this.setState(newState);
  };

  ShowFirst_10 = () => {
    let newState = this.state;
    newState.table.min = 0;
    newState.table.max = 10;
    this.setState(newState);
  };

  ShowLast_10 = () => {
    let newState = this.state;
    newState.table.max = this.state.data.length;
    newState.table.min = newState.table.max - 10;

    this.setState(newState);
  };

  render() {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>Id</td>
              <td>Date</td>
              <td>EUR</td>
              <td>GBP</td>
              <td>CAD</td>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((element, index) => {
              if (
                index >= this.state.table.min &&
                index < this.state.table.max
              ) {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{element.date}</td>
                    <td>{element.eur}</td>
                    <td>{element.gbp}</td>
                    <td>{element.cad}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
        <div>
          <span>
            id shown from {this.state.table.min < 0 ? 0 : this.state.table.min}{" "}
            to {this.state.table.max - 1}. Total objects{" "}
            {this.state.data.length}
          </span>
        </div>
        <div>
          <button className="btn btn-danger" onClick={this.ShowFirst_10}>
            Show First 10
          </button>
          <button
            disabled={this.state.table.min <= 0 ? true : false}
            className="btn btn-success"
            onClick={this.ShowPrev}
          >
            Prev 10
          </button>
          <button
            disabled={
              this.state.table.max >= this.state.data.length ? true : false
            }
            className="btn btn-success"
            onClick={this.ShowNext}
          >
            Next 10
          </button>

          <button className="btn btn-danger" onClick={this.ShowLast_10}>
            Show Last 10
          </button>
        </div>
      </div>
    );
  }
}

export default TableContent;
