import React from 'react';

class RegisterModal extends React.Component {
    state = {
        lastName: "",
        firstName: "",
        email: "",
        password: "",
        age: "",
        height: "",
        weight: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, ()=>console.log(this.state))
    }

    registerUser = () => {
        console.log("BUILD SUBMIT API HERE")
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
                                <input type="text" className="form-control" placeholder="Last Name" name="lastName" onChange={this.handleInputChange}/>
                                <input type="text" className="form-control" placeholder="First Name" name="firstName" onChange={this.handleInputChange} />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Email" aria-describedby="inputGroup-sizing-default" placeholder="Email Address" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
                                </div>
                                <input type="password" className="form-control" aria-label="Password" aria-describedby="inputGroup-sizing-default" placeholder="Password" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Age</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Age" aria-describedby="inputGroup-sizing-default" placeholder="Age" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Height</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Height" aria-describedby="inputGroup-sizing-default" placeholder="Height  Feets/inches" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Weight</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Weight" aria-describedby="inputGroup-sizing-default" placeholder="Height  Pounds" />
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

export default RegisterModal;