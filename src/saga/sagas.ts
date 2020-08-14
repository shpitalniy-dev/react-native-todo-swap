import { all, fork } from 'redux-saga/effects';
import { toDoListWatchers } from '../components/toDoList/saga/watchers';
 
const sagas = [
    toDoListWatchers,
];

export default function* rootSaga() {
    yield all(sagas.map(fork));
}