import '@babel/polyfill';
import axios from 'axios';
import { GET_LOADING, GET_USERS, GET_USER } from '../actionTypes';

const setLoading = (data) => dispatch => {
  dispatch({
    type: GET_LOADING,
    payload: data
  })
}

export const getUsers = () => async(dispatch) => {
    dispatch(setLoading(true))
    const people = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    dispatch({
        type: GET_USERS,
        payload: people.data
    })
    dispatch(setLoading(false))
};

export const searchUsers = (text) => async(dispatch) => {
    dispatch(setLoading(true))
    const people = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    dispatch({
        type: GET_USERS,
        payload: people.data.items
    })
    dispatch(setLoading(false))
};

export const getSingleUser = (username) => async(dispatch) => {
    dispatch(setLoading(true))
    const people = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    dispatch({
        type: GET_USER,
        payload: people.data
    })
    dispatch(setLoading(false))
};


