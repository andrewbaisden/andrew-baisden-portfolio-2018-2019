import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import schawkLogo from '../img/schawkLogo.png';

const PortfolioSky = props => (
  <Link href="portfolio/schawk" to="portfolio/schawk">
    <div className="portfolio-company-container">
      <div className="portfolio-company-animation">See the story</div>
      <div className="portfolio-company" style={{ background: `${props.companyBG}` }}>
        <div className="portfolio-logo">
          <img src={schawkLogo} alt="schawk" />
        </div>
        <div className="portfolio-triangle" />
        <div className="portfolio-description">
          <h1>Schawk</h1>
          <p>Digital Developer</p>
          <div className="portfolio-border" />
        </div>
      </div>
    </div>
  </Link>
);

PortfolioSky.propTypes = {
  companyBG: PropTypes.string,
};

PortfolioSky.defaultProps = {
  companyBG: '#ffffff"',
};

export default PortfolioSky;
