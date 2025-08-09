import axios from 'axios'
import type { Theme } from '../types'
import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'
import img4 from '../img/4.jpg'
import img5 from '../img/5.jpg'
import img6 from '../img/6.jpg'
import img7 from '../img/7.jpg'

const apiKey = '9168d623-7b9f-4043-93a4-44eee12190b7'

export const collections: Theme[] = [
    {
        theme: 'CATASTROPHE_THEME',
        name: 'Катастрофа',
        img: img1,
    },
    {
        theme: 'VAMPIRE_THEME',
        name: 'Вампиры',
        img: img4,
    },
    {
        theme: 'ZOMBIE_THEME',
        name: 'Зомби',
        img: img5,
    },
    {
        theme: 'COMICS_THEME',
        name: 'Комиксы',
        img: img6,
    },
    {
        theme: 'LOVE_THEME',
        name: 'Любовь',
        img: img7,
    },
    {
        theme: 'FAMILY',
        name: 'Для семьи',
        img: img2,
    },
    {
        theme: 'KIDS_ANIMATION_THEME',
        name: 'Для детей',
        img: img3,
    },
]

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
        const data = await getAllFilms(Math.round(Math.random() * (5 - 1) + 1))
        return data?.data.items[Math.round(Math.random() * (1 - 18) + 18)]
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
    page: number | string = 1
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

export const getFilmsFacts = async (id: string | undefined) => {
    try {
        const response = await axios(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/facts
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

export const getFilmsActors = async (id: string | undefined) => {
    try {
        const response = await axios(
            `https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${id}
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

export const getSameFilms = async (id: string | undefined) => {
    try {
        const response = await axios(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars
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

export const getSequelPrequelFilm = async (id: string | undefined) => {
    try {
        const response = await axios(
            `https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}/sequels_and_prequels

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

export const getUserReview = async (id: string | undefined) => {
    try {
        const response = await axios(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/reviews?page=1&order=DATE_DESC

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

export const getUserInfo = async (userId: string | undefined) => {
    try {
        const response = await axios(
            `https://kinopoiskapiunofficial.tech/api/v1/staff/${userId}
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

export const geFilmByWords = async (word: string, page: number) => {
    try {
        const response = await axios(
            `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${word}&page=${page}


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
