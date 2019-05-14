import React from 'react';
import PropTypes from 'prop-types';
import earlexLogo from '../img/earlexLogo.png';
import SkillUsagePodEarlex from '../components/SkillUsagePodEarlex';

const PortfolioPageEarlex = props => (
  <div className="portfolio-company-page-container">
    <div className="portfolio-company-skills">
      <div className="portfolio-company-logo" style={{ background: `${props.companyBG}` }}>
        <img src={earlexLogo} alt="Earlex" />
      </div>
      <div className="portfolio-skill-usage">
        <SkillUsagePodEarlex />
      </div>
    </div>
    <div className="portfolio-company-copy">
      <p>
        Earlex export a wide range of power decorating tools and, power cleaning products across the globe and, sold
        within major retail chains. They needed someone to come in and help them catch up with work, due to the
        increased workload they were under. I was hired as a Graphic Designer, in a temporary position. I was working
        with two other Graphic Designers, as well as a few other departments. We needed to collaborate to get the work
        done for the flyers and the websites. The most urgent requirement, was for new flyers to be created because,
        they had an exhibition coming up and the current flyers were out of date, information wise and lacked a creative
        design.
      </p>

      <p>
        I was given the responsibility of creating flyers, that were based on the new brochures they had. The aim was
        for them to have the same look and feel as the brochure, but designed as hand outs for each individual product.
        I used Photoshop and Illustrator to design the flyers, and converted them using Adobe Acrobat, so that they
        could be printed and assessed. I successfully created the new flyers, which were 18 in total and they were
        pleased with the results because, the difference between the new and old flyers was very clear they were worlds
        apart.
      </p>

      <p>
        Another task that I was given was to use Adobe InDesign, to translate two unique brochures into different
        languages, as well as updating and amending content in various files. Even though I was hired as a Graphic
        Designer, they did have some Web Design and Development tasks that needed doing also. They had some work that
        needed to be done on their French, and US websites. For the French website, I created a new support area for
        their paint guns as discussed which was designed in line with their website. I used Adobe Dreamweaver, and coded
        the page in HTML and CSS. FileZilla was the FTP client used to update the website.
      </p>

      <p>
        I was also given a document with problems they had on the website, which needed debugging and fixing. I realised
        that the website had a lot more errors, and even a broken structure, that was not even documented. Apparently
        another Web Designer, had been hired to do some stuff, and had inadvertently caused some problems. I fixed all
        the problems, and brought it back into a good working order. They also had a product web store, which was built
        using Drupal. I updated and added new content as specified.
      </p>

      <p>
        For the most part the US website was pretty straight forward. I just needed to do a few content changes, and
        updates however, they did want some image gallery carousels created, for a few products based on the existing
        one that they had in place for a few products. The one they had in place was created in Adobe Flash, but they
        did not have the original file used to make it. I ended up creating one from scratch in Adobe Flash, and coded
        using Actionscript 3, which was close to identical to the one they already had in place.
      </p>
    </div>
  </div>
);

PortfolioPageEarlex.propTypes = {
  companyBG: PropTypes.string,
};

PortfolioPageEarlex.defaultProps = {
  companyBG: '#F4F4F4',
};

export default PortfolioPageEarlex;
