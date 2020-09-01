import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Navbar from "react-bootstrap/Navbar";

const Nav = ( {setComps} ) => {

  const handleOnClick = () => {
    setComps([])
  }

  return (
    <div className="nav">
     <Navbar onClick={handleOnClick} bg="light" variant="light">
        <Link to="/">
          <Navbar.Brand className="home">Home</Navbar.Brand>
        </Link>
      </Navbar>
    </div>
  );
};

export default Nav;
