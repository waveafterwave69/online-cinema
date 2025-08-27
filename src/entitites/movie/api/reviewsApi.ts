import { apiKey, instance } from '../../../app/api/data'

export const getReview = async (id: string | undefined) => {
    try {
        const response = await instance.get(`/${id}/reviews`, {
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
