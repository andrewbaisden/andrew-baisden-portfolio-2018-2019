import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Designer from '../Designer';

Enzyme.configure({ adapter: new Adapter() });

describe('<Designer />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<Designer />);
    expect(wrapper).toMatchSnapshot();
  });
});
