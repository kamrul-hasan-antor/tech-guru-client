import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink to="/" className="fs-2 fw-bold text-success nav-link">
          TECH GURU
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 d-md-flex justify-content-end ">
            <NavLink to="/" className="pe-3 text-success nav-link">
              Home
            </NavLink>
            <NavLink to="/courses" className="pe-3 text-success nav-link">
              Courses
            </NavLink>
            <NavLink to="faq" className="pe-3 text-success nav-link">
              FAQ
            </NavLink>
            <NavLink to="/blogs" className="pe-3 text-success nav-link">
              Blogs
            </NavLink>
            <NavLink to="/login" className="pe-3 text-success nav-link">
              Login
            </NavLink>
            <NavLink to="/register" className="pe-3 text-success nav-link">
              Register
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
