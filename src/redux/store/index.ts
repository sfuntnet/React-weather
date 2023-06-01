import {configureStore} from '@reduxjs/toolkit';
import SearchReducer from "../reducer/SearchReducer.ts";
import ResultReducer from "../reducer/ResultReducer.ts";


const store = configureStore({
    reducer: {
        search: SearchReducer,
        result: ResultReducer,
     },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store;
