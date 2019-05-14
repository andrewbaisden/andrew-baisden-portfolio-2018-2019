import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import focusDIYLogo from '../img/focusDIYLogo.png';

const PortfolioFocusDIY = props => (
  <Link href="portfolio/focus-diy" to="portfolio/focus-diy">
    <div className="portfolio-company-container">
      <div className="portfolio-company-animation">See the story</div>
      <div className="portfolio-company" style={{ background: `${props.companyBG}` }}>
        <div className="portfolio-logo">
          <img src={focusDIYLogo} alt="Focus DIY" />
        </div>
        <div className="portfolio-triangle" />
        <div className="portfolio-description">
          <h1>Focus DIY</h1>
          <p>Front-End Developer</p>
          <div className="portfolio-border" />
        </div>
      </div>
    </div>
  </Link>
);

PortfolioFocusDIY.propTypes = {
  companyBG: PropTypes.string,
};

PortfolioFocusDIY.defaultProps = {
  companyBG: '#1D4C9A',
};

export default PortfolioFocusDIY;
