import axios from 'axios'
import { apiKey } from './data'
import type { Theme } from '../types'
import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'
import img4 from '../img/4.jpg'
import img5 from '../img/5.jpg'
import img6 from '../img/6.jpg'
import img7 from '../img/7.jpg'

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
