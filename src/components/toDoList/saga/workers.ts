import { takeEvery, select, put } from 'redux-saga/effects';
import actionTypes from '../../../constants/actionTypes';
import { ActionType, ITodo } from './../../../interfaces/interfaces';
import * as selectors from '../selectors';

export function* addTodo(action: ActionType) {
    if (!action.payload) {
        return;
    }

    const { newTodo } = action.payload;
    const todos = yield select(selectors.getTodos);

    yield put({ type: actionTypes.SET_TODOS, payload: [newTodo, ...todos]})
}

export function* deleteTodo(action: ActionType) {
    if (!action.payload) {
        return;
    }

    const { id } = action.payload;
    const todos = yield select(selectors.getTodos);

    const newTodos = todos.filter((item: ITodo) => item.id !== id);

    yield put({ type: actionTypes.SET_TODOS, payload: newTodos });
}


export function* setIsDone(action: ActionType) {
    if (!action.payload) {
        return;
    }

    const { id, isDone } = action.payload;
    const todos = yield select(selectors.getTodos);

    const newTodos = todos.map((item: ITodo) => {
        if (item.id === id) {
            return {
                ...item,
                isDone,
            }
        }

        return item;
    });

    yield put({ type: actionTypes.SET_TODOS, payload: newTodos });
}