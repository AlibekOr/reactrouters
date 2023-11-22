import { configureStore } from "@reduxjs/toolkit"
import modalSilce from "./modal"
import countriesSlice from "./countriesSlice"
export const store = configureStore({
    reducer: {
        countries: countriesSlice,
        modalSilce: modalSilce
    }
})