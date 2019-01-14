import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Flickity from 'react-flickity-component/src/index';
import logoFlat from '../img/logoFlat.svg';
import logoWhite from '../img/logoWhite.svg';

const flickityOptions = {
  initialIndex: 2,
  pageDots: false,
  wrapAround: true,
  autoPlay: 5000,
  draggable: false,
  prevNextButtons: false,
  pauseAutoPlayOnHover: false,
};

const PortfolioCarouselHome = props => (
  <div className="carousel-page-container">
    <div className="carousel-container">
      <Flickity
        className="carousel" // default ''
        elementType="div" // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
      >
        <div className="carousel-cell">
          <div className="carousel-slide" style={{ background: `${props.slide1BG}` }}>
            <div className="carousel-slide-image">
              <img src={logoFlat} alt="Andrew Baisden" />
            </div>
            <div className="carousel-slide-copy">
              <h1>#Lifeatsky</h1>
              <p>Every day was full of surprises. From flying drones to special events. Even White Walkers Invaded!</p>
              <Link href="/porfolio/schawk" to="/portfolio/schawk" alt="Schawk">
                See the story
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-cell">
          <div className="carousel-slide" style={{ background: `${props.slide2BG}` }}>
            <div className="carousel-slide-image">
              <img src={logoFlat} alt="Andrew Baisden" />
            </div>
            <div className="carousel-slide-copy">
              <h1>PowWow, not a bridge too far</h1>
              <p>
                Located in the London Bridge area, the work was both enjoyable and rewarding thanks to the stores and
                Borough Market close by.
              </p>
              <Link href="/porfolio/powwow" to="/portfolio/powwow" alt="PowWow">
                See the story
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-cell">
          <div className="carousel-slide" style={{ background: `${props.slide3BG}` }}>
            <div className="carousel-slide-image">
              <img src={logoFlat} alt="Andrew Baisden" />
            </div>
            <div className="carousel-slide-copy">
              <h1>April Six banter</h1>
              <p>The playful atmosphere made it enjoyable. There was plenty of work to go around which kept me busy.</p>
              <Link href="/porfolio/april-six" to="/portfolio/april-six" alt="April Six">
                See the story
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-cell">
          <div className="carousel-slide" style={{ background: `${props.slide4BG}` }}>
            <div className="carousel-slide-image">
              <img src={logoFlat} alt="Andrew Baisden" />
            </div>
            <div className="carousel-slide-copy">
              <h1>UCL at the heart of London</h1>
              <p>
                This has got to be one of my most enjoyable commutes. Working in the middle of a major shopping district
                never gets old :)
              </p>
              <Link
                href="/porfolio/university-college-london"
                to="/portfolio/university-college-london"
                alt="University College London"
              >
                See the story
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-cell">
          <div className="carousel-slide" style={{ background: `${props.slide5BG}` }}>
            <div className="carousel-slide-image">
              <img src={logoWhite} alt="Andrew Baisden" />
            </div>
            <div className="carousel-slide-copy">
              <h1>Fun, games and drama at Mediareach</h1>
              <p>
                A job full of unexpected drama, enough to keep you entertained. I will never forget the weekly ’It’s
                Friday!” call out from my colleague.
              </p>
              <Link
                href="/porfolio/mediareach-advertising"
                to="/portfolio/mediareach-advertising"
                alt="Mediareach Advertising"
              >
                See the story
              </Link>
            </div>
          </div>
        </div>
      </Flickity>
    </div>
    <div className="carousel-arrow" />
  </div>
);

PortfolioCarouselHome.propTypes = {
  slide1BG: PropTypes.string.isRequired,
  slide2BG: PropTypes.string.isRequired,
  slide3BG: PropTypes.string.isRequired,
  slide4BG: PropTypes.string.isRequired,
  slide5BG: PropTypes.string.isRequired,
};

export default PortfolioCarouselHome;
