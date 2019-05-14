import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AndrewBaisden from '../AndrewBaisden';

Enzyme.configure({ adapter: new Adapter() });

describe('<AndrewBaisden />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<AndrewBaisden />);
    expect(wrapper).toMatchSnapshot();
  });
});
