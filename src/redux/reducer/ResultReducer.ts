import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    result: [],
    resultStatus: 0,
}

const result = createSlice({
    name: 'result',
    initialState,
    reducers: {
        setResult: (state, action) => {
            state.result = action.payload
        },
        setResultStatus: (state, action) => {
            state.resultStatus = action.payload
        }
    },
})

export const {setResult, setResultStatus} = result.actions
export default result.reducer;
