import React from 'react';
import Fade from 'react-reveal/Fade';
import SingleService from '../../components/Service/SingleService';

const Service = () => {

    return (
        <div className="ras-services ras-services-1 ras-service-1-spacer-bottom">
            <div className="container">
                <Fade bottom>
                    <h2 className="mb-50 text-center">We’ve helped hundreds<br /> of clients to reach internet & grow<br /> <span class="color-title">their Business</span></h2>
                </Fade>
                <Fade left cascade>
                    <div className="row">
                        <div className="col-lg-4">
                            <SingleService
                                itemClass="ras-services-item"
                                Icon='flaticon-web-programming'
                                Title="Web Developmnt"
                                Desc="Our web development approach integrates responsive design, user-centric focus, scalable architecture, and interactive interfaces."
                            />
                        </div>
                        <div className="col-lg-4">
                            <SingleService
                                itemClass="ras-services-item"
                                IconClass="ras-service-icon orange-bg-icon"
                                BtnClass="read-more bg-orange"
                                Icon='flaticon-digital-marketing'
                                Title="Digital Marketing"
                                Desc="Our digital marketing strategy leverages engaging content, targeted ads, SEO optimization, social media, and ensuring measurable results."
                            />
                        </div>
                        <div className="col-lg-4">
                            <SingleService
                                itemClass="ras-services-item"
                                IconClass="ras-service-icon skyblue-bg-icon"
                                BtnClass="read-more bg-sky-blue"
                                Icon='flaticon-vector'
                                Title="Web & Graphic Design"
                                Desc="Our philosophy prioritizes intuitive UX/UI, branding synergy, visual storytelling, typography, aesthetic balance, and impactful imagery."
                            />
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Service;