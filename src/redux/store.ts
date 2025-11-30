import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "./countersSlice";

const store = configureStore({
    reducer: {
        counters: countersReducer,
    },
});

export default store;