import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PowWow from '../PowWow';

Enzyme.configure({ adapter: new Adapter() });

describe('<PowWow />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<PowWow />);
    expect(wrapper).toMatchSnapshot();
  });
});
