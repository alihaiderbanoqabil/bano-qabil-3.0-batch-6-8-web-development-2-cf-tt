import React from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { routes } from "../routes";
import style from "./header.module.css";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {routes.map(
              ({ path, label }, index) =>
                label && (
                  <NavLink
                    key={index}
                    to={path}
                    className="nav-link"
                    // className={({ isActive }) => {
                    //   console.log({ isActive });

                    //   return isActive ? `${style.active} nav-link` : "nav-link";
                    //   // return isActive ? "active nav-link" : "nav-link";
                    // }}

                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                      };
                    }}
                  >
                    {label}
                  </NavLink>
                )
            )}
            {/* {routes.map(
              ({ path, label }, index) =>
                label && (
                  <Link key={index} to={path} className="nav-link">
                    {label}
                  </Link>
                )
            )} */}
            {/* {routes.map(
              ({ path, label, isHidden }, index) =>
                !isHidden && (
                  <Link key={index} to={path} className="nav-link">
                    {label}
                  </Link>
                )
            )} */}
            {/* <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            <Link to="/posts" className="nav-link">
              Posts
            </Link> */}

            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
