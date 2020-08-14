import { ActionType } from './../../interfaces/interfaces';
import config from '../../config/config';
import actionTypes from '../../constants/actionTypes';

const initialState = {
    todos: config.defaultTodos,
}

export const toDoListReducer = (state: Object = initialState, action: ActionType): Object => {
    switch (action.type) {
        case actionTypes.SET_TODOS: 
            return {
                ...state,
                todos: action.payload,
            };
        default:
            return state;
    }
}