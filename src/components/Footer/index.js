
import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import diamondShape from "../../assets/images/diamond-shape.svg";
import curlyShape from "../../assets/images/curly-shape.svg";
import bannerDots from "../../assets/images/banner-dots-1.svg";
import triangle from "../../assets/images/triangle.svg";

import Logo from '../../assets/images/logos/logo.svg';

const Footer = (props) => {
    const { footerLogo, footerClass, footerCTA } = props;
    return (
        <footer className={footerClass ? footerClass : 'ras-footer ras-footer-1'}>
            <div className="container">
                {
                    footerCTA ?
                        <div className="row">
                            <div className="col-lg-12">
                                <Fade bottom>
                                    <div className="ras-calltoaction">
                                        <h2>If you have any project or task for us <br /> <b> Please contact us</b></h2>
                                        <Link to="/contact" className="btn btn-primary btn-large text-white">Contact Us!</Link>
                                    </div>
                                </Fade>
                            </div>
                        </div> : ''
                }

                <Fade left cascade>
                    <div className="row">
                        <div className="col-lg-5 col-md-12 ras-widget-about">
                            <div className="ras-about-logo">
                                <Link to="/"><img src={footerLogo ? footerLogo : Logo} alt="Footer Logo" /></Link>
                            </div>

                            <p className="ras-about-desc">With a focus on your project's success, our team advocates top software development firms, evaluating rates alongside deep expertise.</p>
                        </div>
                        <div className="col-lg-3 col-md-12 ras-widget-links">
                            <h3 className="ras-widget-title">Quick Links</h3>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-12 ras-widget-subscribe">
                            <h3 className="ras-widget-title">Contact Us</h3>

                            <div className="ras-about-address">
                                <p className="mb-0">Address: 32-26 168th St Flushing, NY 11358</p>
                                <p>Phone: <a href="tel:+19175971119">+1 917 597 1119</a>
                                    <span className="email">Email: <a href="mailto:info@codecharley.com">info@codecharley.com</a></span></p>
                            </div>
                        </div>
                    </div>
                </Fade>

                <div className="ras-copyright mt-60">
                    <div className="row ras-copyright-wrapper relative">
                        <div className="col-md-6 text-lg-center">
                            <Fade bottom>
                                <ul className="ras-social-profile">
                                    <li><a href="https://www.linkedin.com/in/charlespark4393"><i className="icofont-linkedin"></i></a></li>
                                    <li><a href="https://github.com/charlespark4393"><i className="icofont-github"></i></a></li>
                                </ul>
                            </Fade>
                        </div>
                        <Fade bottom>
                            <div className="col-md-6 text-lg-center">
                                <p className="copyright-text mb-0">© 2023 All Right Reserved, <Link to="/">CodeCharley</Link></p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <div className="ras-footer-shapes">
                <img src={diamondShape} alt="Diamond Shape" className="diamond-shape" />
                <img src={triangle} alt="Traingle Shape" className="triangle-shape" />
                <img src={curlyShape} alt="Curly shape" className="curly-shape" />
                <img src={bannerDots} alt="Dot Shape" className="square-dots-1" />
            </div>
        </footer>
    );
}

export default Footer;