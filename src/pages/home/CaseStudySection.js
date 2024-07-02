import React from 'react';
import Fade from 'react-reveal/Fade';

import caseImg1 from '../../assets/images/case-study/case-study-1.jpg'
import caseImg2 from '../../assets/images/case-study/case-study-2.jpg'
import caseImg9 from '../../assets/images/case-study/case-study-9.jpg'
import caseImg8 from '../../assets/images/case-study/case-study-8.jpg'

const CaseStudy = () => {

    return (
        <div className="ras-case-study ras-case-study-1">
            <div className="container">
                <Fade bottom>
                    <h2 className="text-center mb-50">Recently done case study by our <br />inteligents team</h2>
                </Fade>
                <Fade left cascade>
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-4">
                            <div className="ras-single-case-study">
                                <div className="case-study-image case-study-orange">
                                    <img src={caseImg1} alt="Nextres - Brokers' Bridge Lending Partner" />
                                </div>
                                <h4><a href="https://commercial.nextres.com" className="case-study-title">Nextres - Brokers' Bridge Lending Partner</a></h4>
                                <a href="https://commercial.nextres.com" className="read-more">Read more</a>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="ras-single-case-study">
                                <div className="case-study-image case-study-sky-blue">
                                    <img src={caseImg2} alt="Nextres - Solution for Investment Lending" />
                                </div>
                                <h4><a href="https://nextres.com" className="case-study-title">Nextres - Solution for Investment Lending</a></h4>
                                <a href="https://nextres.com" className="read-more">Read more</a>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="ras-single-case-study">
                                <div className="case-study-image case-study-red">
                                    <img src={caseImg9} alt="Finresi Platform Grants Investors" />
                                </div>
                                <h4><a href="https://www.finresi.com/" className="case-study-title">Finresi Platform Grants Investors</a></h4>
                                <a href="https://www.finresi.com/" className="read-more">Read more</a>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="ras-single-case-study">
                                <div className="case-study-image case-study-red">
                                    <img src={caseImg8} alt="Nexys" />
                                </div>
                                <h4><a href="https://nexys.com" className="case-study-title">Nexys</a></h4>
                                <a href="https://nexys.com" className="read-more">Read more</a>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default CaseStudy;