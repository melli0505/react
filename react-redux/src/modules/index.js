import { combineReducer } from 'redux';
import counter from './couter';
import todos from './todos';


const rootReducer = combineReducer({
    counter,
    todos,
});

export default rootReducer