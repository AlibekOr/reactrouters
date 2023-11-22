import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { API } from "../client/getData"
import axios from "axios";


export const getData = createAsyncThunk(
    'countries/getData',
    async (reg) => {
        try {
            const res = await axios.get(`https://restcountries.com/v3.1/${reg === 'all' ? 'all' : `region/${reg}`}`)
            if (res.status === 200) {
                return res.data
            }
        } catch (error) {
            console.log(error);
        }
    }
)

const initialState = {
    counters: [],
    loaded: false

}
const countriesSlice = createSlice({
    name: 'counters',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
            .addCase(getData.fulfilled, (state, { payload }) => {
                state.counters = payload
            })


    }
})

export const { showSearch } = countriesSlice.actions
export default countriesSlice.reducer