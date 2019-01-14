import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PortfolioPageEarlex from '../components/PortfolioPageEarlex';
import CheckPortfolioPage from '../components/CheckPortfolioPage';
import PortfolioCarouselEarlex from '../components/PortfolioCarouselEarlex';

const Earlex = () => (
  <div>
    <div>
      <Helmet>
        <meta
          name="description"
          itemProp="description"
          content="I was hired as a Graphic Designer in a temporary position. I was working with two other Graphic Designers as well as a few other departments."
        />
        <title>Earlex - Portfolio - Full Stack Developer | Andrew Baisden | London</title>
        <link rel="canonical" href="https://andrewbaisden.com/portfolio/earlex" />
      </Helmet>
    </div>
    <CheckPortfolioPage />
    <Header />
    <PortfolioPageEarlex companyBG="#F4F4F4" />
    <PortfolioCarouselEarlex />
    <Footer />
  </div>
);

export default Earlex;
