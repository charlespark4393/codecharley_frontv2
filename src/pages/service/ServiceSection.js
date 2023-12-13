import React from 'react';
import Fade from 'react-reveal/Fade';
import SingleService from '../../components/Service/SingleService';

import serviceShape from '../../assets/images/eclips-shape-1.svg';

const Service = () => {

    return (
        <div className="ras-services ras-services-1 sec-spacer">
            <img src={serviceShape} alt="service1-bg" className="ras-services-1-bg" />
            <div className="container">
                <Fade bottom>
                    <h2 className="mb-50 md-mb-30 text-center">We’ve helped hundreds<br /> of clients to reach internet & grow<br /> <span class="color-title">their Business</span></h2>
                </Fade>
                <div className="row">
                    <div className="col-lg-4">
                        <Fade bottom>
                            <SingleService
                                itemClass="ras-services-item fadeInLeft"
                                IconClass="ras-service-icon purple-bg-icon"
                                BtnClass="read-more bg-purple"
                                Icon='flaticon-web-programming'
                                Title="Web Developmnt"
                                Desc="According to elite we providing web Development
                                services to our honorable clients for business."
                            />
                        </Fade>
                    </div>
                    <div className="col-lg-4">
                        <Fade bottom>
                            <SingleService
                                itemClass="ras-services-item fadeInLeft"
                                IconClass="ras-service-icon orange-bg-icon"
                                BtnClass="read-more bg-orange"
                                Icon='flaticon-digital-marketing'
                                Title="Digital Marketing"
                                Desc="Our team delivers expert digital marketing solutions, tailored to drive your business growth."
                            />
                        </Fade>
                    </div>
                    <div className="col-lg-4">
                        <Fade bottom>
                            <SingleService
                                itemClass="ras-services-item fadeInLeft"
                                IconClass="ras-service-icon skyblue-bg-icon"
                                BtnClass="read-more bg-sky-blue"
                                Icon='flaticon-vector'
                                Title="Web & Graphic Design"
                                Desc="Our proficiency shines in crafting web and graphic designs, enhancing clients' business visuals."
                            />
                        </Fade>
                    </div>
                    <div className="col-lg-4">
                        <Fade bottom>
                            <SingleService
                                itemClass="ras-services-item fadeInLeft"
                                IconClass="ras-service-icon red-bg-icon"
                                BtnClass="read-more bg-red"
                                Icon='flaticon-operator'
                                Title="Business Consulting"
                                Desc="Professionals analyze and offer advice to enhance competitiveness and achieve objectives."
                            />
                        </Fade>
                    </div>
                    <div className="col-lg-4">
                        <Fade bottom>
                            <SingleService
                                itemClass="ras-services-item fadeInLeft"
                                IconClass="ras-service-icon yellow-bg-icon"
                                BtnClass="read-more bg-yellow"
                                Icon='flaticon-user'
                                Title="Social Marketing"
                                Desc="We specialize in Social Marketing, leveraging social media for brand growth and audience engagement."
                            />
                        </Fade>
                    </div>
                    <div className="col-lg-4">
                        <Fade bottom>
                            <SingleService
                                itemClass="ras-services-item fadeInLeft"
                                IconClass="ras-service-icon orange-bg-icon"
                                BtnClass="read-more bg-orange"
                                Icon='flaticon-email'
                                Title="Email Marketing"
                                Desc="Email Marketing is our expertise, crafting impactful campaigns for effective audience reach."
                            />
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;