import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Developer from './Developer';
import Designer from './Designer';
import Tools from './Tools';
import Portfolio from './Portfolio';
import Ocado from './Ocado';
import Bcsg from './Bcsg';
import Sky from './Sky';
import PowWow from './PowWow';
import AndrewBaisden from './AndrewBaisden';
import AprilSix from './AprilSix';
import UniversityCollegeLondon from './UniversityCollegeLondon';
import MediaReach from './MediaReach';
import Earlex from './Earlex';
import DigitalView from './DigitalView';
import FocusDIY from './FocusDIY';
import Contact from './Contact';
import NoMatch from './NoMatch';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/about/developer" exact component={Developer} />
      <Route path="/about/designer" exact component={Designer} />
      <Route path="/about/tools" exact component={Tools} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route path="/portfolio/ocado" exact component={Ocado} />
      <Route path="/portfolio/bcsg" exact component={Bcsg} />
      <Route path="/portfolio/schawk" exact component={Sky} />
      <Route path="/portfolio/powwow" exact component={PowWow} />
      <Route path="/portfolio/andrew-baisden-portfolio-2014" exact component={AndrewBaisden} />
      <Route path="/portfolio/april-six" exact component={AprilSix} />
      <Route path="/portfolio/university-college-london" exact component={UniversityCollegeLondon} />
      <Route path="/portfolio/mediareach-advertising" exact component={MediaReach} />
      <Route path="/portfolio/earlex" exact component={Earlex} />
      <Route path="/portfolio/digital-view" exact component={DigitalView} />
      <Route path="/portfolio/focus-diy" exact component={FocusDIY} />
      <Route path="/contact" exact component={Contact} />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
);
