import axios from 'axios'
import type { Theme } from '../types'

const apiKey = '0d9ad324-67a5-44f6-b801-1dc9546bcabd'

export const getAllFilms = async (page: number) => {
    try {
        const response = await axios(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=${page}`,
            {
                method: 'GET',
                headers: {
                    'X-API-KEY': apiKey,
                },
            }
        )
        return response
    } catch (error) {
        console.error(error)
    }
}

export const getOneFilm = async (id: string | undefined) => {
    try {
        const response = await axios(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,
            {
                method: 'GET',
                headers: {
                    'X-API-KEY': apiKey,
                },
            }
        )
        return response
    } catch (error) {
        console.error(error)
    }
}

export const getFilmBg = async (id: string | undefined) => {
    try {
        const response = await axios(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/images?type=STILL&page=1`,
            {
                method: 'GET',
                headers: {
                    'X-API-KEY': apiKey,
                },
            }
        )
        return response
    } catch (error) {
        console.error(error)
    }
}

export const getFilmVideo = async (id: string | undefined) => {
    try {
        const response = await axios(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/external_sources?page=1

`,
            {
                method: 'GET',
                headers: {
                    'X-API-KEY': apiKey,
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
                    'X-API-KEY': apiKey,
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
                    'X-API-KEY': apiKey,
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
                    'X-API-KEY': apiKey,
                },
            }
        )
        return response
    } catch (error) {
        console.error(error)
    }
}

export const themes: Theme[] = [
    {
        theme: 'LOVE_THEME',
        name: 'Любовь',
    },
    {
        theme: 'CATASTROPHE_THEME',
        name: 'Катастрофа',
    },
    {
        theme: 'ZOMBIE_THEME',
        name: 'Зомби',
    },
    {
        theme: 'VAMPIRE_THEME',
        name: 'Вампиры',
    },
    {
        theme: 'FAMILY',
        name: 'Для семьи',
    },
    {
        theme: 'COMICS_THEME',
        name: 'Комиксы',
    },

    {
        theme: 'KIDS_ANIMATION_THEME',
        name: 'Для детей',
    },
]

export const getFilmsCategory = async (
    theme: string = 'TOP_250_MOVIES',
    page: string = '1'
) => {
    try {
        const response = await axios(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=${theme}&page=${page}
`,
            {
                method: 'GET',
                headers: {
                    'X-API-KEY': apiKey,
                },
            }
        )
        return response
    } catch (error) {
        console.error(error)
    }
}
