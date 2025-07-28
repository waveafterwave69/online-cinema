import { useEffect, useState } from 'react'
import { getNewFilms, getThemes } from '../../data/data'
import type { Films } from '../../types'

const useGetCategory = () => {
    const [films, setFilms] = useState<Films[]>()
    const [theme, setTheme] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            if (theme == '') {
                try {
                    setIsLoading(true)
                    const data = await getNewFilms()
                    setFilms(data?.data.items)
                    setIsLoading(false)
                } catch (error) {
                    console.error('Ошибка при получении данных:', error)
                }
            } else {
                try {
                    setIsLoading(true)
                    const data = await getThemes(theme)
                    setFilms(data?.data.items)
                    setIsLoading(false)
                } catch (error) {
                    console.error('Ошибка при получении данных:', error)
                }
            }
        }

        fetchData()
    }, [theme])

    return { setTheme, films, isLoading }
}

export default useGetCategory
