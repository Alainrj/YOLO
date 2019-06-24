import React from "react";
import LoginModal from "./components/LoginModal"
import RegisterModal from "./components/RegisterModal"
import "./Nav.css";

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a href="/">LOGO</a>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a id="navTitle" className="nav-link active" href="/about">ABOUT</a>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn btn-sucess" data-toggle="modal" data-target="#loginModal">Log In</button>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn btn-sucess" data-toggle="modal" data-target="#registerModal">Register</button>
                    </li>
                    <li className="nav-item">
                        <a id="navTitle" className="nav-link" href="/mypage">My Page </a>
                    </li>
                </ul>
            </nav>

            <LoginModal />
            <RegisterModal />
        </div>



    );
}

export default Nav;