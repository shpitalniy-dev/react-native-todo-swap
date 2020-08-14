import { takeEvery } from 'redux-saga/effects';
import actionTypes from '../../../constants/actionTypes';
import * as workers from './workers';

export function* toDoListWatchers() {
    yield takeEvery(actionTypes.ADD_TODOS, workers.addTodo);
    yield takeEvery(actionTypes.DELETE_TODOS, workers.deleteTodo);
    yield takeEvery(actionTypes.SET_IS_DONE, workers.setIsDone);
}