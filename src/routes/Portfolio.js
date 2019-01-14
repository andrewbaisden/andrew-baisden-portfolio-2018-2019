import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PortfolioOcado from '../components/PortfolioOcado';
import PortfolioBcsg from '../components/PortfolioBcsg';
import PortfolioSky from '../components/PortfolioSky';
import PortfolioPowWow from '../components/PortfolioPowWow';
import PortfolioAprilSix from '../components/PortfolioAprilSix';
import PortfolioUCL from '../components/PortfolioUCL';
import PortfolioMediaReach from '../components/PortfolioMediaReach';
import PortfolioEarlex from '../components/PortfolioEarlex';
import PortfolioDigitalView from '../components/PortfolioDigitalView';
import PortfolioFocusDIY from '../components/PortfolioFocusDIY';
import PortfolioABPortfolio2014 from '../components/PortfolioABPortfolio2014';
import CheckPortfolioPage from '../components/CheckPortfolioPage';

const Portfolio = () => (
  <div>
    <div>
      <Helmet>
        <meta
          name="description"
          itemProp="description"
          content="Full Stack Developer, portfolio of Andrew Baisden. A combination of developer and design work."
        />
        <title>Portfolio - Full Stack Developer | Andrew Baisden | London</title>
        <link rel="canonical" href="https://andrewbaisden.com/portfolio" />
      </Helmet>
    </div>
    <CheckPortfolioPage />
    <Header />
    <div className="portfolio-home-container">
      <PortfolioOcado companyBG="#ffffff" />
      <PortfolioBcsg companyBG="#ffffff" />
      <PortfolioSky companyBG="#ffffff" />
      <PortfolioPowWow companyBG="#ffffff" />
      <PortfolioABPortfolio2014 companyBG="#333333" />
      <PortfolioAprilSix companyBG="#0EA2BC" />
      <PortfolioUCL companyBG="#4FA2B7" />
      <PortfolioMediaReach companyBG="#F0F2F3" />
      <PortfolioEarlex companyBG="#F4F4F4" />
      <PortfolioDigitalView companyBG="#ffffff" />
      <PortfolioFocusDIY companyBG="#1D4C9A" />
    </div>
    <Footer />
  </div>
);

export default Portfolio;
