import {
    DATA_RECEIVED,
    FETCH_DATA,
    IS_LOADING,
    PRIVATE_ROUTE,
    SET_IS_PAGE_GENDER,
    USER_INFO
} from "./types";

const initialState: any = {
    receivedData: [],
    userInfo: [],
    privateRout: false,
    isPageGender: false,
    isUserInfo: false,
    isLoading: false,
}

export default function RootReducer(state: any = initialState, { type, payload, data, pageName }: any) {
    switch (type) {
        case DATA_RECEIVED:
            return { ...state, receivedData: data }

        case USER_INFO:
            return { ...state, userInfo: data! }

        case PRIVATE_ROUTE:
            return { ...state, privateRout: (payload as boolean) }

        case IS_LOADING:
            return { ...state, isLoading: (payload as boolean) }

        case SET_IS_PAGE_GENDER:
            return { ...state, isPageGender: (payload as boolean) }

        default:
            return state
    }
}

export type RootState = ReturnType<typeof RootReducer>;
