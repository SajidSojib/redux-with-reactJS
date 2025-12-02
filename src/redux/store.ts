import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "./countersSlice";

const store = configureStore({
    reducer: {
        counters: countersReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;