import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/">React-app</Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="currency">Currency</Link>
          <Link to="randomimage">Random Image</Link>
          <Link to="data">Get & Post Data</Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navigation;
