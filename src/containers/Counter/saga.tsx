import { all, put } from 'redux-saga/effects';
import * as actionType from './constants';
import { increment } from './actions';

export function* incrementAsync() {
    //yield call(delay, 1000)
    yield put({ type: actionType.INCREMENT })
}
export default function* counterSaga() {
    yield all([increment]);
}