import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import digitalViewLogo from '../img/digitalViewLogo.png';

const PortfolioDigitalView = props => (
  <Link href="portfolio/digital-view" to="portfolio/digital-view">
    <div className="portfolio-company-container">
      <div className="portfolio-company-animation">See the story</div>
      <div className="portfolio-company" style={{ background: `${props.companyBG}` }}>
        <div className="portfolio-logo">
          <img src={digitalViewLogo} alt="Digital View" />
        </div>
        <div className="portfolio-triangle" />
        <div className="portfolio-description">
          <h1>Digital View</h1>
          <p>Junior Web Developer</p>
          <div className="portfolio-border" />
        </div>
      </div>
    </div>
  </Link>
);

PortfolioDigitalView.propTypes = {
  companyBG: PropTypes.string,
};

PortfolioDigitalView.defaultProps = {
  companyBG: '#ffffff',
};

export default PortfolioDigitalView;
