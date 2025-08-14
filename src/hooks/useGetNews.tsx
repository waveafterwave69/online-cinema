import { useEffect, useState } from 'react'
import type { News } from '../types'
import { getNews } from '../data/newsData'

const useGetNews = () => {
    const [news, setNews] = useState<News[]>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const data = await getNews()
                console.log(data)
                setNews(data?.data.items)
                setIsLoading(false)
            } catch (error) {
                console.error('Ошибка при получении данных:', error)
            }
        }

        fetchData()
    }, [])

    return { news, isLoading }
}

export default useGetNews
