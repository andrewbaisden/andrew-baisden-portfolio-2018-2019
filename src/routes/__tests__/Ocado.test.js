import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Ocado from '../Ocado';

Enzyme.configure({ adapter: new Adapter() });

describe('<Ocado />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<Ocado />);
    expect(wrapper).toMatchSnapshot();
  });
});
