// @ts-ignore
import {configureStore} from '@reduxjs/toolkit';
// @ts-ignore
import SearchReducer from "../reducer/SearchReducer.ts";
// @ts-ignore
import ResultReducer from "../reducer/ResultReducer.ts";


const store = configureStore({
    reducer: {
        search: SearchReducer,
        result: ResultReducer,
     },
    // @ts-ignore
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store;