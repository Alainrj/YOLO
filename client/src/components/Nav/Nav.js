import React from "react";
import { detect } from 'detect-browser';
import "./Nav.css";
const browser = detect();
window.browserDetect = browser;

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
            <div className="modal fade" role="dialog" id="loginModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">Sign In</h3>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <div class="form-group">
                                <input type="text" name="username" className="form-control" placeholder="Username" />
                            </div>
                            <div class="form-group">
                                <input type="passsword" name="password" className="form-control" placeholder="Password" />
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="submit" className="btn btn-sucess">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" role="dialog" id="registerModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">Create a YOLO account</h3>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="">Last and First Name</span>
                                </div>
                                <input type="text" class="form-control" placeholder="Last Name"/>
                                <input type="text" class="form-control" placeholder="First Name"/>
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
                                </div>
                                <input type="text" class="form-control" aria-label="Email" aria-describedby="inputGroup-sizing-default" placeholder="Email Address"/>
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Password</span>
                                </div>
                                <input type="password" class="form-control" aria-label="Password" aria-describedby="inputGroup-sizing-default" placeholder="Password"/>
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Age</span>
                                </div>
                                <input type="text" class="form-control" aria-label="Age" aria-describedby="inputGroup-sizing-default" placeholder="Age"/>
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Height</span>
                                </div>
                                <input type="text" class="form-control" aria-label="Height" aria-describedby="inputGroup-sizing-default" placeholder="Height  Feets/inches"/>
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Weight</span>
                                </div>
                                <input type="text" class="form-control" aria-label="Weight" aria-describedby="inputGroup-sizing-default" placeholder="Height  Pounds"/>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="submit" className="btn btn-sucess">Create an Account</button>
                        </div>
                        {
                            (browser.os === 'iOS' || browser.os === 'Android OS')
                                ? <div>Mobile Camera</div>
                                : <div>Desktop Camera</div>
                        }
                    </div>
                </div>
            </div>
        </div>
        

        
    );
  }

export default Nav;