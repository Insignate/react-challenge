import { configureStore } from "@reduxjs/toolkit";
import nameResolver from "./appPeriodic";

export const store = configureStore({
    reducer: {
        names: nameResolver
    }
})