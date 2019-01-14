import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PortfolioPageSky from '../components/PortfolioPageSky';
import CheckPortfolioPage from '../components/CheckPortfolioPage';
import PortfolioCarouselSky from '../components/PortfolioCarouselSky';

const Sky = () => (
  <div>
    <div>
      <Helmet>
        <meta
          name="description"
          itemProp="description"
          content="I was contacted by an Agency, regarding a role working for SKY. Schawk, was the company that I was going to be working for, and we would be contracting for the client, and working on site at Sky Central."
        />
        <title>Schawk - Portfolio - Full Stack Developer | Andrew Baisden | London</title>
        <link rel="canonical" href="https://andrewbaisden.com/portfolio/schawk" />
      </Helmet>
    </div>
    <CheckPortfolioPage />
    <Header />
    <PortfolioPageSky companyBG="#ffffff" />
    <PortfolioCarouselSky />
    <Footer />
  </div>
);

export default Sky;
