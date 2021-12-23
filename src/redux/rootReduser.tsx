import { GetData, InitialState } from "../interfaces";
import {
    COUNT_USERS_DATA,
    DATA_RECEIVED,
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
    numberUsers: 1,
}

interface Action {
    payload: boolean;
    data: GetData;
    type: string;
    pageName: number;
}

export default function RootReducer(state: InitialState = initialState, { type, payload, data, pageName }: Action) {
    switch (type) {
        case DATA_RECEIVED:
            return { ...state, receivedData: state.receivedData.concat(data.data.results) }

        case USER_INFO:
            return { ...state, userInfo: data! }

        case PRIVATE_ROUTE:
            return { ...state, privateRout: (payload as boolean) }

        case IS_LOADING:
            return { ...state, isLoading: (payload as boolean) }

        case SET_IS_PAGE_GENDER:
            return { ...state, isPageGender: (payload as boolean) }

        case COUNT_USERS_DATA:
            return { ...state, numberUsers: pageName }

        default:
            return state
    }
}

export type RootState = ReturnType<typeof RootReducer>;
