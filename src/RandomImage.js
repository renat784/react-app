import React, { Component } from "react";
import axios from "axios";
import "./RandomImage.css";

class RandomImage extends Component {
  state = {
    foxImage: "",
    catImage: "",
  };

  render() {
    return (
      <div className="col-8 offset-2 text-center my-5">
        <h5>Random Cat and Fox</h5>
        <small>click on image to change</small>

        <div className="mt-3">
          <img
            id="cat"
            onClick={this.ImageClicked}
            src={this.state.catImage}
            className="randomImage"
            title="click to change the cat"
            alt="cat"
          />
          <img
            id="fox"
            onClick={this.ImageClicked}
            src={this.state.foxImage}
            className="randomImage ml-2"
            title="click to change the fox"
            alt="fox"
          />
        </div>
      </div>
    );
  }

  ImageClicked = (e) => {
    let who = e.target.id;
    if (who === "cat") this.getRandomCat();
    if (who === "fox") this.getRandomFox();
  };

  getRandomCat = () => {
    axios.get("https://aws.random.cat/meow").then((i) => {
      let newState = this.state;
      newState.catImage = i.data.file;
      this.setState(newState);
    });
  };

  getRandomFox = () => {
    axios.get("https://randomfox.ca/floof/").then((i) => {
      let newState = this.state;
      newState.foxImage = i.data.image;
      this.setState(newState);
    });
  };

  componentDidMount() {
    this.getRandomCat();
    this.getRandomFox();
  }
}

export default RandomImage;
