import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Tools from '../Tools';

Enzyme.configure({ adapter: new Adapter() });

describe('<Tools />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<Tools />);
    expect(wrapper).toMatchSnapshot();
  });
});
