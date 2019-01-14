import React from 'react';
import PropTypes from 'prop-types';
import aprilSixLogo from '../img/aprilSixLogo.png';
import SkillUsagePodAprilSix from '../components/SkillUsagePodAprilSix';

const PortfolioPageAprilSix = props => (
  <div className="portfolio-company-page-container">
    <div className="portfolio-company-skills">
      <div className="portfolio-company-logo" style={{ background: `${props.companyBG}` }}>
        <img src={aprilSixLogo} alt="April Six" />
      </div>
      <div className="portfolio-skill-usage">
        <SkillUsagePodAprilSix />
      </div>
    </div>
    <div className="portfolio-company-copy">
      <p>
        An urgent job opening became available at April Six, as a few people were going on holiday, and there was going
        to be a backlog of work. I was offered a contract and hired as an HTML Developer. During my time there I created
        HTML Emails, both static and flash banners as well as some responsive landing pages.
      </p>

      <p>
        I was also given the task of doing a lot of language flows, so basically adding in translations to different
        images, which were going to be used for different language versions of the same webpages. All of these jobs were
        client related, I did not work on the main website. Everything was managed through work orders and I managed my
        time adequately, to get as much work done in the time that I had available.
      </p>

      <p>
        There was a team of other developers there which I worked with, and between all of us we collaborated on the
        projects, to get the work done as best we could. I even had the opportunity to create a landing page for some
        client work, which I did so using Twitter Bootstrap, to make it responsive. The design and assets where already
        provided before hand, by one of the designers. I was the one tasked with developing the webpage, and testing it
        in various browsers.
      </p>

      <p>The work environment while not Agile Scrum, although it did follow some of its methodologies.</p>
    </div>
  </div>
);

PortfolioPageAprilSix.propTypes = {
  companyBG: PropTypes.string.isRequired,
};

export default PortfolioPageAprilSix;
