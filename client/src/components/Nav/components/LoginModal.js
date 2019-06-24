import React from 'react';

function LoginModal(){

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
                                <input type="text" name="username" className="form-control" placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <input type="passsword" name="password" className="form-control" placeholder="Password" />
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="submit" className="btn btn-sucess">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
            
    )

}

export default LoginModal;