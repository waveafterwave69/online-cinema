import { getNews } from '../data/data'
import { useEffect, useState } from 'react'

const useGetNews = () => {
    const [news, setNews] = useState<any>()
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
