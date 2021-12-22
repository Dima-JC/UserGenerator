import { all } from 'redux-saga/effects';

import { fetchDataWatcher } from './saga';

export default function* rootSaga() {
    yield all([
        fetchDataWatcher(),
    ]);
}
