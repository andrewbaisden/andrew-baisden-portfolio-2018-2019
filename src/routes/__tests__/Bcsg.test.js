import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Bcsg from '../Bcsg';

Enzyme.configure({ adapter: new Adapter() });

describe('<Bcsg />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<Bcsg />);
    expect(wrapper).toMatchSnapshot();
  });
});
