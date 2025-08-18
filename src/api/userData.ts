import axios from 'axios'
import { apiKey } from './data'

export const getUserReview = async (id: string | undefined) => {
    try {
        const response = await axios({
            method: 'GET',
            url: `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/reviews`,
            params: {
                page: 1,
                order: 'DATE_DESC',
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

export const getUserInfo = async (userId: string | undefined) => {
    try {
        const response = await axios({
            method: 'GET',
            url: `https://kinopoiskapiunofficial.tech/api/v1/staff/${userId}`,
            headers: {
                'X-API-KEY': apiKey,
            },
        })
        return response
    } catch (error) {
        console.error(error)
    }
}
