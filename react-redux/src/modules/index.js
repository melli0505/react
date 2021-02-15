import { combineReducers } from 'redux';
import counter from './couter';
import todos from './todos';


const rootReducer = combineReducers({
    counter,
    todos,
});

export default rootReducer;