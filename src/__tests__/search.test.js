import React from 'react';
import moxios from 'moxios';
import axios from 'axios';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import { configure, shallow, mount } from 'enzyme';
import reducer from '../redux/reducers';
import { MemoryRouter } from 'react-dom';
import { Search } from '../components/Users/Search';
import { searchUsers } from '../redux/actions/actionCreators'

configure({ adapter: new Adapter() });

// Things to test in actions
// Mock request response

// We mock the store to save all dispatched actions on the store Instance
const createStore = configureMockStore([thunk]);
const store = createStore(reducer.initialState);

const searchProps = {
    searchUsers: jest.fn(),
    text: 'mojombo',
    loading: false,
    users: [{
        id: 1,
        login: 'mojombo',
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        blog: "https://avatars0.githubusercontent.com/u/1?v=4"
    }]
}

describe('<Search />', () => {
    beforeEach(() => {
            // moxios intercepts axios calls made to our api
            moxios.install(axios);
            moxios.stubRequest(`https://api.github.com/search/users?q=mojombo}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`, {
            users: [{
                id: 1,
                login: 'mojombo',
                avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
                blog: "https://avatars0.githubusercontent.com/u/1?v=4" 
            }]
        });
        store.clearActions();
      });
      
      afterEach(() => {
        moxios.uninstall(axios);
      });
    
    it('should render a search component', () => {
        const component = shallow(<Search {...searchProps} />);
        expect(component).toMatchSnapshot();
    });

    it('should show a form', () => {
        const component = shallow(<Search {...searchProps} />);
        expect(component.find('form')).toHaveLength(1)
    });

    it('should dispatch an action to searchUsers', () => {
        store.dispatch(searchUsers());
        expect(store.getActions()).toEqual([{ type: 'GET_LOADING', payload: true }]);
    });
})