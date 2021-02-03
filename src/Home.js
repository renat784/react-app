import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  state = { data: [] };

  render() {
    return (
      <div className="text-center px-5">
        <h3 className="my-5">Data from node js</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((el, index) => {
              return (
                <tr key={index}>
                  <td>{el.id}</td>
                  <td>{el.name}</td>
                  <td>{el.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  componentDidMount() {
    axios.get("/api").then((i) => {
      this.setState({ data: i.data });
    });
  }
}

export default Home;
