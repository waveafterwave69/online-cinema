import axios from 'axios'
import { apiKey, instance } from './data'

export const getAllFilms = async (page: number) => {
    try {
        const response = await instance.get('/collections', {
            params: {
                type: 'TOP_250_MOVIES',
                page: page,
            },
            headers: {
                'X-API-KEY': apiKey,
            },
        })
        return response
    } catch (error) {
        console.error(error)
    }
}

export const getOneFilm = async (id: string | undefined) => {
    try {
        const response = await instance.get(`/${id}`, {
            headers: {
                'X-API-KEY': apiKey,
            },
        })
        return response
    } catch (error) {
        console.error(error)
    }
}

export const getFilmBg = async (id: string | undefined) => {
    try {
        const response = await instance.get(`/${id}/images`, {
            params: {
                type: 'STILL',
                page: 1,
            },
            headers: {
                'X-API-KEY': apiKey,
            },
        })
        return response
    } catch (error) {
        console.error(error)
    }
}

export const getFilmVideo = async (id: string | undefined) => {
    try {
        const response = await instance.get(`/${id}/external_sources`, {
            params: {
                page: 1,
            },
            headers: {
                'X-API-KEY': apiKey,
            },
        })
        return response
    } catch (error) {
        console.error(error)
    }
}

export const randomId = async () => {
    try {
        const data = await getAllFilms(Math.round(Math.random() * (5 - 1) + 1))
        return data?.data.items[Math.round(Math.random() * (1 - 18) + 18)]
            ?.kinopoiskId
    } catch (error) {
        return error
    }
}

export const getNewFilms = async () => {
    try {
        const response = await instance.get('/collections', {
            params: {
                type: 'TOP_POPULAR_MOVIES',
                page: 1,
            },
            headers: {
                'X-API-KEY': apiKey,
            },
        })
        return response
    } catch (error) {
        console.error(error)
    }
}

export const getFilmsFacts = async (id: string | undefined) => {
    try {
        const response = await instance.get(`/${id}/facts`, {
            headers: {
                'X-API-KEY': apiKey,
            },
        })
        return response
    } catch (error) {
        console.error(error)
    }
}

export const getFilmsActors = async (id: string | undefined) => {
    try {
        const response = await axios({
            method: 'GET',
            url: 'https://kinopoiskapiunofficial.tech/api/v1/staff?',
            params: {
                filmId: id,
                type: 'TOP_POPULAR_MOVIES',
                page: 1,
            },
            headers: {
                'X-API-KEY': apiKey,
            },
        })
        return response
    } catch (error) {
        console.error(error)
    }
}

export const getSameFilms = async (id: string | undefined) => {
    try {
        const response = await instance.get(`/${id}/similars`, {
            headers: {
                'X-API-KEY': apiKey,
            },
        })
        return response
    } catch (error) {
        console.error(error)
    }
}

export const getSequelPrequelFilm = async (id: string | undefined) => {
    try {
        const response = await instance.get(`/${id}/sequels_and_prequels`, {
            headers: {
                'X-API-KEY': apiKey,
            },
        })
        return response
    } catch (error) {
        console.error(error)
    }
}

export const geFilmByWords = async (word: string, page: number) => {
    try {
        const response = await axios.get(
            'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword',
            {
                params: {
                    keyword: word,
                    page: page,
                },
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
