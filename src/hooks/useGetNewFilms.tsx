import { useEffect, useState } from 'react'
import { getNewFilms } from '../data/data'
import type { Films } from '../types'

const useGetNewFilms = () => {
    const [films, setFilms] = useState<Films[]>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const data = await getNewFilms()
                setFilms(data?.data.items)
                setIsLoading(false)
            } catch (error) {
                console.error('Ошибка при получении данных:', error)
            }
        }

        fetchData()
    }, [])

    return { films, isLoading }
}

export default useGetNewFilms
