import React from 'react';
import Fade from 'react-reveal/Fade';
// WhyChooseUs Image
import shapeImg from '../../assets/images/eclipse-rotate-shape.svg';

const WhyChooseUs = () => {
    return (
        <div className="ras-why-choose-us ras-why-choose-us-1">
            <img src={shapeImg} alt="eclipse-shape" />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12">
                        <Fade bottom>
                            <h2>Here is some reson why most of the clients happy to <span className="color-title">Choice us.</span></h2>
                        </Fade>
                        <Fade bottom>
                            <p>Innovation and creativity intertwine seamlessly within our codecharley, guiding us to reimagine traditional design norms and create solutions that embody forward-thinking creativity.
                            </p>
                        </Fade>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <Fade bottom cascade>
                            <div className="choose-us-items">
                                <div className="choose-us-item">
                                    <div className="choose-us-icon purple-bg-icon">
                                        <i className="flaticon-man"></i>
                                    </div>
                                    <div className="choose-us-details">
                                        <h3>Talented Team</h3>
                                        <p>When we undertake any project, we meticulously plan the completion of our clients' projects to perfection. We dedicate ample time to thorough research on each project.</p>
                                    </div>
                                </div>
                                <div className="choose-us-item">
                                    <div className="choose-us-icon orange-bg-icon">
                                        <i className="flaticon-checked"></i>
                                    </div>
                                    <div className="choose-us-details">
                                        <h3>Safe & Sceure</h3>
                                        <p>Our team prioritizes 'Safe & Secure' practices to ensure client data protection and system integrity.</p>
                                    </div>
                                </div>
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
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default WhyChooseUs;