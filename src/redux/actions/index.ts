import { Data } from '../../interfaces'

import {
    COUNT_USERS_DATA,
    FETCH_DATA,
    PRIVATE_ROUTE,
    SET_IS_PAGE_GENDER,
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

export const setIsPageCar = (pageName: string) => {
    return {
        type: SET_IS_PAGE_GENDER,
        payload: pageName === "male"
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
