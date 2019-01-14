import React from 'react';
import { Link } from 'react-router-dom';

const ServicesBreadcrumb = () => (
  <div className="container">
    <div className="services-menu-breadcrumb">
      <ul>
        <li>
          <Link href="/about" to="/about" alt="About Me">
            About Me
          </Link>
        </li>
        <li>
          <Link href="/about/developer" to="/about/developer" alt="My Developer Services">
            My Developer Services
          </Link>
        </li>
        <li>
          <Link href="/about/designer" to="/about/designer" alt="My Designer Services">
            My Designer Services
          </Link>
        </li>
        <li>
          <Link href="/about/tools" to="/about/tools" alt="See the Tools I use">
            See the Tools I use
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default ServicesBreadcrumb;
