import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PortfolioPageBcsg from '../components/PortfolioPageBcsg';
import CheckPortfolioPage from '../components/CheckPortfolioPage';
import PortfolioCarouselBcsg from '../components/PortfolioCarouselBcsg';

const Bcsg = () => (
  <div>
    <div>
      <Helmet>
        <meta
          name="description"
          itemProp="description"
          content="An Agency approached me, with a contract working for the company BCSG. They needed a developer to come on board,
          for a short period of time, to work on a Wordpress website."
        />
        <title>BCSG - Portfolio - Full Stack Developer | Andrew Baisden | London</title>
        <link rel="canonical" href="https://andrewbaisden.com/portfolio/bcsg" />
      </Helmet>
    </div>
    <CheckPortfolioPage />
    <Header />
    <PortfolioPageBcsg companyBG="#ffffff" />
    <PortfolioCarouselBcsg />
    <Footer />
  </div>
);

export default Bcsg;
