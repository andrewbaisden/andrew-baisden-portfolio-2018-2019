import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sky from '../Sky';

Enzyme.configure({ adapter: new Adapter() });

describe('<Sky />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<Sky />);
    expect(wrapper).toMatchSnapshot();
  });
});
