import React from "react";
import HeaderStyleThree from "../../components/Header/HeaderStyleThree";

// Image
import Logo from '../../assets/images/logos/logo-colored.svg';
import Breadcrumb from "../../components/Breadcrumb";
import ScrollToTop from "../../components/ScrollTop";
import Footer from "../../components/Footer";
import ContactsMain from "./ContactsMain";

const Contacts = (props) => {
  return (
    <React.Fragment>
      <HeaderStyleThree
        parentMenu='home'
        headerNormalLogo={Logo}
        headerClass='ras-header ras-header-2'
      />

      <Breadcrumb
        pageTitle="Contacts"
      />

      <ContactsMain />

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

export default Contacts