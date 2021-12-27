import { useLocation } from "react-router-dom";
import { Data, InitialState } from "../interfaces";
import { LOCALES } from "../intl/locales";
import {
    COUNT_USERS_DATA,
    DATA_RECEIVED,
    IS_ACTIVE_BUTTON,
    IS_DATA_FETCH_ERROR,
    IS_LANGUAGE,
    IS_LOADING,
    PRIVATE_ROUTE,
    USER_INFO
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
    privateRout: JSON.parse(localStorage.getItem('privateRoute')!),
    isLoading: false,
    isDataFetchError: false,
    numberUsers: 1,
    isActiveButton: window.location.pathname,
    isLanguage: LOCALES.ENGLISH
}

export default function RootReducer(state = initialState, { type, payload, data, pageName, isActive }: Action) {
    switch (type) {
        case DATA_RECEIVED:
            return { ...state, receivedData: (state.receivedData as Data[]).concat(data) }

        case USER_INFO:
            return { ...state, userInfo: data! }

        case PRIVATE_ROUTE:
            return { ...state, privateRout: (payload as boolean) }

        case IS_LOADING:
            return { ...state, isLoading: (payload as boolean) }

        case IS_DATA_FETCH_ERROR:
            return { ...state, isDataFetchError: true }

        case COUNT_USERS_DATA:
            return { ...state, numberUsers: pageName }

        case IS_ACTIVE_BUTTON:
            return { ...state, isActiveButton: isActive }

        case IS_LANGUAGE:
            return { ...state, isLanguage: isActive }

        default:
            return state
    }
}

export type RootState = ReturnType<typeof RootReducer>;
