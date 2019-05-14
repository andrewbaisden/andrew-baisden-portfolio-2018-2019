import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Developer from '../Developer';

Enzyme.configure({ adapter: new Adapter() });

describe('<Developer />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<Developer />);
    expect(wrapper).toMatchSnapshot();
  });
});
