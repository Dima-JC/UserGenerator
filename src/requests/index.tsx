import axios from "axios";

import { URL } from "../constants/constants";

export const GET = async (result: number) => await axios.get(URL, {
    params: {
        page: result,
        results: 10,
        seed: 'abc',
    }
})
