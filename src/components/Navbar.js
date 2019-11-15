import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../shoes-logo.png";
import { FaShoppingCart } from "react-icons/fa";
import ButtonField from "./Button";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <Link to="/">
          <img className="navLogo mr-3" src={logo} alt="shoes" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item">
            <Link to="/" className="nav-link mr-3">
              <span className="productNav">products</span>
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonField>
            <FaShoppingCart />
            <span className="pl-2">my cart</span>
          </ButtonField>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
