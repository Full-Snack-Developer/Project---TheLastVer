import React from "react";
import { Link } from "react-router-dom";
import "../Component/Top.css";
import Searchbox from "./Searchbox/Searchbox";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Top() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ borderBottom: "1px solid white" }}
    >
      <Container fluid>
        <Link
          to="/"
          style={{ fontSize: "30px", textDecoration: "none", color: "white" }}
        >
          PhimFly
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link
              className="topTrending"
              to="/trending"
              style={{
                marginLeft: "20px",
              }}
            >
              Trending
            </Link>
            <Link className="topTop" to="/popular">
              Top
            </Link>
            <NavDropdown
              bg="dark"
              title="Find something..."
              id="collasible-nav-dropdown"
            >
              <div>
                <Searchbox className="m-2" />
              </div>
            </NavDropdown>
          </Nav>
          <Nav className="ml-auto"></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Top;
