import axios from "axios";

import { URL } from "../constants/constants";

export const GET = async() => await axios.get(URL)
