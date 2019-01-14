import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PortfolioPagePowWow from '../components/PortfolioPagePowWow';
import CheckPortfolioPage from '../components/CheckPortfolioPage';
// import PortfolioCarouselPowWow from '../components/PortfolioCarouselPowWow';

const Sky = () => (
  <div>
    <div>
      <Helmet>
        <meta
          name="description"
          itemProp="description"
          content="An agency approached me with a job working at PowWow who are a multimedia creative agency. It was going to be a two week contract."
        />
        <title>PowWow - Portfolio - Full Stack Developer | Andrew Baisden | London</title>
        <link rel="canonical" href="https://andrewbaisden.com/portfolio/powwow" />
      </Helmet>
    </div>
    <CheckPortfolioPage />
    <Header />
    <PortfolioPagePowWow companyBG="#ffffff" />
    {/* <PortfolioCarouselPowWow /> */}
    <Footer />
  </div>
);

export default Sky;
