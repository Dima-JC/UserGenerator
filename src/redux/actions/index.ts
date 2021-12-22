import { 
    FETCH_DATA,
    PRIVATE_ROUTE, 
    SET_IS_PAGE_GENDER, 
    USER_INFO
} from '../types'

export const getData = () => {
    return {
        type: FETCH_DATA,
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

export const addUserInfo = (data: any[]) => {
    return {
        type: USER_INFO,
        data
    }
}
