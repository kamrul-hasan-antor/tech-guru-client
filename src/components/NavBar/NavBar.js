import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="fs-3 fw-bold text-success">
          TECH GURU
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 d-md-flex justify-content-end ">
            <Nav.Link href="#home" className="pe-3 text-success ">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="pe-3 text-success ">
              Courses
            </Nav.Link>
            <Nav.Link href="#link" className="pe-3 text-success ">
              FAQ
            </Nav.Link>
            <Nav.Link href="#link" className="pe-3 text-success ">
              Blog
            </Nav.Link>
            <Nav.Link href="#link" className="pe-3 text-success ">
              Login
            </Nav.Link>
            <Nav.Link href="#link" className="pe-3 text-success ">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
