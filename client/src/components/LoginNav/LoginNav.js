import React from "react";
import "./LoginNav.css";

function LoginNav() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          React Reading List
        </a>
        <a className="navbar" href="/login">
          <img src="#"/> Log In/ Register
        </a>
      </nav>
    );
  }

export default LoginNav;