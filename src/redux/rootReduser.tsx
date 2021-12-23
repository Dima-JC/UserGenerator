import { Data, InitialState } from "../interfaces";
import {
    COUNT_USERS_DATA,
    DATA_RECEIVED,
    IS_DATA_FETCH_ERROR,
    IS_LOADING,
    PRIVATE_ROUTE,
    SET_IS_PAGE_GENDER,
    USER_INFO
} from "./types";

const initialState: InitialState = {
    receivedData: [],
    userInfo: [],
    privateRout: false,
    isPageGender: false,
    isLoading: false,
    isDataFetchError: false,
    numberUsers: 1,
}

interface Action {
    payload: boolean;
    data: Data;
    type: string;
    pageName: number;
}

export default function RootReducer(state = initialState, { type, payload, data, pageName }: Action) {
    switch (type) {
        case DATA_RECEIVED:
            return { ...state, receivedData: (state.receivedData as Data[]).concat(data) }

        case USER_INFO:
            return { ...state, userInfo: data! }

        case PRIVATE_ROUTE:
            return { ...state, privateRout: (payload as boolean) }

        case IS_LOADING:
            return { ...state, isLoading: (payload as boolean) }

        case SET_IS_PAGE_GENDER:
            return { ...state, isPageGender: (payload as boolean) }

        case IS_DATA_FETCH_ERROR:
            return { ...state, isDataFetchError: true }

        case COUNT_USERS_DATA:
            return { ...state, numberUsers: pageName }

        default:
            return state
    }
}

export type RootState = ReturnType<typeof RootReducer>;
