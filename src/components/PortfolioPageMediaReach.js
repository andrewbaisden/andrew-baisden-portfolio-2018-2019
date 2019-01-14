import React from 'react';
import PropTypes from 'prop-types';
import mediaReachLogo from '../img/mediaReachLogo.png';
import SkillUsagePodMediaReach from '../components/SkillUsagePodMediaReach';

const PortfolioPageMediaReach = props => (
  <div className="portfolio-company-page-container">
    <div className="portfolio-company-skills">
      <div className="portfolio-company-logo" style={{ background: `${props.companyBG}` }}>
        <img src={mediaReachLogo} alt="Mediareach Advertising" />
      </div>
      <div className="portfolio-skill-usage">
        <SkillUsagePodMediaReach />
      </div>
    </div>
    <div className="portfolio-company-copy">
      <p>
        Mediareach Advertising is a digital agency, which deals with both advertising and marketing. They cater to all
        types of people and businesses, and offer a blend of exceptional talent with clear-headed business tactics. I
        was hired as a Junior Web Developer, and during my time there I worked on various projects. I collaborated with
        the Creative, PR and Accounting departments to get work done. We worked in a macOS environment, and my first job
        was to work on the previous old website, which has since been redesigned. It was built using WordPress, where I
        managed all of the content. I kept the website up to date with new content, and improved it by adding new
        functionality using HTML5, and CSS3. I also used custom jQuery scripts, and WordPress plugins when required.
        Adobe Dreamweaver was my main code editor, and I used FileZilla to update all of the websites using FTP. It was
        a small company, but with a big heart as the environment was full of energy. There was lots of drama, and on
        occasion special events as clients came into the office. The whole atmosphere was very bubbly, there was always
        something fun to talk about.
      </p>

      <p>
        I also used google analytics and SEO techniques which improved the page ranking, and decreased the loading
        times. When I was used to the system, I started to work on all of the blogs which we had, that were also built
        using Wordpress. They were very outdated design wise so, I was tasked with completely re-designing, and
        re-developing them. It was decided that WordPress themes would be used for the new blogs, because of the quick
        implementation and ease of use. I set up the new websites and added my own customisations to enhance the theme
        beyond its default stock design. I set up the new hosting and domain names then, transferred all of the existing
        content over to them from the old websites.
      </p>

      <p>
        They also had a monthly email newsletter, which was sent out to their clients. The creative department made the
        designs in Photoshop, and Illustrator which I then built from scratch using HTML and CSS. I then uploaded them
        to our email marketing tool Sentori, where I tested them in multiple email applications to make sure that they
        worked properly. Every so often I had a chance to design the email newsletter. I even created a few cool
        animated ones, using Photoshop by turning static images into GIF’s which was a first for us. Campaign Monitor
        was also used a few times, to send out emails to clients. On occasion I had the opportunity to create both
        static, and animated banners. I used Photoshop and Flash to get the job done.
      </p>

      <p>
        For one of my client projects I was given a brief for Latymer Court, which is one of London’s largest estates. I
        used another custom WordPress theme, with my own customisations to make it unique. I then created the brand new
        website. We had another client called Supermalt, which we were doing a big marketing campaign for. Their website
        was built using Joomla, and was in need of a complete update. So I was tasked with developing it. While the
        design was being made by the creative department, I kept the existing Supermalt website updated with new
        content. The creative team worked on the new design, and I developed it. I also had a lot of opportunities to do
        video editing, as well as using Final Cut Pro, iMovie and Adobe Premier. There was a lot of video content which
        needed to be converted and compressed for the websites, as well as our Youtube channel.
      </p>
    </div>
  </div>
);

PortfolioPageMediaReach.propTypes = {
  companyBG: PropTypes.string.isRequired,
};

export default PortfolioPageMediaReach;
