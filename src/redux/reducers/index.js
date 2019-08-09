import initialState from '../initialState';
import { GET_LOADING, GET_USERS, GET_USER } from '../actions/actionTypes';

const reducer = (state=initialState, action) => {
    switch(action.type){
        case GET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
            }
        case GET_USER:
                return {
                    ...state,
                    user: action.payload,
                }
        default:
            return state
    }
}

export default reducer;

