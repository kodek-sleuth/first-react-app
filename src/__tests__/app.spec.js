import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import App from '../App';

configure({ adapter: new Adapter() });
describe('<App />', () => {
  it('should render App component', () => {
    const component = shallow(<App />)
    expect(component).toMatchSnapshot();
  });
});