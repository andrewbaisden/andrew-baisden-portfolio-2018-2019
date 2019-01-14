import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PortfolioPageAprilSix from '../components/PortfolioPageAprilSix';
import CheckPortfolioPage from '../components/CheckPortfolioPage';
// import PortfolioCarouselAprilSix from '../components/PortfolioCarouselAprilSix';

const AprilSix = () => (
  <div>
    <div>
      <Helmet>
        <meta
          name="description"
          itemProp="description"
          content="An urgent job opening became available, as a few people were going on holiday and there was going to be a backlog of work. I was offered a contract and hired as an HTML Developer."
        />
        <title>April Six - Portfolio - Full Stack Developer | Andrew Baisden | London</title>
        <link rel="canonical" href="https://andrewbaisden.com/portfolio/april-six" />
      </Helmet>
    </div>
    <CheckPortfolioPage />
    <Header />
    <PortfolioPageAprilSix companyBG="#0EA2BC" />
    {/* <PortfolioCarouselAprilSix /> */}
    <Footer />
  </div>
);

export default AprilSix;
