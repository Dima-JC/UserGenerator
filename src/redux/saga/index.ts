import { put, takeLatest, call } from 'redux-saga/effects';

import { DATA_RECEIVED, FETCH_DATA, IS_LOADING } from '../types';
import { GET } from '../../requests';

export function* fetchData ({pageName}: any) {    
    try {
        const data: { data: any } = yield call(GET, pageName);
        yield put({ type: DATA_RECEIVED, data })
        yield put ({ type: IS_LOADING, payload: true })
    }
    catch (e) {
        yield console.log(e);
    }
}

export function* fetchDataWatcher() {
    yield takeLatest(FETCH_DATA, fetchData);
}
