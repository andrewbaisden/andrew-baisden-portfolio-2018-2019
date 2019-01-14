import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PortfolioPageUCL from '../components/PortfolioPageUCL';
import CheckPortfolioPage from '../components/CheckPortfolioPage';
// import PortfolioCarouselUCL from '../components/PortfolioCarouselUCL';

const UniversityCollegeLondon = () => (
  <div>
    <div>
      <Helmet>
        <meta
          name="description"
          itemProp="description"
          content="A recruitment agency approached me with a Front-End Web Developer role working for the University College London, which I accepted. The University had a backlog of work and they needed someone else to come on board and assist them with it."
        />
        <title>University College London - Portfolio - Full Stack Developer | Andrew Baisden | London</title>
        <link rel="canonical" href="https://andrewbaisden.com/university-college-london" />
      </Helmet>
    </div>
    <CheckPortfolioPage />
    <Header />
    <PortfolioPageUCL companyBG="#4FA2B7" />
    {/* <PortfolioCarouselUCL /> */}
    <Footer />
  </div>
);

export default UniversityCollegeLondon;
