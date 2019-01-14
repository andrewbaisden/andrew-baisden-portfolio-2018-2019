import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import mediaReachLogo from '../img/mediaReachLogo.png';

const PortfolioMediaReach = props => (
  <Link href="portfolio/mediareach-advertising" to="portfolio/mediareach-advertising">
    <div className="portfolio-company-container">
      <div className="portfolio-company-animation">See the story</div>
      <div className="portfolio-company" style={{ background: `${props.companyBG}` }}>
        <div className="portfolio-logo">
          <img src={mediaReachLogo} alt="Mediareach Advertising" />
        </div>
        <div className="portfolio-triangle" />
        <div className="portfolio-description">
          <h1>Mediareach Advertising</h1>
          <p>Junior Web Developer</p>
          <div className="portfolio-border" />
        </div>
      </div>
    </div>
  </Link>
);

PortfolioMediaReach.propTypes = {
  companyBG: PropTypes.string.isRequired,
};

export default PortfolioMediaReach;
