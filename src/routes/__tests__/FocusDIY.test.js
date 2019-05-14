import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FocusDIY from '../FocusDIY';

Enzyme.configure({ adapter: new Adapter() });

describe('<FocusDIY />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<FocusDIY />);
    expect(wrapper).toMatchSnapshot();
  });
});
