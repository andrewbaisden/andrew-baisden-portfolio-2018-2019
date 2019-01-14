import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ab2014Logo from '../img/ab2014Logo.png';

const PortfolioABPortfolio2014 = props => (
  <Link href="portfolio/andrew-baisden-portfolio-2014" to="portfolio/andrew-baisden-portfolio-2014">
    <div className="portfolio-company-container">
      <div className="portfolio-company-animation">See the story</div>
      <div className="portfolio-company" style={{ background: `${props.companyBG}` }}>
        <div className="portfolio-logo">
          <img src={ab2014Logo} alt="Andrew Baisden Portfolio 2014" />
        </div>
        <div className="portfolio-triangle" />
        <div className="portfolio-description">
          <h1>Andrew Baisden Portfolio 2014</h1>
          <p>Front-End Web Developer</p>
          <div className="portfolio-border" />
        </div>
      </div>
    </div>
  </Link>
);

PortfolioABPortfolio2014.propTypes = {
  companyBG: PropTypes.string.isRequired,
};

export default PortfolioABPortfolio2014;
