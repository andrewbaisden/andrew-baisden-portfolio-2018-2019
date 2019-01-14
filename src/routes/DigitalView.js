import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PortfolioPageDigitalView from '../components/PortfolioPageDigitalView';
import CheckPortfolioPage from '../components/CheckPortfolioPage';
// import PortfolioCarouselDigitalView from '../components/PortfolioCarouselDigitalView';

const DigitalView = () => (
  <div>
    <div>
      <Helmet>
        <meta
          name="description"
          itemProp="description"
          content="I joined Digital View as Junior Web Developer through an Internship work programme at The University of West London. I was part of a team of 4 including myself."
        />
        <title>Digital View - Portfolio - Full Stack Developer | Andrew Baisden | London</title>
        <link rel="canonical" href="https://andrewbaisden.com/portfolio/digital-view" />
      </Helmet>
    </div>
    <CheckPortfolioPage />
    <Header />
    <PortfolioPageDigitalView companyBG="#FFFFFF" />
    {/* <PortfolioCarouselDigitalView /> */}
    <Footer />
  </div>
);

export default DigitalView;
