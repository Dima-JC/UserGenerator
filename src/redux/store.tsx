import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";

import rootReduser from "./rootReduser";
// import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReduser,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);
// sagaMiddleware.run(rootSaga);

export default store;