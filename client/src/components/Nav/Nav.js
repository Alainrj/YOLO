import React from "react";

import LoginModal from "./components/LoginModal"
import RegisterModal from "./components/RegisterModal"
import { detect } from 'detect-browser';
import "./Nav.css";
const browser = detect();
window.browserDetect = browser;

function Nav() {
    return (
        <>
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
                    <li className="nav-item">
                        <a id="navTitle" className="nav-link" href="/mainsearch">Main search</a>
                    </li>
                </ul>
            </nav>

            <LoginModal />
            <RegisterModal />
        </div>
<div>

                        <div className="modal-footer">
                            <button type="submit" className="btn btn-sucess">Create an Account</button>
                        </div>
                        {
                            (browser.os === 'iOS' || browser.os === 'Android OS')
                                ? <div>Mobile Camera</div>
                                : <div>Desktop Camera</div>
                        }
                    </div>
       
        </>
    );
}

export default Nav;