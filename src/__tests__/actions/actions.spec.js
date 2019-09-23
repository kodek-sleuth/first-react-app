import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import dotenv from 'dotenv';

import {
    GET_LOADING, GET_USERS, GET_USER
  } from '../../redux/actions/actionTypes';
import { getUsers, getSingleUser, searchUsers } from '../../redux/actions/actionCreators';

dotenv.config();

// The mockStore is for testing redux async creators. It will create an array of dispatched actions which serve as an action log
const mockStore = configureMockStore([thunk]);
const store  =  mockStore({});

describe('Testing user Actions', () => {
    beforeEach(() => {
        moxios.install();
        store.clearActions();
    });

    afterEach(() => {
        moxios.uninstall()
    });

    it('should dispatch GET_user incase of success', () => {
        moxios.wait(() => {
            let request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: {
                    user: {
                        message: 'successfully fetched user'
                    }
                }
            });
        });
        let expectedActions = [
            GET_LOADING,
            GET_USERS,
            GET_LOADING
        ];
    
        return store.dispatch(getUsers()).then(() => {
            let dispatchedActions = store.getActions();
            let dispatchedTypes = dispatchedActions.map(action => action.type);
            expect(dispatchedTypes).toEqual(expectedActions);
        })
    });
    it('should dispatch GET_USER incase of success', () => {
        moxios.wait(() => {
            let request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: {
                    user: {
                        message: 'successfully fetched user'
                    }
                }
            });
        });
        let expectedActions = [
            GET_LOADING,
            GET_USER,
            GET_LOADING
        ];
    
        return store.dispatch(getSingleUser('henry')).then(() => {
            let dispatchedActions = store.getActions();
            let dispatchedTypes = dispatchedActions.map(action => action.type);
            expect(dispatchedTypes).toEqual(expectedActions);
        })
    });
    it('should dispatch searchUsers incase of success', () => {
        moxios.wait(() => {
            let request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: {
                    user: {
                        message: 'successfully fetched user'
                    }
                }
            });
        });
        let expectedActions = [
            GET_LOADING,
            GET_USERS,
            GET_LOADING
        ];
    
        return store.dispatch(searchUsers('henry')).then(() => {
            let dispatchedActions = store.getActions();
            let dispatchedTypes = dispatchedActions.map(action => action.type);
            expect(dispatchedTypes).toEqual(expectedActions);
        })
    });
});