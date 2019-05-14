import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import bcsgLogo from '../img/bcsgLogo.png';

const PortfolioBcsg = props => (
  <Link href="portfolio/bcsg" to="portfolio/bcsg">
    <div className="portfolio-company-container">
      <div className="portfolio-company-animation">See the story</div>
      <div className="portfolio-company" style={{ background: `${props.companyBG}` }}>
        <div className="portfolio-logo">
          <img src={bcsgLogo} alt="BCSG" />
        </div>
        <div className="portfolio-triangle" />
        <div className="portfolio-description">
          <h1>BCSG</h1>
          <p>Web Developer</p>
          <div className="portfolio-border" />
        </div>
      </div>
    </div>
  </Link>
);

PortfolioBcsg.propTypes = {
  companyBG: PropTypes.string,
};

PortfolioBcsg.defaultProps = {
  companyBG: '#ffffff',
};

export default PortfolioBcsg;
