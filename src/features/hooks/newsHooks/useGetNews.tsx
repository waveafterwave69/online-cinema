import { getNews } from '@/entitites/news/api/newsApi'
import type { News } from '@/shared/types'
import { useEffect, useState } from 'react'

const useGetNews = () => {
    const [news, setNews] = useState<News[]>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const data = await getNews()
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
