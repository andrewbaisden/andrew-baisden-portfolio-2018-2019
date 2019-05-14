import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UniversityCollegeLondon from '../UniversityCollegeLondon';

Enzyme.configure({ adapter: new Adapter() });

describe('<UniversityCollegeLondon />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<UniversityCollegeLondon />);
    expect(wrapper).toMatchSnapshot();
  });
});
