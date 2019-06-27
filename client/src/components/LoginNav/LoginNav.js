import React from "react";
import "./LoginNav.css";

function LoginNav() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">YOLO (LOGO)</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/mypage">My Page </a>
              </li>
            </ul>
            <ul class="navbar-nav">
              <li class="nav-item">
                  <button type="button" className="btn btn-sucess" data-toggle="modal" data-target="#myPhoto">My Photo</button>
              </li>
            </ul>
          </div>
        </nav>
        <div className="modal fade" role="dialog" id="myPhoto">
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
      </div>
    );
  }

export default LoginNav;