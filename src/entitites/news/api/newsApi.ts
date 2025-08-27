import axios from 'axios'
import { apiKey } from '../../../app/api/data'
export const getNews = async () => {
    try {
        const response = await axios({
            method: 'GET',
            url: 'https://kinopoiskapiunofficial.tech/api/v1/media_posts',
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
