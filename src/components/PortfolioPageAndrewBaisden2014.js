import React from 'react';
import PropTypes from 'prop-types';
import ab2014Logo from '../img/ab2014Logo.png';
import SkillUsagePodAndrewBaisden2014 from '../components/SkillUsagePodAndrewBaisden2014';

const PortfolioPageAndrewBaisden2014 = props => (
  <div className="portfolio-company-page-container">
    <div className="portfolio-company-skills">
      <div className="portfolio-company-logo" style={{ background: `${props.companyBG}` }}>
        <img src={ab2014Logo} alt="Andrew Baisden" />
      </div>
      <div className="portfolio-skill-usage">
        <SkillUsagePodAndrewBaisden2014 />
      </div>
    </div>
    <div className="portfolio-company-copy">
      <p>
        My very first portfolio website was built using Adobe Flash. This was many years ago before all of those
        vulnerabilities, and problems with Flash occurred. My previous website was designed and built in 2014. Since
        then it went through numerous, upgrades and tweaks. It was originally built to be a fixed width website, which
        means that it was not at all responsive. There was no way for it to naturally scale for mobile devices, so its
        usability was not the best. I eventually made it 100% responsive, and the design evolved to a new level after
        that.
      </p>

      <p>
        I still think the design manages to hold up even by todays standards, it has always got me a lot of compliments.
        It was my own original custom design, which I created using Adobe Photoshop. I then used Yeoman, Grunt and
        Twitter Bootstrap to build it, followed by uploading it to my GitHub account. The final step was using a service
        called deploybot so that my website would automatically upload, and update on my web hosting server every single
        time I made a change, to the local version on my computer.
      </p>

      <p>
        In light of my new and improving skillset, I decided that the time was right for a complete website redesign.
        This is my latest and greatest website yet!
      </p>

      <p>You can see my previous website design below.</p>
    </div>
  </div>
);

PortfolioPageAndrewBaisden2014.propTypes = {
  companyBG: PropTypes.string,
};

PortfolioPageAndrewBaisden2014.defaultProps = {
  companyBG: '#333333',
};

export default PortfolioPageAndrewBaisden2014;
