import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AprilSix from '../AprilSix';

Enzyme.configure({ adapter: new Adapter() });

describe('<AprilSix />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<AprilSix />);
    expect(wrapper).toMatchSnapshot();
  });
});
