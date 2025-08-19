import { createSlice } from '@reduxjs/toolkit'

type LogInType = 'login' | 'signin'
type FormType = 'open' | 'close'

interface UserProfile {
    email: string
    password: string
}

interface InitialStateType {
    type: LogInType
    userProfile: UserProfile | undefined
    formType: FormType
}

const initialState: InitialStateType = {
    type: 'login',
    userProfile: undefined,
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
    },
})

export const { switchType, switchForm, setUserInfo } = loginSlice.actions

export const loginReducer = loginSlice.reducer
