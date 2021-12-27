import { Data, InitialState } from "../interfaces";
import { LOCALES } from "../intl/locales";
import {
    COUNT_USERS_DATA,
    SET_DATA_RECEIVED,
    IS_ACTIVE_BUTTON,
    DID_FETCHING_FAIL,
    IS_LANGUAGE,
    IS_LOADING,
    SET_PRIVATE_ROUTE,
    SET_USER_INFO
} from "./types";

interface Action {
    payload: boolean;
    data: Data;
    type: string;
    pageName: number;
    isActive: string
}

const initialState: InitialState = {
    receivedData: [],
    userInfo: [],
    privateRoute: JSON.parse(localStorage.getItem('privateRoute')!),
    isLoading: false,
    isDataFetchError: false,
    pageNumber: 1,
    isActiveButton: window.location.pathname,
    localLanguage: LOCALES.ENGLISH,
    isUsers: false
}

export default function RootReducer(state = initialState, { type, payload, data, pageName, isActive }: Action) {
    switch (type) {
        case SET_DATA_RECEIVED:
            return { ...state, receivedData: (state.receivedData as Data[]).concat(data), isUsers: true }

        case SET_USER_INFO:
            return { ...state, userInfo: data! }

        case SET_PRIVATE_ROUTE:
            return { ...state, privateRoute: (payload as boolean) }

        case IS_LOADING:
            return { ...state, isLoading: (payload as boolean) }

        case DID_FETCHING_FAIL:
            return { ...state, isDataFetchError: true }

        case COUNT_USERS_DATA:
            return { ...state, pageNumber: pageName }

        case IS_ACTIVE_BUTTON:
            return { ...state, isActiveButton: isActive }

        case IS_LANGUAGE:
            return { ...state, localLanguage: isActive }

        default:
            return state
    }
}

export type RootState = ReturnType<typeof RootReducer>;
