import { GET } from '../requests'

export const GET_DATE_UNITS = async (result: number) => {
    const get = await GET(result)
    return get.data.results
}

export const params = (result: number) => {
    return {
        page: result,
        results: 10,
        seed: 'abc',
    }
}
