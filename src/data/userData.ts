import axios from 'axios'
import { apiKey } from './data'

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
