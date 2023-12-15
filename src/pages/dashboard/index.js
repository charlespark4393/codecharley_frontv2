import React from "react";
import HeaderStyleThree from "../../components/Header/HeaderStyleThree";

// Image
import Logo from '../../assets/images/logos/logo-colored.svg';
import Breadcrumb from "../../components/Breadcrumb";
import ScrollToTop from "../../components/ScrollTop";
import Footer from "../../components/Footer";
import DashboardMain from "./DashboardMain";
import { useParams } from "react-router-dom";
import DashboardItem from "./DashboardItem";

const Dashboard = (props) => {
  const { id } = useParams()

  return (
    <React.Fragment>
      <HeaderStyleThree
        parentMenu='home'
        headerNormalLogo={Logo}
        headerClass='ras-header ras-header-2'
      />

      <Breadcrumb
        pageTitle="Dashboard"
      />

      {id === undefined ? <DashboardMain /> : <DashboardItem id={Number(id)} />}

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

export default Dashboard