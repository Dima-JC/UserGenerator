import { GET } from '../requests'

export const GET_DATE_UNITS = async (result: number) => {
    const get = await GET(result)
    return get.data.results
}
