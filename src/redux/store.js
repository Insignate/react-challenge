import { configureStore } from "@reduxjs/toolkit";
import nameResolver from "./appPeriodic";

//simple store configure to be able to access the nameResolver variables
export const store = configureStore({
    reducer: {
        names: nameResolver
    }
})