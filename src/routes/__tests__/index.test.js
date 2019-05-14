import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import index from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('<index />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<index />);
    expect(wrapper).toMatchSnapshot();
  });
});
