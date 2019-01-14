import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import designerIcon from '../img/designerIcon.svg';
import MenuServiceDesign from '../components/MenuServiceDesign';
import ServicesDesignerPod from '../components/ServicesDesignerPod';
import ServicesBreadcrumb from '../components/ServicesBreadcrumb';
import CheckAboutPage from '../components/CheckAboutPage';

const Developer = () => (
  <div>
    <div>
      <Helmet>
        <meta
          name="description"
          itemProp="description"
          content="Designing has always been a passion of mine ever since I first started to learn Adobe Photoshop all of those years ago."
        />
        <title>Designer - About - Full Stack Developer | Andrew Baisden | London</title>
        <link rel="canonical" href="https://andrewbaisden.com/about/designer" />
      </Helmet>
    </div>
    <CheckAboutPage />
    <Header />
    <div className="developer-page-container">
      <ServicesBreadcrumb />
      <div className="developer-page-content">
        <div className="services-home">
          <h1>Services</h1>
          <img src={designerIcon} alt="Developer" />
          <p>Designer</p>
        </div>
      </div>

      <MenuServiceDesign menuBG="var(--base-colour-green)" />
      <ServicesDesignerPod h1bg="none" />
    </div>
    <Footer />
  </div>
);

export default Developer;
