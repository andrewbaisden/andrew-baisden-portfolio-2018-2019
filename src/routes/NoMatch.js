import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import anime404 from '../img/anime404.gif';

const NoMatch = () => (
  <div>
    <div>
      <Helmet>
        <meta name="description" itemProp="description" content="Oh no!!! You found a broken page :(" />
        <title>404 :( - Full Stack Developer | Andrew Baisden | London</title>
        <link rel="canonical" href="https://andrewbaisden.com/404" />
      </Helmet>
    </div>
    <Header />
    <div className="no-match-404-container">
      <div className="no-match-404">
        <h1>ERROR 404: NOT FOUND</h1>
        <p>
          Uh Oh... It looks like another one of my drawings just went rogue! Why do they always have to show off their
          power! Pages go missing everytime they do this...
        </p>
        <p>
          I’m sorry there is not much I can do his power level is over 9000! You will just have to try again. Try
          clicking on the navigation buttons above.
        </p>
        <h1>And this! Is to go… Even further beyond!!!</h1>
        <img src={anime404} alt="404 Page" />
      </div>
      <Footer />
    </div>
  </div>
);

export default NoMatch;
