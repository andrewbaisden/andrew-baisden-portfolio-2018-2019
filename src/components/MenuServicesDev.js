import React from 'react';
import PropTypes from 'prop-types';

const MenuServices = props => (
  <div className="services-menu">
    <ul>
      <li style={{ background: `${props.menuBG}` }}>
        <a href="#customWebsite" alt="Custom Website Themes and Applications">
          Custom Website Themes and Applications
        </a>
      </li>
      <li style={{ background: `${props.menuBG}` }}>
        <a href="#dynamicWebsites" alt="Dynamic Websites and Applications">
          Dynamic Websites and Applications
        </a>
      </li>
      <li style={{ background: `${props.menuBG}` }}>
        <a href="#w3c" alt="W3C Web Standards">
          W3C Web Standards
        </a>
      </li>
      <li style={{ background: `${props.menuBG}` }}>
        <a href="#seo" alt="Search Engine Optimisation (SEO)">
          Search Engine Optimisation (SEO)
        </a>
      </li>
      <li style={{ background: `${props.menuBG}` }}>
        <a href="#analytics" alt="Analytics and Reports">
          Analytics and Reports
        </a>
      </li>
      <li style={{ background: `${props.menuBG}` }}>
        <a href="#websiteUpgrade" alt="Website Upgrade">
          Website Upgrade
        </a>
      </li>
      <li style={{ background: `${props.menuBG}` }}>
        <a href="#debug" alt="Debugging and Testing">
          Debugging and Testing
        </a>
      </li>
      <li style={{ background: `${props.menuBG}` }}>
        <a href="#support" alt="Technical Support">
          Technical Support
        </a>
      </li>
    </ul>
  </div>
);

MenuServices.propTypes = {
  menuBG: PropTypes.string,
};

MenuServices.defaultProps = {
  menuBG: '#F2A102',
};

export default MenuServices;
