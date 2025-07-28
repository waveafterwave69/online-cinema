import axios from 'axios'
import type { Theme } from '../types'

export const getAllFilms = async (page: number) => {
    try {
        const response = await axios(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=${page}`,
            {
                method: 'GET',
                headers: {
                    'X-API-KEY': '0d9ad324-67a5-44f6-b801-1dc9546bcabd',
                },
            }
        )
        return response
    } catch (error) {
        console.error(error)
    }
}

export const getOneFilm = async (id: number) => {
    try {
        const response = await axios(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,
            {
                method: 'GET',
                headers: {
                    'X-API-KEY': '0d9ad324-67a5-44f6-b801-1dc9546bcabd',
                },
            }
        )
        return response
    } catch (error) {
        console.error(error)
    }
}

export const randomId = async () => {
    try {
        const data = await getAllFilms(Math.round(Math.random() * (5 - 0) + 0))
        return data?.data.items[Math.round(Math.random() * (1 - 19) + 19)]
            ?.kinopoiskId
    } catch (error) {
        return error
    }
}

export const getNews = async () => {
    try {
        const response = await axios(
            ` https://kinopoiskapiunofficial.tech/api/v1/media_posts?page=1`,
            {
                method: 'GET',
                headers: {
                    'X-API-KEY': '0d9ad324-67a5-44f6-b801-1dc9546bcabd',
                },
            }
        )
        return response
    } catch (error) {
        console.error(error)
    }
}

export const getThemes = async (theme: string) => {
    try {
        const response = await axios(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=${theme}&page=1
`,
            {
                method: 'GET',
                headers: {
                    'X-API-KEY': '0d9ad324-67a5-44f6-b801-1dc9546bcabd',
                },
            }
        )
        return response
    } catch (error) {
        console.error(error)
    }
}

export const getNewFilms = async () => {
    try {
        const response = await axios(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=1
`,
            {
                method: 'GET',
                headers: {
                    'X-API-KEY': '0d9ad324-67a5-44f6-b801-1dc9546bcabd',
                },
            }
        )
        return response
    } catch (error) {
        console.error(error)
    }
}
