import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { AiOutlineUser } from "react-icons/ai";
const NavBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink to="/" className="fs-2 fw-bold text-success nav-link">
          TECH GURU
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="w-100 d-md-flex justify-content-end align-items-center">
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
            <NavLink className="pe-2 fw-semibold text-success nav-link">
              {user?.displayName}
            </NavLink>
            <NavLink className="pe-1 nav-link">
              {user.photoURL ? (
                <img
                  className="w-50 rounded-circle"
                  src={user.photoURL}
                  alt=""
                />
              ) : (
                <AiOutlineUser></AiOutlineUser>
              )}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
