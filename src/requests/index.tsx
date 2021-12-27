import axios from "axios";

import { URL } from "../constants/constants";
import { params } from "../helpers";

export const GET = async (result: number) => await axios.get(URL, {params: params(result)})
