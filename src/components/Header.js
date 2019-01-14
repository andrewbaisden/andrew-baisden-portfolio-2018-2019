import React from 'react';
import { Link } from 'react-router-dom';
import LogoBtn from '../components/LogoBtn';
import AboutBtn from '../components/AboutBtn';
import PortfolioBtn from '../components/PortfolioBtn';
import ContactBtn from '../components/ContactBtn';
import ScrollStateTop from '../components/ScrollStateTop';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.homeHover = this.homeHover.bind(this);
    this.homeDefault = this.homeDefault.bind(this);
    this.aboutHover = this.aboutHover.bind(this);
    this.aboutDefault = this.aboutDefault.bind(this);
    this.portfolioHover = this.portfolioHover.bind(this);
    this.portfolioDefault = this.portfolioDefault.bind(this);
    this.contactHover = this.contactHover.bind(this);
    this.contactDefault = this.contactDefault.bind(this);
  }
  homeHover() {
    document.getElementById('Home_SVG').style.fill = 'var(--base-colour-yellow)';
    document.getElementById('home_h1').style.color = 'var(--base-colour-yellow)';
  }
  homeDefault() {
    document.getElementById('Home_SVG').style.fill = '#ffffff';
    document.getElementById('home_h1').style.color = '#ffffff';
  }
  aboutHover() {
    document.getElementById('About_SVG').style.fill = 'var(--base-colour-yellow)';
    document.getElementById('about_h1').style.color = 'var(--base-colour-yellow)';
  }
  aboutDefault() {
    document.getElementById('About_SVG').style.fill = '#ffffff';
    document.getElementById('about_h1').style.color = '#ffffff';
  }
  portfolioHover() {
    document.getElementById('Portfolio_SVG').style.fill = 'var(--base-colour-yellow)';
    document.getElementById('portfolio_h1').style.color = 'var(--base-colour-yellow)';
  }
  portfolioDefault() {
    document.getElementById('Portfolio_SVG').style.fill = '#ffffff';
    document.getElementById('portfolio_h1').style.color = '#ffffff';
  }
  contactHover() {
    document.getElementById('Contact_SVG').style.fill = 'var(--base-colour-yellow)';
    document.getElementById('contact_h1').style.color = 'var(--base-colour-yellow)';
  }
  contactDefault() {
    document.getElementById('Contact_SVG').style.fill = '#ffffff';
    document.getElementById('contact_h1').style.color = '#ffffff';
  }
  render() {
    return (
      <div className="container-sticky-header">
        <ScrollStateTop />
        <nav className="container-header header-nav">
          <Link href="/" to="/" alt="Home Page">
            <button
              className="nav-buttons"
              onMouseOver={this.homeHover}
              onFocus={this.homeHover}
              onMouseOut={this.homeDefault}
              onBlur={this.homeHover}
              onClick={this.homeHover}
            >
              <div className="home-svg">
                <LogoBtn
                  homeAlt="Home Page"
                  aboutAlt="About Page"
                  portfolioAlt="Portfolio Page"
                  contactAlt="Contact Page"
                />
                <h1 id="home_h1">Home</h1>
              </div>
            </button>
          </Link>
          <Link href="/about" to="/about" alt="About Page">
            <button
              className="nav-buttons"
              onMouseOver={this.aboutHover}
              onFocus={this.aboutHover}
              onMouseOut={this.aboutDefault}
              onBlur={this.aboutHover}
              onClick={this.aboutHover}
            >
              <div className="about-svg">
                <AboutBtn
                  homeAlt="Home Page"
                  aboutAlt="About Page"
                  portfolioAlt="Portfolio Page"
                  contactAlt="Contact Page"
                />
                <h1 id="about_h1">About</h1>
              </div>
            </button>
          </Link>
          <Link href="/portfolio" to="/portfolio" alt="Portfolio Page">
            <button
              className="nav-buttons"
              onMouseOver={this.portfolioHover}
              onFocus={this.portfolioHover}
              onMouseOut={this.portfolioDefault}
              onBlur={this.portfolioHover}
              onClick={this.portfolioHover}
            >
              <div className="portfolio-svg">
                <PortfolioBtn
                  homeAlt="Home Page"
                  aboutAlt="About Page"
                  portfolioAlt="Portfolio Page"
                  contactAlt="Contact Page"
                />
                <h1 id="portfolio_h1">Portfolio</h1>
              </div>
            </button>
          </Link>
          <Link href="/contact" to="/contact" alt="Contact Page">
            <button
              className="nav-buttons"
              onMouseOver={this.contactHover}
              onFocus={this.contactHover}
              onMouseOut={this.contactDefault}
              onBlur={this.contactHover}
              onClick={this.contactHover}
            >
              <div className="contact-svg">
                <ContactBtn
                  homeAlt="Home Page"
                  aboutAlt="About Page"
                  portfolioAlt="Portfolio Page"
                  contactAlt="Contact Page"
                />
                <h1 id="contact_h1">Contact</h1>
              </div>
            </button>
          </Link>
        </nav>
      </div>
    );
  }
}

export default Header;
