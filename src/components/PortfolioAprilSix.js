import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import aprilSixLogo from '../img/aprilSixLogo.png';

const PortfolioAprilSix = props => (
  <Link href="portfolio/april-six" to="portfolio/april-six">
    <div className="portfolio-company-container">
      <div className="portfolio-company-animation">See the story</div>
      <div className="portfolio-company" style={{ background: `${props.companyBG}` }}>
        <div className="portfolio-logo">
          <img src={aprilSixLogo} alt="April Six" />
        </div>
        <div className="portfolio-triangle" />
        <div className="portfolio-description">
          <h1>April Six</h1>
          <p>HTML Developer</p>
          <div className="portfolio-border" />
        </div>
      </div>
    </div>
  </Link>
);

PortfolioAprilSix.propTypes = {
  companyBG: PropTypes.string.isRequired,
};

export default PortfolioAprilSix;
