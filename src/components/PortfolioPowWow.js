import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import powWowLogo from '../img/powWowLogo.png';

const PortfolioPowWow = props => (
  <Link href="portfolio/powwow" to="portfolio/powwow">
    <div className="portfolio-company-container">
      <div className="portfolio-company-animation">See the story</div>
      <div className="portfolio-company" style={{ background: `${props.companyBG}` }}>
        <div className="portfolio-logo">
          <img src={powWowLogo} alt="PowWow" />
        </div>
        <div className="portfolio-triangle" />
        <div className="portfolio-description">
          <h1>PowWow</h1>
          <p>Web Developer</p>
          <div className="portfolio-border" />
        </div>
      </div>
    </div>
  </Link>
);

PortfolioPowWow.propTypes = {
  companyBG: PropTypes.string.isRequired,
};

export default PortfolioPowWow;
