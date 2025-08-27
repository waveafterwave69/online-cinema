import axios from 'axios'
import { apiKey } from '../../../app/api/data'

export const getActorInfo = async (userId: string | undefined) => {
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
