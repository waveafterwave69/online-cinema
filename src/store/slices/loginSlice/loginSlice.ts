import { createSlice } from '@reduxjs/toolkit'

type LogInType = 'login' | 'signin'
type FormType = 'open' | 'close'

interface UserProfile {
    email: string
    password: string
    id: string
}

interface InitialStateType {
    type: LogInType
    userProfile: UserProfile | undefined
    formType: FormType
}

// Function to get userProfile from localStorage
const getInitialUserProfile = (): UserProfile | undefined => {
    try {
        const storedUserProfile = localStorage.getItem('userProfile')
        return storedUserProfile ? JSON.parse(storedUserProfile) : undefined
    } catch (error) {
        console.error('Error getting userProfile from localStorage:', error)
        return undefined
    }
}

const initialState: InitialStateType = {
    type: 'login',
    userProfile: getInitialUserProfile(), // Get initial value from localStorage
    formType: 'close',
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        switchType: (state) => {
            if (state.type === 'login') {
                state.type = 'signin'
            } else {
                state.type = 'login'
            }
        },
        switchForm: (state) => {
            if (state.formType === 'close') {
                state.formType = 'open'
            } else {
                state.formType = 'close'
            }
        },
        setUserInfo: (state, action) => {
            state.userProfile = action.payload
            localStorage.setItem('userProfile', JSON.stringify(action.payload))
        },
        clearUserInfo: (state) => {
            state.userProfile = undefined
            localStorage.removeItem('userProfile')
        },
    },
})

export const { switchType, switchForm, setUserInfo, clearUserInfo } =
    loginSlice.actions

export const loginReducer = loginSlice.reducer
