import React from 'react';
import LoginForm from './LoginForm';

const LoginMain = () => {
        return (
            <React.Fragment>
                <div className="ras-contact-content sec-spacer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 d-flex justify-content-center">
                            </div>
                            <div className="col-lg-6">
                                <LoginForm />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        );
}


export default LoginMain;