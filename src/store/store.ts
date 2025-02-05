import { configureStore } from "@reduxjs/toolkit";
import { goalSlice } from "./goal-slice";

export const store = configureStore({
    reducer: {
        goals: goalSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;