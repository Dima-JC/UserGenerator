import { put, takeLatest, call } from 'redux-saga/effects';

import {
    SET_DATA_RECEIVED,
    FETCH_DATA,
    DID_FETCHING_FAIL,
    IS_LOADING
} from '../types';

import { GET_DATE_UNITS } from '../../helpers';
import { Data } from '../../interfaces';

interface Props {
    type: typeof FETCH_DATA;
    pageName: number
}

export function* fetchData({ pageName }: Props) {
    try {
        yield put({ type: IS_LOADING, payload: true })
        const data: { data: Data } = yield call(GET_DATE_UNITS, pageName);
        yield put({ type: SET_DATA_RECEIVED, data })
    }
    catch (e) {
        yield put({ type: DID_FETCHING_FAIL });
    }
    finally {
        yield put({ type: IS_LOADING, payload: false })
    }
}

export function* fetchDataWatcher() {
    yield takeLatest(FETCH_DATA, fetchData);
}
