import React, { Component } from "react";
import "./Data.css";
import axios from "axios";

const validEmailRegex = RegExp(/\S+@\S+\.\S+/);

class Data extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formValid: false,
      array: [],
      data: {
        fullname: "",
        email: "",
      },
      errors: {
        fullname: "",
        email: "",
      },
    };
  }

  GetAllUsers = () => {
    axios.get("/api/users").then((i) => {
      let newState = this.state;
      newState.array = i.data;

      this.setState(newState);
      console.log(this.state.array);
    });
  };

  componentDidMount() {
    this.GetAllUsers();
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let newState = this.state;

    switch (name) {
      case "fullname":
        if (value.length < 3) {
          newState.errors.fullname = "Name must be 3 characters long!";
          newState.data.fullname = "";
        } else {
          newState.errors.fullname = "";
          newState.data.fullname = value;
        }
        break;

      case "email":
        if (validEmailRegex.test(value)) {
          newState.errors.email = "";
          newState.data.email = value;
        } else {
          newState.errors.email = "Email is not valid!";
          newState.data.email = "";
        }
        break;

      default:
        break;
    }

    if (newState.data.fullname !== "" && newState.data.email !== "") {
      newState.formValid = true;
    } else {
      newState.formValid = false;
    }

    this.setState(newState);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("api/users", {
        name: this.state.data.fullname,
        email: this.state.data.email,
      })
      .then((i) => {
        console.log(i);

        // show all documents in Table
        this.GetAllUsers();
        // go to bottom of page
        window.scrollTo({ top: 2000, behavior: "smooth" });
      });

    // clear form fields
    event.target.reset();

    let newState = this.state;
    newState.formValid = false;
    newState.data.fullname = "";
    newState.data.email = "";

    this.setState(newState);
  };

  DeleteUser(email) {
    axios.delete("/api/users", { data: { email } }).then((i) => {
      console.log(i);

      // show all documents in Table
      this.GetAllUsers();
    });
  }

  EditUser(email) {
    console.log(email);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="col-8 offset-2 text-center my-5">
        <h4>CRUD to MongoDb</h4>

        {/* form */}
        <div className="my-5 text-left col-8 offset-2">
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="fullname">Name</label>
              <input
                type="text"
                className="form-control"
                name="fullname"
                placeholder="Bob"
                onChange={this.handleChange}
                noValidate
              />
              {errors.fullname.length > 0 && (
                <p className="alert alert-danger">{errors.fullname}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="bob@gmail.com"
                onChange={this.handleChange}
                noValidate
              />
              {errors.email.length > 0 && (
                <p className="alert alert-danger">{errors.email}</p>
              )}
            </div>

            <button
              disabled={!this.state.formValid}
              type="submit"
              className="btn btn-primary col-12"
            >
              Create
            </button>
          </form>
        </div>

        {/* show no data warning */}
        <div
          hidden={this.state.array.length !== 0 ? true : false}
          className="my-5"
        >
          <h4>No data ? </h4>
          <p>It's time to add something via form!</p>
        </div>

        {/* show data if have something*/}
        <div className="text-right mt-5 mb-3"></div>
        <div hidden={this.state.array.length === 0 ? true : false}>
          <table className="table table-striped">
            <thead>
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {this.state.array.map((i, index) => {
                return (
                  <tr key={index}>
                    <td>{i.name}</td>
                    <td>{i.email}</td>
                    <td>
                      <button
                        className="btn btn-outline-danger"
                        title="remove user"
                        onClick={() => this.DeleteUser(i.email)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path
                            fillRule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Data;
