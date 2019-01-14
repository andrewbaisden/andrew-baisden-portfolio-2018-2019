import React from 'react';
import PropTypes from 'prop-types';
import powWowLogo from '../img/powWowLogo.png';
import SkillUsagePodPowWow from '../components/SkillUsagePodPowWow';

const PortfolioPagePowWow = props => (
  <div className="portfolio-company-page-container">
    <div className="portfolio-company-skills">
      <div className="portfolio-company-logo" style={{ background: `${props.companyBG}` }}>
        <img src={powWowLogo} alt="PowWow" />
      </div>
      <div className="portfolio-skill-usage">
        <SkillUsagePodPowWow />
      </div>
    </div>
    <div className="portfolio-company-copy">
      <p>
        An agency approached me with a job working at PowWow, who are a multimedia creative agency. It was going to be a
        two week contract. The work which I produced was client focused, so I did not work on the main website. Most of
        the work I was tasked with doing there was design orientated, although I did have the chance to create a
        responsive landing page and write some ActionScript 3.
      </p>

      <p>
        My first job was to create a mock design for a client website based on a prototype which had been created
        earlier. I also designed posters for one of the clients as well as creating both animated GIF, and flash
        banners. Updating existing work with amendments and language flows, was also one of the tasks required of me
        while I worked there.
      </p>

      <p>
        We worked in a macOS environment, and I was part of a small team of other people which was a combination of both
        designers, developers and accounting as well as the manager. When i worked on the landing page, I created the
        design myself, while also using the design assets which were required for the branding. Photoshop was the main
        tool I used for creating the new landing page design, and I used Twitter Bootstrap to make it a responsive
        website. I collaborated with the other team members to get the work done in a productive time scale.
      </p>
    </div>
  </div>
);

PortfolioPagePowWow.propTypes = {
  companyBG: PropTypes.string.isRequired,
};

export default PortfolioPagePowWow;
