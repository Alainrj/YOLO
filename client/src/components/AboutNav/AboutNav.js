import React from "react";
import "./AboutNav.css";

function AboutNav() {
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
                </ul>
            </div>

        </nav>
    </div>       
);
  }

export default AboutNav;