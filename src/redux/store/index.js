import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

// Redux Thunk is a middleware that letsyou call an action creator that returns a function instead of an action object

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;