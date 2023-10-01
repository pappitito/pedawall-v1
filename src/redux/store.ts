import { configureStore } from "@reduxjs/toolkit";
import actuatorReducer from "./slices/actuatorSlice";

export const store = configureStore({
    reducer: {
        actuator: actuatorReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;