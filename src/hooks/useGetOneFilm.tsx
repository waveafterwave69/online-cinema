import { useEffect, useState } from 'react'
import type { Films } from '../types'
import { getOneFilm } from '../data/data'

const useGetOneFilm = (id: number) => {
    const [film, setFilm] = useState<Films>()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getOneFilm(id)
                setFilm(data?.data)
            } catch (error) {
                console.error('Ошибка при получении данных:', error)
            }
        }

        fetchData()
    }, [])

    return { film }
}

export default useGetOneFilm
