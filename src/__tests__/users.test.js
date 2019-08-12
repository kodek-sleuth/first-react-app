import React from 'react';
import { create } from 'react-test-renderer';
import store from  '../redux/store';
import { Provider } from 'react-redux';
import Users from '../components/Users/Users';
import UserItem from '../components/Users/UserItem';

describe('<Users />', () => {
    it('should return all users on the page', () => {
        const component = create(
        <Provider store={store}>
            <Users />
        </Provider>
        );
        const instance = component.getInstance();
        const testInstance = component.root
        expect(testInstance.findByType(<UserItem />).props.user).toBe('user')
    });
});
