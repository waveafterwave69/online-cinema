import { useEffect, useState } from 'react'
import type { Films } from '../types'
import { getFilmBg, getOneFilm } from '../data/data'

const useGetOneFilm = (id: string | undefined) => {
    const [film, setFilm] = useState<Films>()
    const [currFilm, setCurrFilm] = useState<any>()
    const [filmBg, setFilmBg] = useState<any>()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getOneFilm(id)
                const data2 = await getFilmBg(id)
                setFilm(data?.data)
                setFilmBg(data2?.data.items)
                setCurrFilm(data2?.data.items[0].imageUrl)
            } catch (error) {
                console.error('Ошибка при получении данных:', error)
            }
        }

        fetchData()
    }, [])

    return { film, filmBg, currFilm, setCurrFilm }
}

export default useGetOneFilm
