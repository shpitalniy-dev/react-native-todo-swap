import { createSelector } from 'reselect';

export const getToDoList = state => state.toDoList;

export const getTodos = createSelector(
    getToDoList,
    toDoList => toDoList.todos,
);