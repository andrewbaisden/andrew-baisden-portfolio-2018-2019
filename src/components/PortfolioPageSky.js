import React from 'react';
import PropTypes from 'prop-types';
import schawkLogo from '../img/schawkLogo.png';
import SkillUsagePodSky from '../components/SkillUsagePodSky';

const PortfolioPageSky = props => (
  <div className="portfolio-company-page-container">
    <div className="portfolio-company-skills">
      <div className="portfolio-company-logo" style={{ background: `${props.companyBG}` }}>
        <img src={schawkLogo} alt="Schawk" />
      </div>
      <div className="portfolio-skill-usage">
        <SkillUsagePodSky />
      </div>
    </div>
    <div className="portfolio-company-copy">
      <p>
        I was contacted by an Agency, regarding a role working for SKY. Schawk, was the company that I was going to be
        working for, and we would be contracting for the client, and working on site at Sky Central. The name of the
        department that Schawk worked under, was called “Sky Works”.
      </p>

      <p>
        I was hired to come on board as a Digital Developer. During my time there I started off creating static and
        animated banners using Photoshop, as well as dynamic banners which were built in flash. We then switched to
        JavaScript, because Google stopped using flash on their DoubleClick platform, instead opting for HTML5 banners
        with JavaScript. I have also been creating lots of Responsive emails, which we tested using the Litmus Platform
        and on various native mobile devices.
      </p>

      <p>
        The work environment was open plan, which made it very social. The fact that it was a broadcasting media
        company, meant that every day was full of surprises. There were live interviews, guest appearances, celebrities
        and very cool themed booths which they created whenever there was a new launch. Like a product or TV show.
      </p>

      <p>
        I worked in a team with other developers like myself. We were split between email development, and banner
        development. The other departments included design, accounting and Quality Control (QC), in addition to the
        individual team leads. The work environment was macOS and as developers, we were given freedom on a few of the
        tools we used, most notably the code editors. I have alternated between Visual Studio Code, and Atom as my code
        editor of choice. I also hand coding the responsive emails, which have been designed by the design team.{' '}
      </p>

      <p>
        We also created our own custom snippets, which we used with the HTML emails that we built, and tested using
        Litmus and Campaign Monitor. For email deployment and test emails, we used Adobe Campaign Manager.
      </p>
    </div>
  </div>
);

PortfolioPageSky.propTypes = {
  companyBG: PropTypes.string.isRequired,
};

export default PortfolioPageSky;
