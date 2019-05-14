import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PortfolioCarouselDigitalView from '../PortfolioCarouselDigitalView';

Enzyme.configure({ adapter: new Adapter() });

describe('<PortfolioCarouselDigitalView />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<PortfolioCarouselDigitalView />);
    expect(wrapper).toMatchSnapshot();
  });
});
