import axios from 'axios'

export const apiKey = '875920c4-6160-4514-b749-292adf5e95d7'

export const instance = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.2/films',
    headers: {
        'X-API-KEY': apiKey,
    },
})
