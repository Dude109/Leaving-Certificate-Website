import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const CustomNav = () => {
  return (
    <div>
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand href="/">Blue Mesa</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-center">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/microbit">Microbit</Nav.Link>
              <Nav.Link href="/live">Live</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/review">Leave a review</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNav;
