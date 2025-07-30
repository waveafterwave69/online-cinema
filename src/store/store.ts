import { configureStore } from '@reduxjs/toolkit'
import { dataReducer } from './slices/dataSlice/dataSlice'
import { categoryReducer } from './slices/categorySlice/categorySlice'

const store = configureStore({
    reducer: {
        data: dataReducer,
        category: categoryReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
