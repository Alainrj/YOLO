import React from "react";

import LoginModal from "../Nav/components/LoginModal"
import RegisterModal from "../Nav/components/RegisterModal"
import { detect } from 'detect-browser';
import "./LoginNav.css";
const browser = detect();
window.browserDetect = browser;

function LoginNav() {
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
                        {/* <li class="nav-item">
                            <a class="nav-link" href="/about" >About</a>
                        </li> */}
                        {/* <li class="nav-item">
                            <a id="nav-link" class="nav-link" href="/mypage">My Page </a>
                        </li> */}
                        {/* <li class="nav-item">
                          <a id="nav-link" class="nav-link" href="/mainsearch">Main search</a>
                        </li> */}
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <button type="button" className="btn btn-sucess" onClick={() => window.location = '/'}><i class="fas fa-sign-out-alt"></i> Log Out</button>
                        </li>
                    </ul>
                </div>

            </nav>
            <LoginModal />
            <RegisterModal />
        </div>       
    );
}

export default LoginNav;