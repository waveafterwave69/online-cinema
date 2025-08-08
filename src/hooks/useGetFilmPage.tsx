import { useEffect, useState } from 'react'
import type { Films } from '../types'
import { getAllFilms, getFilmsCategory } from '../data/data'
import { useSelector } from 'react-redux'

const useGetFilmPage = () => {
    const { category } = useSelector((state: any) => state)
    console.log(category.themes)
    const [films, setFilms] = useState<Films[]>([])
    const [pageCount, setPageCount] = useState<number>(1)
    const [searchCategory, setSearchCategory] = useState<string>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    console.log(pageCount)

    useEffect(() => {
        if (category.theme === undefined) {
            const fetchData = async () => {
                try {
                    setIsLoading(true)
                    const data = await getAllFilms(pageCount)
                    if (data?.data?.items) {
                        // setFilms((prev) => [
                        //     ...(prev || []),
                        //     ...data.data.items,
                        // ])
                        setFilms(() => data.data.items)
                    }
                    setIsLoading(false)
                } catch (error) {
                    console.error('Ошибка при получении данных:', error)
                }
            }

            fetchData()
        }
    }, [pageCount, category.theme])

    console.log(films)

    useEffect(() => {
        if (category.theme) {
            const fetchData = async () => {
                try {
                    setIsLoading(true)
                    const data = await getFilmsCategory(
                        category.theme,
                        pageCount
                    )
                    if (data?.data?.items) {
                        // setFilms((prev) => [
                        //     ...(prev || []),
                        //     ...data.data.items,
                        // ])
                        setFilms(() => data.data.items)
                    }
                    setIsLoading(false)
                } catch (error) {
                    console.error('Ошибка при получении данных:', error)
                }
            }
            fetchData()
        }
    }, [category.theme, pageCount])

    return {
        films,
        isLoading,
        setPageCount,
    }
}

export default useGetFilmPage
