import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Routes from '../components/Routes';

configure({ adapter: new Adapter() });
describe('<Routes />', () => {
  it('should render App component', () => {
    const component = shallow(<Routes />)
    expect(component).toMatchSnapshot();
  });
});