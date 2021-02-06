import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import cat from "./images/404.jpg";

function NotFound() {
  return (
    <div className="col-8 offset-2 text-center my-5">
      <h3>Page Not Found</h3>
      <div className="my-4">
        <img src={cat} alt="404 imag" />
      </div>
      <Link className="textLink" to="/">
        Go To Home Page
      </Link>
    </div>
  );
}

export default NotFound;
