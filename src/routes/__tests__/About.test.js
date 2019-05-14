import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import About from '../About';

Enzyme.configure({ adapter: new Adapter() });

describe('<About />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<About />);
    expect(wrapper).toMatchSnapshot();
  });
});
