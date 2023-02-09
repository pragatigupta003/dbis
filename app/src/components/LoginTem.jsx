import React from 'react'

const LoginTem = () => {
    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                    <div className="card px-5 py-5" id="form1">
                        <form>
                            <div className="form-outline mb-4">
                                <label className="form-label" for="form2Example1">Username</label>
                                <input type="email" id="form2Example1" className="form-control" />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" for="form2Example2">Password</label>
                                <input type="password" id="form2Example2" className="form-control" />
                            </div>

                            <button type="button" className="btn btn-primary btn-block mb-4">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginTem