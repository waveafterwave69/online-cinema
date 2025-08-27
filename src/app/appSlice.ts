import { getAllFilms } from '@/entitites/films/api/filmsApi'
import type { Films } from '@/shared/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface DataState {
    data: Films[]
    loading: boolean
}

export const fetchData = createAsyncThunk(
    'data/fetchData',
    async (page: number, { rejectWithValue }) => {
        try {
            const response = await getAllFilms(page)

            return response?.data.items
        } catch (error: any) {
            return rejectWithValue(
                error.message || 'Произошла неизвестная ошибка'
            )
        }
    }
)

const initialState: DataState = {
    data: [],
    loading: false,
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
            .addCase(fetchData.rejected, (state) => {
                state.loading = false
            })
    },
})

export const dataReducer = dataSlice.reducer
