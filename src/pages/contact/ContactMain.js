import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactMain = () => {
        return (
            <React.Fragment>
                <div className="ras-contact-content sec-spacer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 d-flex justify-content-center">
                                <ContactInfo />
                            </div>
                            <div className="col-lg-6">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        );
}


export default ContactMain;