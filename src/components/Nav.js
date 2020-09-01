import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Navbar from "react-bootstrap/Navbar";

const Nav = () => {
  return (
    <div className="nav">
     <Navbar bg="light" variant="light">
        <Link to="/">
          <Navbar.Brand className="home">Home</Navbar.Brand>
        </Link>
      </Navbar>
    </div>
  );
};

export default Nav;
