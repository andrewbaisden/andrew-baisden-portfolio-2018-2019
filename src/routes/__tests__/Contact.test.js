import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Contact from '../Contact';

Enzyme.configure({ adapter: new Adapter() });

describe('<Contact />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper).toMatchSnapshot();
  });
});
