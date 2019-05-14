import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DigitalView from '../DigitalView';

Enzyme.configure({ adapter: new Adapter() });

describe('<DigitalView />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<DigitalView />);
    expect(wrapper).toMatchSnapshot();
  });
});
