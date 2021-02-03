import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/">React-app</Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="weather">Weather</Link>
          <Link to="currency">Currency</Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navigation;
