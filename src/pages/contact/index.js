import React from 'react';
import HeaderStyleThree from '../../components/Header/HeaderStyleThree';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import ContactMain from './ContactMain';
import ScrollToTop from '../../components/ScrollTop';

// Image
import Logo from '../../assets/images/logos/logo-colored.svg';

const Contact = () => {
    return (
        <React.Fragment>
            <HeaderStyleThree
                parentMenu='home'
                headerNormalLogo={Logo}
                headerClass='ras-header ras-header-2'
            />

            <Breadcrumb
                pageTitle="Contact"
            />

            <ContactMain />

            {/* scrolltop-start */}
            <ScrollToTop />
            {/* scrolltop-end */}

            <Footer
                footerClass="ras-footer ras-footer-1 ras-footer-1-fade-bg"
                footerLogo={Logo}
            />

        </React.Fragment>
    );
}


export default Contact;

