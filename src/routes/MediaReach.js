import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PortfolioPageMediaReach from '../components/PortfolioPageMediaReach';
import CheckPortfolioPage from '../components/CheckPortfolioPage';
import PortfolioCarouselMediaReach from '../components/PortfolioCarouselMediaReach';

const MediaReach = () => (
  <div>
    <div>
      <Helmet>
        <meta
          name="description"
          itemProp="description"
          content="I was hired as a Junior Web Developer/Designer and during my time there I worked on various projects. I collaborated with the Creative, PR and Accounting departments to get work done."
        />
        <title>Mediareach - Portfolio - Full Stack Developer | Andrew Baisden | London</title>
        <link rel="canonical" href="https://andrewbaisden.com/portfolio/mediareach-advertising" />
      </Helmet>
    </div>
    <CheckPortfolioPage />
    <Header />
    <PortfolioPageMediaReach companyBG="#F0F2F3" />
    <PortfolioCarouselMediaReach />
    <Footer />
  </div>
);

export default MediaReach;
