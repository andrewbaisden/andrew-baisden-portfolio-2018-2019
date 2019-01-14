import React from 'react';
import PropTypes from 'prop-types';
import focusDIYLogo from '../img/focusDIYLogo.png';
import SkillUsagePodFocusDIY from '../components/SkillUsagePodFocusDIY';

const PortfolioPageFocusDIY = props => (
  <div className="portfolio-company-page-container">
    <div className="portfolio-company-skills">
      <div className="portfolio-company-logo" style={{ background: `${props.companyBG}` }}>
        <img src={focusDIYLogo} alt="Focus DIY" />
      </div>
      <div className="portfolio-skill-usage">
        <SkillUsagePodFocusDIY />
      </div>
    </div>
    <div className="portfolio-company-copy">
      <p>
        Focus DIY were looking for a Front-End Developer, to join their team for a few months, just to help out with the
        main website. I was hired on a 4 month contract basis to ease the workload, that the current team was dealing
        with. The work environment was Agile Scrum and we had daily scrum meetings where we talked about what we were
        working on, and the progress report. I was part of a team of 10, including myself. It was a combination of
        designers and both Front, and Back-End Developers. They were using a custom, Back-End system which, had a small
        learning curve to it which I got to grips with in a day. I was tasked with managing and updating the content on
        the website, as well as turning PSD designs into HTML and CSS valid webpages. We used FileZilla to update the
        website using SFTP.
      </p>

      <p>
        This included landing pages, as well as a few product pages too. I used jQuery to add functionality such as
        importing sliders, and my own custom animation, and behavioural scripts to make the website more interactive.
        Every so often I had the chance to design, and develop HTML Email flyers which would be used as the newsletter.
        These would go out every time there was a new product, or announcement. I designed them in Photoshop using some
        assets that were provided, such as logos and promotional material, as well as my own creative design skills.
        Once they had been approved by the team, I hand coded them in Adobe Dreamweaver using HTML tables, and imported
        them into the email distribution system which was Campaign Monitor. I also created a few banners in Photoshop as
        well.
      </p>
    </div>
  </div>
);

PortfolioPageFocusDIY.propTypes = {
  companyBG: PropTypes.string.isRequired,
};

export default PortfolioPageFocusDIY;
