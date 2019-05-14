import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import earlexLogo from '../img/earlexLogo.png';

const PortfolioEarlex = props => (
  <Link href="portfolio/earlex" to="portfolio/earlex">
    <div className="portfolio-company-container">
      <div className="portfolio-company-animation">See the story</div>
      <div className="portfolio-company" style={{ background: `${props.companyBG}` }}>
        <div className="portfolio-logo">
          <img src={earlexLogo} alt="Earlex" />
        </div>
        <div className="portfolio-triangle" />
        <div className="portfolio-description">
          <h1>Earlex</h1>
          <p>Graphic Designer</p>
          <div className="portfolio-border" />
        </div>
      </div>
    </div>
  </Link>
);

PortfolioEarlex.propTypes = {
  companyBG: PropTypes.string,
};

PortfolioEarlex.defaultProps = {
  companyBG: '#F4F4F4',
};

export default PortfolioEarlex;
