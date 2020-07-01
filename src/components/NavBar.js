import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Link to="/Project-2---React">
          <Navbar.Brand>Home</Navbar.Brand>
        </Link>
      </Navbar>
    </div>
  );
}
