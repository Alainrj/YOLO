import React from 'react';
import axios from "axios";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import Client from "../../../pages/Client";

class RegisterModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName: "",
            firstName: "",
            email: "",
            password: "",
            age: "",
            heightFeet: "",
            heightInches: "",
            weight: "",
            redirect: false,
            showModal: true,
        }
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, () => console.log(this.state))
    }

    registerUser = (event) => {
        const signUpInfo = this.state
        // axios.post("/auth", signUpInfo).then(res => {
        // axios.get("/auth/test-route/", signUpInfo).then(res => {
            // console.log(res)
            window.location = "/mypage"
        // })
    }

    render() {

        return (
            <div className="modal fade" role="dialog" id="registerModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">Create a YOLO account</h3>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="">Last and First Name</span>
                                </div>
                                <input type="text" className="form-control" placeholder="Last Name" name="lastName" onChange={this.handleInputChange} />
                                <input type="text" className="form-control" placeholder="First Name" name="firstName" onChange={this.handleInputChange} />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Email" aria-describedby="inputGroup-sizing-default" placeholder="Email Address" name="email" onChange={this.handleInputChange} />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
                                </div>
                                <input type="password" className="form-control" aria-label="Password" aria-describedby="inputGroup-sizing-default" placeholder="Password" name="password" onChange={this.handleInputChange} />
                            </div>


                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Age</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Age" aria-describedby="inputGroup-sizing-default" placeholder="Age" name="age" onChange={this.handleInputChange} />
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Gender</label>
                                </div>
                                <select class="custom-select" id="inputGroupSelect01">
                                    <option selected>Choose...</option>
                                    <option value="m">Male</option>
                                    <option value="f">Female</option>
                                </select>
                            </div>


                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Height</span>
                                </div>
                                <input type="text" className="form-control" aria-label="HeightF" aria-describedby="inputGroup-sizing-default" placeholder="Feet" name="heightFeet" onChange={this.handleInputChange} />
                                <input type="text" className="form-control" aria-label="HeightI" aria-describedby="inputGroup-sizing-default" placeholder="Inches" name="heightInches" onChange={this.handleInputChange} />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Weight</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Weight" aria-describedby="inputGroup-sizing-default" placeholder="Height  Pounds" name="weight" onChange={this.handleInputChange} />
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button onClick={this.registerUser} className="btn btn-sucess">Create an Account</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(RegisterModal);