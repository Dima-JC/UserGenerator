import { Data } from '../../interfaces'

import {
    COUNT_USERS_DATA,
    FETCH_DATA,
    IS_ACTIVE_BUTTON,
    IS_LANGUAGE,
    SET_PRIVATE_ROUTE,
    SET_USER_INFO
} from '../types'

export const getData = (pageName: number) => {
    return {
        type: FETCH_DATA,
        pageName
    }
}

export const setIsPrivateRoute = (payload: boolean) => {
    return {
        type: SET_PRIVATE_ROUTE,
        payload
    }
}

export const addUserInfo = (data: Data[]) => {
    return {
        type: SET_USER_INFO,
        data
    }
}

export const setUserNumber = (pageName: number) => {
    return {
        type: COUNT_USERS_DATA,
        pageName
    }
}

export const setIsActiveButton = (isActive: string) => {
    return {
        type: IS_ACTIVE_BUTTON,
        isActive
    }
}

export const setLanguage = (isActive: string) => {
    return {
        type: IS_LANGUAGE,
        isActive
    }
}
