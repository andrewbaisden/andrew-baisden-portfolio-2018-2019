import React from 'react';
import PropTypes from 'prop-types';
import bcsgLogo from '../img/bcsgLogo.png';
import SkillUsagePodBcsg from '../components/SkillUsagePodBcsg';

const PortfolioPageBcsg = props => (
  <div className="portfolio-company-page-container">
    <div className="portfolio-company-skills">
      <div className="portfolio-company-logo" style={{ background: `${props.companyBG}` }}>
        <img src={bcsgLogo} alt="BCSG" />
      </div>
      <div className="portfolio-skill-usage">
        <SkillUsagePodBcsg />
      </div>
    </div>
    <div className="portfolio-company-copy">
      <p>
        An Agency approached me, with a contract working for the company BCSG. They needed a developer to come on board,
        for a short period of time, to work on a Wordpress website. There was also a requirement for a quote calculator
        application to be built. The Wordpress website, was using a custom templating system called Divi Theme Builder.
        As I was unfamiliar with it, I was tasked with learning the system before I started to work on the live website.
      </p>

      <p>
        During my time there I worked with two developers and two designers. The most pressing job requirement was for a
        quote calculator, application to be built. After having discussions and meetings, I recommended using React to
        build the application, because its a very competent framework for building applications. It was also a good
        opportunity, for me to use React for some more commercial work.
      </p>

      <p>
        The quote application was going to be added to the Wordpress website, and both were going to have a material
        style design. I recommended, using a child theme for implementation and there was also a possibility of using
        the quote application as a Wordpress plugin further down the line.
      </p>
    </div>
  </div>
);

PortfolioPageBcsg.propTypes = {
  companyBG: PropTypes.string.isRequired,
};

export default PortfolioPageBcsg;
