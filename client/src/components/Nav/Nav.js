import React from "react";
import "./Nav.css";

function Nav() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div>
            Logo
        </div>
        <ul class="nav justify-content-end">
            <li class="nav-item">
                <a id="navTitle" class="nav-link active" href="#">ABOUT</a>
            </li>
            <li class="nav-item">
                <a id="navTitle" class="nav-link" href="#">Log In</a>
            </li>
            <li class="nav-item">
                <a id="navTitle" class="nav-link" href="#">Register</a>
            </li>
        </ul>
      </nav>
    );
  }

export default Nav;