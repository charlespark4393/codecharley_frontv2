import React from 'react';
import Team from './TeamSection';
import Service from './ServiceSection';
import Feature from './FeatureSection';
import CaseStudy from './CaseStudySection';
import HomeTwoSlider from './SliderSection';
import WhyChooseUs from './WhyChooseUsSection';
import Testimonial from './TestimonialSection';
import ScrollToTop from '../../components/ScrollTop';


const HomeTwoMain = () => {
	return (
		<React.Fragment>
			<div className="ras-main-content">
				{/* Banner-area-start */}
				<HomeTwoSlider />
				{/* Banner-area-end */}

				{/* Service-area-start */}
				<Service />
				{/* Service-area-end */}

				{/* Feature-area-start */}
				<Feature />
				{/* Feature-area-end */}

				{/* CaseStudy section start */}
				<CaseStudy />
				{/* CaseStudy section end */}

				{/* WhyChooseUs section start */}
				<WhyChooseUs />
				{/* WhyChooseUs section end */}

				{/* testmonial-area-start */}
				<Testimonial />
				{/* testmonial-area-end */}

				{/* Team section start */}
				<Team />
				{/* Team section end */}

				{/* scrolltop-start */}
				<ScrollToTop />
				{/* scrolltop-end */}
			</div>
		</React.Fragment>
	);
}

export default HomeTwoMain;