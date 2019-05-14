import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ServicesBreadcrumb from '../ServicesBreadcrumb';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <ServicesBreadcrumb />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
