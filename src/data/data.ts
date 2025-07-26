import axios from 'axios'

export const getAllFilms = async (page: number) => {
    try {
        const response = await axios(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=ALL&ratingFrom=7&ratingTo=10&yearFrom=1000&yearTo=3000&page=${page}`,
            {
                method: 'GET',
                headers: {
                    'X-API-KEY': '0d9ad324-67a5-44f6-b801-1dc9546bcabd',
                },
            }
        )
        return response
    } catch (error) {
        console.error(error)
    }
}

export const getOneFilm = async (id: number) => {
    try {
        const response = await axios(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,
            {
                method: 'GET',
                headers: {
                    'X-API-KEY': '0d9ad324-67a5-44f6-b801-1dc9546bcabd',
                },
            }
        )
        return response
    } catch (error) {
        console.error(error)
    }
}

export const randomId = async () => {
    try {
        const data = await getAllFilms(
            Math.round(Math.random() * (1 - 10) + 10)
        )
        return data?.data.items[Math.round(Math.random() * (0 - 20) + 20)]
            ?.kinopoiskId
    } catch (error) {
        return error
    }
}
