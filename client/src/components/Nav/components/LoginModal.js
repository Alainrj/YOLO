import React from 'react';

class LoginModal extends React.Component {
    state = {
     
        email: "",
        password: "",
      
    }

    handleLoginChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, ()=>console.log(this.state))
    }

    loginUser = () => {
        document.querySelector("#registerButtonControl").getAttribute("display", 'none')
        window.location = "/mypage"
    }


render(){

    return (
        <div className="modal fade" role="dialog" id="loginModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">Sign In</h3>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <div className="form-group">
                                <input type="text" name="username" className="form-control" placeholder="Username" name="email" onChange={this.handleLoginChange} />
                            </div>
                            <div className="form-group">
                                <input type="passsword" name="password" className="form-control" placeholder="Password" name="password" onChange={this.handleLoginChange} />
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button onClick={this.loginUser} className="btn btn-sucess">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
             
        )
    }
}


export default LoginModal;