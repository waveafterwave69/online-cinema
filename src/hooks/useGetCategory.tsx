import { useEffect, useState } from 'react'
import type { Films } from '../types'
import { useDispatch, useSelector } from 'react-redux'
import {
    clearCategory,
    setCategory,
} from '../store/slices/categorySlice/categorySlice'
import { getFilmsCategory } from '../data/categoryData'

const useGetCategory = () => {
    const [films, setFilms] = useState<Films[]>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { theme } = useSelector((state: any) => state.category)
    console.log(theme)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            if (theme == undefined) {
                try {
                    setFilms([])
                    setIsLoading(true)
                    const data = await getFilmsCategory('TOP_250_MOVIES', '3')
                    setFilms(data?.data.items)
                    dispatch(clearCategory(undefined))
                    setIsLoading(false)
                } catch (error) {
                    console.error('Ошибка при получении данных:', error)
                }
            } else {
                try {
                    setFilms([])
                    setIsLoading(true)
                    const data = await getFilmsCategory(theme, '1')
                    setFilms(data?.data.items)
                    dispatch(setCategory(theme))
                    setIsLoading(false)
                } catch (error) {
                    console.error('Ошибка при получении данных:', error)
                }
            }
        }

        fetchData()
    }, [theme])

    return { films, isLoading }
}

export default useGetCategory
