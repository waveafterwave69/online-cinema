import { createSlice } from '@reduxjs/toolkit'
import type { Films } from '../../../types'

const loadState = <T>(key: string): T | undefined => {
    try {
        const serializedState = localStorage.getItem(key)
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState) as T
    } catch (err) {
        return undefined
    }
}

const saveState = <T>(key: string, state: T): void => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem(key, serializedState)
    } catch (err) {
        console.error('Error saving state to localStorage:', err)
    }
}

interface ProfileState {
    fav: Films[]
    like: Films[]
    dislike: Films[]
}

const initialState: ProfileState = {
    fav: loadState<Films[]>('fav') || [],
    like: loadState<Films[]>('like') || [],
    dislike: loadState<Films[]>('dislike') || [],
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        toggleFav: (state, action) => {
            const filmId = action.payload.kinopoiskId

            const isFavorite = state.fav.some(
                (el: Films) => el.filmId === filmId
            )

            if (isFavorite) {
                state.fav = state.fav.filter(
                    (el: Films) => el.kinopoiskId !== filmId
                )
            } else {
                state.fav = [...state.fav, action.payload]
            }

            saveState('fav', state.fav)
        },
        toggleLike: (state, action) => {
            const filmId = action.payload.kinopoiskId

            const isFavorite = state.like.some(
                (el: Films) => el.kinopoiskId === filmId
            )

            if (isFavorite) {
                state.like = state.like.filter(
                    (el: Films) => el.kinopoiskId !== filmId
                )
            } else {
                state.like = [...state.like, action.payload]
            }

            saveState('like', state.like)
        },
        toggleDislike: (state, action) => {
            const filmId = action.payload.kinopoiskId

            const isFavorite = state.dislike.some(
                (el: Films) => el.kinopoiskId === filmId
            )

            if (isFavorite) {
                state.dislike = state.dislike.filter(
                    (el: Films) => el.kinopoiskId !== filmId
                )
            } else {
                state.dislike = [...state.dislike, action.payload]
            }

            saveState('dislike', state.dislike)
        },
    },
})

export const { toggleFav, toggleLike, toggleDislike } = profileSlice.actions

export const profileReducer = profileSlice.reducer
