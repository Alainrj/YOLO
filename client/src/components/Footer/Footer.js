import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="page-footer font-small blue pt-4">
            <div className="container-fluid text-center text-md-left">
              <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                  <h3 className="text-uppercase">Subscribe YOLO News</h3>
                  <div id="subscribeInput" className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary" type="button">Submit</button>
                    </div>
                  </div>
                </div>

                <hr className="clearfix w-100 d-md-none pb-3" />
        
                <div className="col-md-3 mb-md-0 mb-3">
                  <ul className="list-unstyled">
                    <li>
                      <a id="footerList" href="https://github.com/Alainrj"><i className="fab fa-github"></i> Alain Joseph</a>
                    </li>
                    <li>
                      <a id="footerList" href="https://github.com/odavom"><i className="fab fa-github"></i> Anthony Mastanduno</a>
                    </li>
                    <li>
                      <a id="footerList" href="https://github.com/SR2405"><i className="fab fa-github"></i> Sara Romeo</a>
                    </li>
                    <li>
                      <a id="footerList" href="https://github.com/Robperea"><i className="fab fa-github"></i> Robert Perea-Martinez</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 mb-md-0 mb-3">
                  <ul className="list-unstyled">
                    <li>
                      <a id="footerList" href="https://github.com/Camiloagudelo4368"><i className="fab fa-github"></i> Camilo Agudelo</a>
                    </li>
                    <li>
                      <a id="footerList" href="https://github.com/dowan1041"><i className="fab fa-github"></i> Dowan Kim</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="footerList2" className="footer-copyright text-center py-3">© 2019 Copyright:
              <a id="footerList" href="https://github.com/Alainrj/YOLO"> Yolo Group</a>
            </div>
        </footer>
    );
  }

export default Footer;