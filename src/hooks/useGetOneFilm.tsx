import { useEffect, useState } from 'react'
import type { Films } from '../types'
import { getFilmBg, getFilmVideo, getOneFilm } from '../data/data'

const useGetOneFilm = (id: string | undefined) => {
    const [film, setFilm] = useState<Films>()
    const [currFilm, setCurrFilm] = useState<any>()
    const [filmBg, setFilmBg] = useState<any>()
    const [filmWatch, setFilmWatch] = useState<any>()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getOneFilm(id)
                const data2 = await getFilmBg(id)
                const data3 = await getFilmVideo(id)
                setFilm(data?.data)
                setFilmBg(data2?.data.items)
                setCurrFilm(data2?.data.items[0].imageUrl)
                setFilmWatch(data3?.data.items)
            } catch (error) {
                console.error('Ошибка при получении данных:', error)
            }
        }

        fetchData()
    }, [])

    return { film, filmBg, currFilm, setCurrFilm, filmWatch }
}

export default useGetOneFilm
