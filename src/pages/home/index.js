import React from 'react';
import HomeTwoMain from './HomeTwoMain';
import HeaderStyleThree from '../../components/Header/HeaderStyleThree';
import Footer from '../../components/Footer';

import Logo from '../../assets/images/logos/logo-colored.svg';

class HomeTwo extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HeaderStyleThree
                    parentMenu='home'
                    headerNormalLogo={Logo}
                    headerClass='ras-header ras-header-2'
                />
                <HomeTwoMain />

                <Footer
                    footerCTA={true}
                    footerClass="ras-footer ras-footer-1 ras-footer-1-fade-bg"
                    footerLogo={Logo}
                />
            </React.Fragment>
        );
    }
}


export default HomeTwo;

