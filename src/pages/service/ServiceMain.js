import React from 'react';
import Service from './ServiceSection';
import Testimonial from '../home/TestimonialSection';
import Breadcrumb from '../../components/Breadcrumb';
import ScrollToTop from '../../components/ScrollTop';


const ServiceMain = () => {

    return (
        <React.Fragment>
            {/* Breadcrumb Start */}
            <Breadcrumb
                pageTitle="Service"
            />
            {/* Breadcrumb End */}

            {/* Service Start */}
            <Service />
            {/* Service End */}

            {/* Testimonial Start */}
            <Testimonial />
            {/* Testimonial End */}

            <div style={{ height: 200 }} />

            {/* scrolltop-start */}
            <ScrollToTop />
            {/* scrolltop-end */}

        </React.Fragment>
    )
}

export default ServiceMain;