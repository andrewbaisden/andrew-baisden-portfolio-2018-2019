import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Portfolio from '../Portfolio';

Enzyme.configure({ adapter: new Adapter() });

describe('<Portfolio />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<Portfolio />);
    expect(wrapper).toMatchSnapshot();
  });
});
