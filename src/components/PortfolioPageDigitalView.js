import React from 'react';
import PropTypes from 'prop-types';
import digitalViewLogo from '../img/digitalViewLogo.png';
import SkillUsagePodDigitalView from '../components/SkillUsagePodDigitalView';

const PortfolioPageDigitalView = props => (
  <div className="portfolio-company-page-container">
    <div className="portfolio-company-skills">
      <div className="portfolio-company-logo" style={{ background: `${props.companyBG}` }}>
        <img src={digitalViewLogo} alt="Digital View" />
      </div>
      <div className="portfolio-skill-usage">
        <SkillUsagePodDigitalView />
      </div>
    </div>
    <div className="portfolio-company-copy">
      <p>
        Digital View develops interface technology, for the LCD digital display market. I joined Digital View as Junior
        Web Developer, through an Internship work programme at The University of West London. I was part of a team of 4,
        including myself. There was a Graphic Designer, a Web Designer and a Senior Web Developer who I was working
        with. During my time at Digital View, I was tasked with building various webpages for the main website, such as
        product pages from an existing design, created by the Graphic Designer. As well as doing some quality assurance
        throughout their main website, and a few other sites that they owned. As a group we kept the website up to date,
        and running efficiently.
      </p>

      <p>
        The main website had a custom, Back-End system, which was created by the Senior Developer working there. It had
        a significant learning curve, but it did not take me long for me to master it. Most of my time was spent keeping
        the website up to date, as well as developing product pages in Adobe Dreamweaver, using HTML and CSS and
        checking the whole website for bugs and errors, which were to be logged for later fixing. I also did a lot of
        image optimisations using Photoshop, so basically compressing the images before they were uploaded, to decrease
        page loading times.
      </p>

      <p>
        Another task that I was given was to convert and optimise some promotional videos which I did but, there was
        also a timescale involved and at the time there were problems with the internet. I took the initiative and told
        them that my University had fast internet, and that I could upload them quickly later, which I did. By far my
        biggest achievement while working there, came when I developed the whole Digital View support pages well ahead
        of schedule.
      </p>
    </div>
  </div>
);

PortfolioPageDigitalView.propTypes = {
  companyBG: PropTypes.string,
};

PortfolioPageDigitalView.defaultProps = {
  companyBG: '#ffffff',
};

export default PortfolioPageDigitalView;
