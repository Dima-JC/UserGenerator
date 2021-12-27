import { Data } from '../../interfaces'

import {
    COUNT_USERS_DATA,
    FETCH_DATA,
    IS_ACTIVE_BUTTON,
    IS_LANGUAGE,
    PRIVATE_ROUTE,
    USER_INFO
} from '../types'

export const getData = (pageName: number) => {
    return {
        type: FETCH_DATA,
        pageName
    }
}

export const privateRoute = (payload: boolean) => {
    return {
        type: PRIVATE_ROUTE,
        payload
    }
}

export const addUserInfo = (data: Data[]) => {
    return {
        type: USER_INFO,
        data
    }
}

export const namberUsersData = (pageName: number) => {
    return {
        type: COUNT_USERS_DATA,
        pageName
    }
}

export const isActiveButton = (isActive: string) => {
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
