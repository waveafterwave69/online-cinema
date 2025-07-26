import { getAllFilms } from '../../data/data'
import { useEffect, useState } from 'react'
import type { Films } from '../../types'

const useGetFilms = () => {
    const [films, setFilms] = useState<Films[]>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const data = await getAllFilms()
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

export default useGetFilms
