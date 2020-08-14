import { combineReducers } from 'redux';
import { toDoListReducer } from '../components/toDoList/reducer';

const rootReducer = combineReducers({
    toDoList: toDoListReducer,
});

export default rootReducer;