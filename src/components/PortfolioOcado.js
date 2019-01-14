import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ocadoLogo from '../img/ocadoLogo.png';

const PortfolioOcado = props => (
  <Link href="portfolio/ocado" to="portfolio/ocado">
    <div className="portfolio-company-container">
      <div className="portfolio-company-animation">See the story</div>
      <div className="portfolio-company" style={{ background: `${props.companyBG}` }}>
        <div className="portfolio-logo">
          <img src={ocadoLogo} alt="Ocado" />
        </div>
        <div className="portfolio-triangle" />
        <div className="portfolio-description">
          <h1>Ocado</h1>
          <p>Web Developer</p>
          <div className="portfolio-border" />
        </div>
      </div>
    </div>
  </Link>
);

PortfolioOcado.propTypes = {
  companyBG: PropTypes.string.isRequired,
};

export default PortfolioOcado;
