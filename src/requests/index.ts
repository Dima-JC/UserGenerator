import axios from "axios";

import { URL } from "../constants/constants";

export const GET: any = async() => await axios.get(URL)
