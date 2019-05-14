import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MediaReach from '../MediaReach';

Enzyme.configure({ adapter: new Adapter() });

describe('<MediaReach />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<MediaReach />);
    expect(wrapper).toMatchSnapshot();
  });
});
