import actionTypes from '../../constants/actionTypes';

export const addTodo = (payload: any) => ({ type: actionTypes.ADD_TODOS, payload });
export const setIsDone = (payload: any) => ({ type: actionTypes.SET_IS_DONE, payload });
export const deleteTodo = (payload: any) => ({ type: actionTypes.DELETE_TODOS, payload });