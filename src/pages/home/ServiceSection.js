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
                                Desc="According to elite we providing web Development
                                services to our honorable clients for business."
                            />
                        </div>
                        <div className="col-lg-4">
                            <SingleService
                                itemClass="ras-services-item"
                                IconClass="ras-service-icon orange-bg-icon"
                                Icon='flaticon-digital-marketing'
                                Title="Digital Marketing"
                                Desc="Our team delivers expert digital marketing solutions, tailored to drive your business growth."
                            />
                        </div>
                        <div className="col-lg-4">
                            <SingleService
                                itemClass="ras-services-item"
                                IconClass="ras-service-icon skyblue-bg-icon"
                                Icon='flaticon-vector'
                                Title="Web & Graphic Design"
                                Desc="Our proficiency shines in crafting web and graphic designs, enhancing clients' business visuals."
                            />
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Service;