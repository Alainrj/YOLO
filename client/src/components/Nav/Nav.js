import React from "react";

import LoginModal from "./components/LoginModal"
import RegisterModal from "./components/RegisterModal"
import { detect } from 'detect-browser';
import "./Nav.css";
const browser = detect();
window.browserDetect = browser;

function Nav() {
    return (
        <div>
            <nav class="navbar fixed-top navbar-expand-lg navbar-light " style={{backgroundColor: 'rgba(198, 216, 171, .6)'}}>
                <a class="navbar-brand" href="/">
                    <div class="logo-image">
                        <img src="./img/Yolo.png" class="img-fluid" />
                    </div>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/"><i class="fas fa-home"></i> Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About</a>
                        </li>
                        <li class="nav-item">
                            <a id="nav-link" class="nav-link" href="/mypage">My Page </a>
                        </li>
                        {/* <li class="nav-item">
                          <a id="nav-link" class="nav-link" href="/mainsearch">Main search</a>
                        </li> */}
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <button type="button" className="btn btn-sucess" data-toggle="modal" data-target="#loginModal"><i class="fas fa-sign-in-alt"></i> Log In</button>
                        </li>
                        <li class="nav-item">
                            <button type="button" className="btn btn-sucess" data-toggle="modal" data-target="#registerModal"><i class="fas fa-user-plus"></i> Register</button>
                        </li>
                    </ul>
                </div>

            </nav>
            <LoginModal />
            <RegisterModal />
        </div>       
    );
}

export default Nav;