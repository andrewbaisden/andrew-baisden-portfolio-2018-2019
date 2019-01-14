import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PortfolioPageAndrewBaisden2014 from '../components/PortfolioPageAndrewBaisden2014';
import CheckPortfolioPage from '../components/CheckPortfolioPage';
import PortfolioCarousel from '../components/PortfolioCarousel';

const Andrewbaisden = () => (
  <div>
    <div>
      <Helmet>
        <meta
          name="description"
          itemProp="description"
          content="My previous website was designed and built in 2014. Since then it went through numerous upgrades and tweaks."
        />
        <title>Portfolio Website 2014 - Portfolio - Full Stack Developer | Andrew Baisden | London</title>
        <link rel="canonical" href="https://andrewbaisden.com/andrew-baisden-portfolio-2014" />
      </Helmet>
    </div>
    <CheckPortfolioPage />
    <Header />
    <PortfolioPageAndrewBaisden2014 companyBG="#333333" />
    <PortfolioCarousel />
    <Footer />
  </div>
);

export default Andrewbaisden;
