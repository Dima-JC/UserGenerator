import { DATA_RECEIVED } from "./types";

const initialState: any = {
    receivedData: [],
}

export default function RootReducer(state: any = initialState, { type, payload, data, pageName }: any){  
    switch (type) {
        case DATA_RECEIVED:            
            return { ...state, receivedData: state.receivedData = data }
        default: 
            return state
    }
}

export type RootState = ReturnType<typeof RootReducer>;
