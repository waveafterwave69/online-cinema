import { useEffect, useState } from 'react'
import type { Films } from '../../types'
import { getOneFilm, randomId } from '../../data/data'

const useGetRandomFilms = () => {
    const [film, setFilm] = useState<Films>()

    useEffect(() => {
        const fetchData = async () => {
            const id = await randomId()
            const data = await getOneFilm(id)
            console.log(data)
            setFilm(data?.data)
        }

        fetchData()
    }, [])

    return { film }
}

export default useGetRandomFilms
