import { put, takeLatest, call } from 'redux-saga/effects';

import {
    DATA_RECEIVED,
    FETCH_DATA,
    IS_DATA_FETCH_ERROR,
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
        const data: { data: Data } = yield call(GET_DATE_UNITS, pageName);
        yield put({ type: DATA_RECEIVED, data })
        yield put({ type: IS_LOADING, payload: true })
    }
    catch (e) {
        yield put({ type: IS_DATA_FETCH_ERROR });
    }
}

export function* fetchDataWatcher() {
    yield takeLatest(FETCH_DATA, fetchData);
}
