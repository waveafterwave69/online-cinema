import axios from 'axios'

export async function test1() {
    try {
        const response = await axios(
            'https://kinopoiskapiunofficial.tech/api/v2.2/films/463634',
            {
                method: 'GET',
                headers: {
                    'X-API-KEY': '9168d623-7b9f-4043-93a4-44eee12190b7',
                },
            }
        )
        return response
    } catch (error) {
        console.error(error)
    }
}
