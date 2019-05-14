import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import uclLogo from '../img/uclLogo.png';

const PortfolioUCL = props => (
  <Link href="portfolio/university-college-london" to="portfolio/university-college-london">
    <div className="portfolio-company-container">
      <div className="portfolio-company-animation">See the story</div>
      <div className="portfolio-company" style={{ background: `${props.companyBG}` }}>
        <div className="portfolio-logo">
          <img src={uclLogo} alt="University College London" />
        </div>
        <div className="portfolio-triangle" />
        <div className="portfolio-description">
          <h1>University College London</h1>
          <p>Front-End Web Developer</p>
          <div className="portfolio-border" />
        </div>
      </div>
    </div>
  </Link>
);

PortfolioUCL.propTypes = {
  companyBG: PropTypes.string,
};

PortfolioUCL.defaultProps = {
  companyBG: '#4FA2B7',
};

export default PortfolioUCL;
