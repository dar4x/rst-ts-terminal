import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import $axios from "src/utils/axios"
import { BASE_URL } from "src/utils/const"

export interface BranchesI {
    id: number,
    name: string,
    phone: string,
    schedule_start?: string,
    schedule_end?: string,
    city?: string,
    street?: string,
    admin?: string,
    region?: string
}

interface BranchesState{
    branches: BranchesI[],
    isLoading: boolean,
    error: string | null
}

const initialState:BranchesState = {
    branches: [],
    isLoading: false,
    error: null
}

export const getBranches = createAsyncThunk("branches/getBranches", async () => {
    const response = await $axios.get(`${BASE_URL}/branches/`);
    return response.data
})


export const BranchesSlice = createSlice({
    name: "branches",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBranches.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getBranches.fulfilled, (state, action: PayloadAction<BranchesI[]>) => {
            state.isLoading = false,
            state.branches = action.payload
        })
        .addCase(getBranches.rejected, (state, action) => {
            state.isLoading = false,
            state.error = action.error.message || "An error occurred while fetching branches. (Ошибка короче)"
        });
    }
})

export default BranchesSlice.reducer;
export const {  } = BranchesSlice.actions;
