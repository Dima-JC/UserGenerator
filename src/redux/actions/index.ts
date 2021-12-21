import { DATA_RECEIVED } from '../types'

export const getData = (data: string) => {
    return {        
        type: DATA_RECEIVED,
        data
    }
}
