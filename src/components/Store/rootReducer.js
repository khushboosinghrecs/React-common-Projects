// redux/rootReducer.js
import { combineReducers } from 'redux';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  user: userReducer,
  // Add other slices as needed
});

export default rootReducer;
