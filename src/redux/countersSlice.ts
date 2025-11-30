import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Counter {
  id: number;
  count: number;
}
const initialCounters: Counter[] = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
];
const countersSlice = createSlice({
    name: "counters",
    initialState: initialCounters,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            const counter = state.find((c) => c.id === action.payload);
            counter!.count++;
        },
        decrement: (state, action) => {
            const counterIdx = state.findIndex((c) => c.id === action.payload);
            state[counterIdx].count--;
        },
    }
});

export const { increment, decrement } = countersSlice.actions;
export default countersSlice.reducer;