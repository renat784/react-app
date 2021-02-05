import React, { Component } from "react";

class TableContent extends Component {
  state = {
    table: {
      min: 0,
      max: 10,
    },
  };

  ShowPrev = () => {
    let newState = this.state;
    newState.table.min -= 10;
    newState.table.max -= 10;
    this.setState(newState);
  };

  ShowNext = () => {
    let newState = this.state;
    newState.table.min += 10;

    if (newState.table.max + 10 > this.props.someData.length)
      newState.table.max = this.props.someData.length;
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
    newState.table.max = this.props.someData.length;
    newState.table.min = newState.table.max - 10;

    this.setState(newState);
  };

  render() {
    return (
      <div>
        <h5>The same values in Table format</h5>
        <table className="table table-striped my-5">
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
            {this.props.someData.map((element, index) => {
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
        <div className="mt-5">
          <span>
            id shown from {this.state.table.min < 0 ? 0 : this.state.table.min}{" "}
            to {this.state.table.max - 1}. Total objects{" "}
            {this.props.someData.length}
          </span>
        </div>
        <div className="mt-3">
          <button className="btn btn-dark mr-5" onClick={this.ShowFirst_10}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-bar-left"
              style={{ paddingBottom: "2px" }}
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"
              />
            </svg>
            <span className="ml-2">Show First 10</span>
          </button>
          <button
            disabled={this.state.table.min <= 0 ? true : false}
            className="btn btn-dark"
            onClick={this.ShowPrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              style={{ paddingBottom: "2px" }}
              fill="currentColor"
              className="bi bi-arrow-left-circle"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
              />
            </svg>
            <span className="ml-2">Prev 10</span>
          </button>
          <button
            disabled={
              this.state.table.max >= this.props.someData.length ? true : false
            }
            className="btn btn-dark ml-1"
            onClick={this.ShowNext}
          >
            <span className="mr-2">Next 10</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right-circle"
              style={{ paddingBottom: "2px" }}
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
              />
            </svg>
          </button>

          <button className="btn btn-dark ml-5" onClick={this.ShowLast_10}>
            <span className="mr-2">Show Last 10</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-bar-right"
              style={{ paddingBottom: "2px" }}
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default TableContent;
