import {
    GET_LOADING, GET_USERS, GET_USER
  } from '../../redux/actions/actionTypes';
  import users from '../../redux/reducers';
  
  describe('Users Reducer', () => {
    it('should return payload when GET_USERS types performed', () => {
      const payload = {
        users: [],
      };
      const initialState = {
        users: [],
      };
      const state = users(initialState, {
        type: GET_USERS,
        payload,
      });
      expect(state).toEqual({ users: payload });
    });
    it('should return payload when GET_USERS types performed', () => {
        const payload = {
          loading: '',
        };
        const initialState = {
          loading: '',
        };
        const state = users(initialState, {
          type: GET_LOADING,
          payload,
        });
        expect(state).toEqual({ loading: payload });
      });
      it('should return payload when GET_USER types performed', () => {
        const payload = {
          user: {},
        };
        const initialState = {
          user: {},
        };
        const state = users(initialState, {
          type: GET_USER,
          payload,
        });
        expect(state).toEqual({ user: { user: {} } });
      });
  });