import { useEffect, useState } from 'react'
import type { Films } from '../types'
import {
    getFilmBg,
    getFilmsFacts,
    getFilmVideo,
    getOneFilm,
} from '../data/data'

const useGetOneFilm = (id: string | undefined) => {
    const [film, setFilm] = useState<Films>()
    const [currFilm, setCurrFilm] = useState<any>()
    const [filmBg, setFilmBg] = useState<any>()
    const [filmWatch, setFilmWatch] = useState<any>()
    const [filmFacts, setFilmFacts] = useState<any>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const data = await getOneFilm(id)
                const data2 = await getFilmBg(id)
                const data3 = await getFilmVideo(id)
                const data4 = await getFilmsFacts(id)
                setFilm(data?.data)
                setFilmBg(data2?.data.items)
                setCurrFilm(data2?.data.items[0].imageUrl)
                setFilmWatch(data3?.data.items)
                setFilmFacts(data4?.data.items)
                setIsLoading(false)
            } catch (error) {
                console.error('Ошибка при получении данных:', error)
            }
        }

        fetchData()
    }, [])

    return {
        film,
        filmBg,
        currFilm,
        setCurrFilm,
        filmWatch,
        isLoading,
        filmFacts,
    }
}

export default useGetOneFilm
