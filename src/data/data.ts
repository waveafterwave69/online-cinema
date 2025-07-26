import axios from 'axios'

export const getAllFilms = async (page: number) => {
    try {
        const response = await axios(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=${page}`,
            {
                method: 'GET',
                headers: {
                    'X-API-KEY': '196b8e3a-e32f-4799-8601-7400e701b4f3',
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
                    'X-API-KEY': '196b8e3a-e32f-4799-8601-7400e701b4f3',
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
        const data = await getAllFilms(Math.round(Math.random() * (5 - 0) + 0))
        return data?.data.items[Math.round(Math.random() * (1 - 19) + 19)]
            ?.kinopoiskId
    } catch (error) {
        return error
    }
}
