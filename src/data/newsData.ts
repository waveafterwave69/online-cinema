import axios from 'axios'
import { apiKey } from './data'
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
