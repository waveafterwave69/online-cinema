import { loginReducer } from '@/entitites/auth/model/loginSlice'
import { categoryReducer } from '@/entitites/category/model/categorySlice'
import { combineReducers } from '@reduxjs/toolkit'
import { dataReducer } from './appSlice'

export const rootReducer = combineReducers({
    data: dataReducer,
    category: categoryReducer,
    login: loginReducer,
})
