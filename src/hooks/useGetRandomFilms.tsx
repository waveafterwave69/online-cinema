import { useEffect, useState } from 'react'
import type { Films } from '../types'
import { getOneFilm, randomId } from '../api/filmsData'

const useGetRandomFilms = () => {
    const [film, setFilm] = useState<Films>()

    useEffect(() => {
        const fetchData = async () => {
            const id = await randomId()
            const data = await getOneFilm(id)
            setFilm(data?.data)
        }

        fetchData()
    }, [])

    return { film }
}

export default useGetRandomFilms
