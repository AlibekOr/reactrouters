import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
export const getModal = createAsyncThunk(
    'modalSlice/modalGet',
    async (cios) => {
        try {
            const modalRes = await axios.get(`https://restcountries.com/v3.1/alpha/${cios}`)
            if (modalRes.status === 200) {
                return modalRes.data
            }

        } catch (error) {
            console.log(error);
        }
    }
)

const initialState = {
    modal: []
}
const modalSilce = createSlice({
    name: 'modalSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getModal.fulfilled, (state, { payload }) => {
                state.modal = payload
            })
    }
})
export default modalSilce.reducer