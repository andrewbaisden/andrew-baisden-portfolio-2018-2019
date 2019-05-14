import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NoMatch from '../NoMatch';

Enzyme.configure({ adapter: new Adapter() });

describe('<NoMatch />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<NoMatch />);
    expect(wrapper).toMatchSnapshot();
  });
});
