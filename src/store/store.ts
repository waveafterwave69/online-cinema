import { configureStore } from '@reduxjs/toolkit'
import { dataReducer } from './slices/dataSlice/dataSlice'
import { categoryReducer } from './slices/categorySlice/categorySlice'
import { loginReducer } from './slices/loginSlice/loginSlice'

const store = configureStore({
    reducer: {
        data: dataReducer,
        category: categoryReducer,
        login: loginReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
