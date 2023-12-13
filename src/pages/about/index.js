import React from 'react';
import HeaderStyleThree from '../../components/Header/HeaderStyleThree';
import Footer from '../../components/Footer';
import AboutMain from './AboutMain';

// Image
import Logo from '../../assets/images/logos/logo-colored.svg';

const About = () => {

    return (
        <React.Fragment>
            <HeaderStyleThree
                parentMenu='home'
                headerNormalLogo={Logo}
                headerClass='ras-header ras-header-2'
            />

            {/* About Main */}
            <AboutMain />
            {/* About Main */}

            <Footer
                footerCTA={true}
                footerClass="ras-footer ras-footer-1 ras-footer-1-fade-bg"
                footerLogo={Logo}
            />
        </React.Fragment>
    );
}

export default About;