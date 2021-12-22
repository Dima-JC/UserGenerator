import { put, takeLatest, call } from 'redux-saga/effects';

import { GET } from '../../requests';

import { DATA_RECEIVED, FETCH_DATA, IS_LOADING } from '../types';

export function* fetchData() {    
    try {
        const data: { data: any } = yield call(GET);
        yield put({ type: DATA_RECEIVED, data})
        yield put ({ type: IS_LOADING, payload: false })
    }
    catch (e) {
        yield console.log(e);
    }
    finally {
        yield put ({ type: IS_LOADING, payload: true })
    }
}

export function* fetchDataWatcher() {
    yield takeLatest(FETCH_DATA, fetchData);
}
