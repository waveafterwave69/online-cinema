import { useEffect, useState } from 'react'
import type { Films } from '../types'
import { geFilmByWords, getAllFilms } from '../api/filmsData'
import { useSelector } from 'react-redux'
import { getFilmsCategory } from '../api/categoryData'

const useGetFilmPage = () => {
    const { category } = useSelector((state: any) => state)
    const [films, setFilms] = useState<Films[] | undefined>(undefined)
    const [pageCount, setPageCount] = useState<number>(1)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [searchWord, setSearchWord] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        if (searchWord !== '') {
            const fetchData = async () => {
                try {
                    setIsLoading(true)
                    const data = await geFilmByWords(searchWord, pageCount)
                    if (data?.data?.films) {
                        setFilms(data.data.films)
                    }
                    setIsLoading(false)
                } catch (error) {
                    setError(true)
                    console.error('Ошибка при получении данных:', error)
                }
            }

            fetchData()
        }
    }, [searchWord, pageCount])

    useEffect(() => {
        if (category.theme === undefined && searchWord === '') {
            const fetchData = async () => {
                try {
                    setIsLoading(true)
                    const data = await getAllFilms(pageCount)
                    if (data?.data?.items) {
                        setFilms(data.data.items)
                    }
                    setIsLoading(false)
                } catch (error) {
                    setError(true)
                    console.error('Ошибка при получении данных:', error)
                }
            }

            fetchData()
        }
    }, [pageCount, category.theme, searchWord])

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
                        setFilms(data.data.items)
                    }
                    setIsLoading(false)
                } catch (error) {
                    console.error('Ошибка при получении данных:', error)
                }
            }
            fetchData()
        }
    }, [category.theme, pageCount])

    useEffect(() => {
        if (films && films?.length === 0) {
            setError(true)
        } else {
            setError(false)
        }
    }, [films])

    useEffect(() => {
        setPageCount(1)
    }, [category.theme, searchWord])

    return {
        films,
        isLoading,
        setPageCount,
        setSearchWord,
        pageCount,
        error,
    }
}

export default useGetFilmPage
