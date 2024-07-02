import React from 'react';
import Slider from "react-slick";
import SingleTestimonialTwo from '../../components/Testimonial/SingleTestimonialTwo';

import dotShape1 from '../../assets/images/testimonial/testimonial-3-dot-shape-1.svg';
import dotShape2 from '../../assets/images/testimonial/testimonial-3-dot-shape-2.svg';

import testiImg1 from '../../assets/images/testimonial/testimonial-3-user-1.jpg';
import testiImg2 from '../../assets/images/testimonial/testimonial-3-user-2.jpg';

const Testimonial = () => {

    const testimonialSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <React.Fragment>
            <div className="ras-testimonial-2">
            <img src={dotShape2} alt="testimonial-dot-shape-2" className="testimonial-dot-shape-2" />
            <img src={dotShape1} alt="testimonial-dot-shape-1" className="testimonial-dot-shape-1" />
                <div className="container">
                    <div className="ras-slider-one-col">
                        <Slider {...testimonialSettings}>
                            <SingleTestimonialTwo
                                itemClass="ras-single-testimonial"
                                itemImg={testiImg1}
                                Title="Kirk Ayzenberg"
                                Designation="President at Nextres"
                                Desc="Our experience with the CodeCharley Team has been exceptional! Their dedication, technical proficiency, and commitment to providing top-notch support have exceeded all expectations."
                            />
                            <SingleTestimonialTwo
                                itemClass="ras-single-testimonial"
                                itemImg={testiImg2}
                                Title="Jeff Gopshtein"
                                Designation="Co-Founder & CEO at Finresi"
                                Desc="We're incredibly impressed by the CodeCharley Team's professionalism and dedication. Their consistent high-quality service, problem-solving skills, and commitment have made a lasting positive impact."
                            />
                        </Slider>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Testimonial