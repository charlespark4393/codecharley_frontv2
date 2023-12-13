import React from 'react';
import Fade from 'react-reveal/Fade';

const WhyChooseUs = () => {

    return (
        <div className="ras-about-choose-us ras-why-choose-us-2">
            <div className="container">
                <Fade bottom>
                    <h2 className="text-center mb-50">
                        Some special reson of Why<br />clients  <span class="color-title">Choice us.</span></h2>
                </Fade>
                <Fade bottom cascade>
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="choose-us-item">
                                <div className="choose-us-icon purple-bg-icon">
                                    <i className="flaticon-man"></i>
                                </div>
                                <div className="choose-us-details">
                                    <h3>Talented Team
                                    </h3>
                                    <p>When we undertake any project, we meticulously plan the completion of our clients' projects to perfection. We dedicate ample time to thorough research on each project
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="choose-us-item">
                                <div className="choose-us-icon orange-bg-icon">
                                    <i className="flaticon-checked"></i>
                                </div>
                                <div className="choose-us-details">
                                    <h3>Safe & Sceure</h3>
                                    <p>Our team prioritizes 'Safe & Secure' practices to ensure client data protection and system integrity.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="choose-us-item">
                                <div className="choose-us-icon skyblue-bg-icon">
                                    <i className="flaticon-man"></i>
                                </div>
                                <div className="choose-us-details">
                                    <h3>Online Support</h3>
                                    <p>We provide 'Online Support' at all times, with our team available 24/7 for assistance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default WhyChooseUs;