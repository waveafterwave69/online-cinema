import axios from 'axios'

export const apiKey = '9168d623-7b9f-4043-93a4-44eee12190b7'

export const instance = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.2/films',
    headers: {
        'X-API-KEY': apiKey,
    },
})
