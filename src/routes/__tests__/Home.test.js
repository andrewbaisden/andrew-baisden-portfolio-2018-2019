import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../Home';

Enzyme.configure({ adapter: new Adapter() });

describe('<Home />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
