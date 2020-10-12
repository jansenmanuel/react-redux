// Root Reducer
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import loginReducer from './loginReducer';

const rootReducers = combineReducers({
    counter: counterReducer,
    login: loginReducer
})

export default rootReducers;