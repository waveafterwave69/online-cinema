import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import idReducer from './slices/idSlice/idSlice'

export const store = configureStore({
    reducer: {
        id: idReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
