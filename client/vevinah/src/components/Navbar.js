import React from "react";
import { Link } from "react-router-dom";
import {Dropdown, NavDropdown} from 'react-bootstrap';
import { ShoppingCart, User } from "react-feather";
import logo from "../assets/chai-vevinah-logo.png";
import { useEffect, useState } from "react";
function Navbar() {
  const savedCart = localStorage.getItem("cart");
  const [cartItems, setCartItems] = useState(
    savedCart ? JSON.parse(savedCart) : []
  );
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    console.log(savedCart);
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
      // console.log(cart);
    }
  }, [savedCart]);
  const [cartLength, updateCartLength] = useState(
    cartItems ? cartItems.length : 0
  );

  useEffect(() => {
    updateCartLength(savedCart ? JSON.parse(savedCart).length : 0);
  }, [savedCart]);

  function handleUserIconClick(){
    setShowUserDropdown((showUserDropdown) => ! showUserDropdown);
  }
  function handleLogoutClick(){
    setIsLoggedIn(setIsLoggedIn=> !setIsLoggedIn);
  }

  return (
      <div className="navbar">
        <a href="/" class="navbar-brand">
          <img src={logo} alt="Vevinah Brand"/>
        </a>
        <ul className="navbar-nav">
          <li className="navlink">
            <Link style={{textDecoration: "none", color: "#000000"}} to="/">
              Home
            </Link>
          </li>
          <li className="navlink">
            <Link style={{textDecoration: "none", color: "#000000"}} to="/menu">
              Menu
            </Link>
          </li>
          <li className="navlink">
            <Link
                style={{textDecoration: "none", color: "#000000"}}
                to="/contact-us"
            >
              Contact Us
            </Link>
          </li>
          <li className="navlink">
            <Link
                style={{textDecoration: "none", color: "#000000"}}
                to="/about-us"
            >
              About Us
            </Link>
          </li>
          <li className="navlink">
            <Link
                style={{textDecoration: "none", color: "#000000"}}
                to={{pathname: "/cart", state: {cartItems: cartItems}}}
            >
              <ShoppingCart/>
              {cartLength > 0 && <span>{cartLength}</span>}
            </Link>
          </li>
          <li onClick={handleUserIconClick} className="navlink">
            {/* Use a div or a custom component for your user icon */}
            <User/>
            {showUserDropdown && <UserDropdown isLoggedIn={isLoggedIn} handleLogoutClick={handleLogoutClick} />} {/* Render the dropdown if showUserDropdown is true */}
          </li>
        </ul>
      </div>
  );
}

const UserDropdown = ({isLoggedIn, handleLogoutClick}) => {
  // State to manage the dropdown visibility


  return (
      <ul className="dropdown-menu" >
        <li className="navlink">
          <Link style={{textDecoration: "none", color: "#000000"}} to="/user-profile">
            User Profile
          </Link>
        </li>
        <li className="navlink">
          {isLoggedIn?
              <div style={{textDecoration: "none", color: "#000000"}}  onClick={handleLogoutClick}>
            Logout
          </div>
              :
              <Link style={{textDecoration: "none", color: "#000000"}} to="/sign_in">
                Sign In/Sign Up
              </Link>
          }

        </li>
      </ul>
  )
      ;
};

export default Navbar;
