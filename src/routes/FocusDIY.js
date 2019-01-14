import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PortfolioPageFocusDIY from '../components/PortfolioPageFocusDIY';
import CheckPortfolioPage from '../components/CheckPortfolioPage';
// import PortfolioCarouselFocusDiy from '../components/PortfolioCarouselFocusDiy';

const FocusDIY = () => (
  <div>
    <div>
      <Helmet>
        <meta
          name="description"
          itemProp="description"
          content="Focus DIY were looking for a Front-End Developer to join their team for a few months just to help out with the main website."
        />
        <title>Focus DIY - Portfolio - Full Stack Developer | Andrew Baisden | London</title>
        <link rel="canonical" href="https://andrewbaisden.com/portfolio/focus-diy" />
      </Helmet>
    </div>
    <CheckPortfolioPage />
    <Header />
    <PortfolioPageFocusDIY companyBG="#1D4C9A" />
    {/* <PortfolioCarouselFocusDiy /> */}
    <Footer />
  </div>
);

export default FocusDIY;
