import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import developIcon from '../img/developIcon.svg';
import MenuServicesDev from '../components/MenuServicesDev';
import ServicesDeveloperPod from '../components/ServicesDeveloperPod';
import ServicesBreadcrumb from '../components/ServicesBreadcrumb';
import CheckAboutPage from '../components/CheckAboutPage';

const Developer = () => (
  <div>
    <div>
      <Helmet>
        <meta
          name="description"
          itemProp="description"
          content="Over the years I have constantly being evolving my skills, and I have now settled on a very modern developer workflow. It consists of using the Javascript frameworks React and Vue."
        />
        <title>Developer - About - Full Stack Developer | Andrew Baisden | London</title>
        <link rel="canonical" href="https://andrewbaisden.com/about/developer" />
      </Helmet>
    </div>
    <CheckAboutPage />
    <Header />
    <div className="developer-page-container">
      <ServicesBreadcrumb />
      <div className="developer-page-content">
        <div className="services-home">
          <h1>Services</h1>
          <img src={developIcon} alt="Developer" />
          <p>Developer</p>
        </div>
      </div>

      <MenuServicesDev menuBG="var(--base-colour-orange)" />
      <ServicesDeveloperPod />
    </div>
    <Footer />
  </div>
);

export default Developer;
