import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PortfolioPageOcado from '../components/PortfolioPageOcado';
import CheckPortfolioPage from '../components/CheckPortfolioPage';
// import PortfolioCarouselOcado from '../components/PortfolioCarouselOcado';

const Ocado = () => (
  <div>
    <div>
      <Helmet>
        <meta
          name="description"
          itemProp="description"
          content="An agency approached me with a job, working for Ocado in Hatfield. In this role, I was working alongside another developer, and a web designer."
        />
        <title>Ocado - Portfolio - Full Stack Developer | Andrew Baisden | London</title>
        <link rel="canonical" href="https://andrewbaisden.com/portfolio/ocado" />
      </Helmet>
    </div>
    <CheckPortfolioPage />
    <Header />
    <PortfolioPageOcado companyBG="#ffffff" />
    {/* <PortfolioCarouselOcado /> */}
    <Footer />
  </div>
);

export default Ocado;
