import React from 'react';
import reactLogoTransparent from '../img/reactLogoTransparent.png';
import vueLogoTransparent from '../img/vueLogoTransparent.png';

const AboutTechStack = () => (
  <div className="developer-pod-container">
    <div className="techstack-copy">
      <p>
        I’m a Full Stack Developer, which basically means that I can work on both the front, and back end when it comes
        to developing applications. This involves connecting to different API’s, using a technology called REST, or
        GraphQL. They are basically data query programming languages which enable you to get data from online servers,
        using whats known as HTTP requests. This is how you get information. For example you can get data for a weather,
        transport or social media application.
      </p>
      <p>
        A Tech stack is the combination of programming languages, tools and frameworks that us developers use to create
        web and mobile applications. There are two main components to any application, known as client side and server
        side, also popular as front end and back end. My preference is using MongoDB or Firebase, for handling data
        stored in a database.
      </p>
      <p>
        I would use the MERN stack if i wanted to create an application using React. And I would use the MEVN stack, if
        i wanted to create an application using Vue.
      </p>
    </div>
    <div className="techstack">
      <div className="techstack-react">
        <img src={reactLogoTransparent} alt="React Logo" />
        <h1>MERN Stack</h1>
        <ul>
          <li>MongoDB - Database Application</li>
          <li>Express - Node.js web application framework, server</li>
          <li>React - Front-End Javascript framework for building User Interfaces</li>
          <li>Node - Open-source, cross-platform, JavaScript run-time environment </li>
        </ul>
      </div>
      <div className="techstack-vue">
        <img src={vueLogoTransparent} alt="Vue Logo" />
        <h1>MEVN Stack</h1>
        <ul>
          <li>MongoDB - Database Application</li>
          <li>Express - Node.js web application framework, server</li>
          <li>Vue - Front-End Javascript framework for building User Interfaces</li>
          <li>Node - Open-source, cross-platform, JavaScript run-time environment </li>
        </ul>
      </div>
    </div>
  </div>
);

export default AboutTechStack;
