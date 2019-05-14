import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Earlex from '../Earlex';

Enzyme.configure({ adapter: new Adapter() });

describe('<Earlex />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<Earlex />);
    expect(wrapper).toMatchSnapshot();
  });
});
