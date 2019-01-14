import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import toolsIcon from '../img/toolsIcon.svg';
import MenuServiceTool from '../components/MenuServiceTool';
import ServicesToolPod from '../components/ServicesToolPod';
import ServicesBreadcrumb from '../components/ServicesBreadcrumb';
import CheckAboutPage from '../components/CheckAboutPage';

const Tools = () => (
  <div>
    <div>
      <Helmet>
        <meta
          name="description"
          itemProp="description"
          content="I am primarily a macOS developer this is the computer system that I work with daily. Although I specialise in working on macs I am familiar with Windows computers too. I use various software such as Adobe CC, Visual Studio Code and Hyper."
        />
        <title>Tools - About - Full Stack Developer | Andrew Baisden | London</title>
        <link rel="canonical" href="https://andrewbaisden.com/about/tools" />
      </Helmet>
    </div>
    <CheckAboutPage />
    <Header />
    <div className="developer-page-container">
      <ServicesBreadcrumb />
      <div className="developer-page-content">
        <div className="services-home">
          <h1>Services</h1>
          <img src={toolsIcon} alt="Developer" />
          <p>Tools</p>
        </div>
      </div>

      <MenuServiceTool menuBG="var(--base-colour-red)" />
      <ServicesToolPod h1bg="none" />
    </div>
    <Footer />
  </div>
);

export default Tools;
