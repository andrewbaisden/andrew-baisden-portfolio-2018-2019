import React from 'react';
import PropTypes from 'prop-types';
import uclLogo from '../img/uclLogo.png';
import SkillUsagePodUCL from '../components/SkillUsagePodUCL';

const PortfolioPageUCL = props => (
  <div className="portfolio-company-page-container">
    <div className="portfolio-company-skills">
      <div className="portfolio-company-logo" style={{ background: `${props.companyBG}` }}>
        <img src={uclLogo} alt="University College London" />
      </div>
      <div className="portfolio-skill-usage">
        <SkillUsagePodUCL />
      </div>
    </div>
    <div className="portfolio-company-copy">
      <p>
        A recruitment agency approached me with a Front-End Web Developer role, working for the University College
        London. The University had a backlog of work, and they needed someone else to come on board, and assist them
        with it. My main task was to convert all of the Human Resources policy pages from the old website, and to make
        sure that they displayed correctly, in the new one. I was going to be migrating the existing Human Resources
        website to the new system, as well as doing general content management. Keeping both the old, and new websites
        up to date and, making improvements where necessary.
      </p>

      <p>
        I used Adobe Dreamweaver, to write the HTML5, and CSS3 code for the pages. For the most part, I was copying
        existing code, and cleaning it up as well as, making it more organised. The website had a custom, Back-End
        system, which was connected to a MySQL database, that I had to learn. I created dynamic webpages, and used
        jQuery to add functionality, like an accordion. Everything was updated using the FTP system in Adobe
        Dreamweaver, which was connected to the Universities website hosting server.
      </p>

      <p>
        This role was primarily a developer role, and there was very little design work required, other than using the
        assets which were already provided.
      </p>
    </div>
  </div>
);

PortfolioPageUCL.propTypes = {
  companyBG: PropTypes.string.isRequired,
};

export default PortfolioPageUCL;
