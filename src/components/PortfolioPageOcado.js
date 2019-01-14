import React from 'react';
import PropTypes from 'prop-types';
import ocadoLogo from '../img/ocadoLogo.png';
import SkillUsagePodOcado from '../components/SkillUsagePodOcado';

const PortfolioPageOcado = props => (
  <div className="portfolio-company-page-container">
    <div className="portfolio-company-skills">
      <div className="portfolio-company-logo" style={{ background: `${props.companyBG}` }}>
        <img src={ocadoLogo} alt="Ocado" />
      </div>
      <div className="portfolio-skill-usage">
        <SkillUsagePodOcado />
      </div>
    </div>
    <div className="portfolio-company-copy">
      <p>
        An agency approached me with a job, working for Ocado in Hatfield. In this role, I was working alongside another
        developer, and a web designer. Together we were tasked with updating the Ocado website, with new content. This
        content included landing pages, which had a main navigation, banners and sometimes drop-down content boxes.
        Ocado had a custom, propriety content management system, called Scribe. Day to day we were required to use
        Photoshop, for updating and editing content. This was followed by using HTML and CSS, for creating the new
        landing pages.
      </p>

      <p>
        The new landing pages were created using CSS Grid, with Calc as a fallback for older browsers. We would then use
        Scribe, for deploying the content to the online server. The website needed to work in at least Internet Explorer
        11, so we also had a laptop for testing in older browsers, in addition to using our own computers for testing in
        modern browsers.
      </p>

      <p>
        The most technically challenging part of the role, was getting the landing pages to display correctly in all
        browsers. Internet Explorer caused the most problems, which is why we had to write code that was backwards
        compatible. There was also a CSS drop down menu issue, which i debugged. I came to the conclusion that it would
        definitely need a javascript fix. As Scribe did not support javascript, it was going to be sent to the backend
        developers, to implement as they built the website.
      </p>
    </div>
  </div>
);

PortfolioPageOcado.propTypes = {
  companyBG: PropTypes.string.isRequired,
};

export default PortfolioPageOcado;
