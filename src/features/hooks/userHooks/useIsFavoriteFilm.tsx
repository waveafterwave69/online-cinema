import type { Films } from '@/shared/types'
import { useEffect, useState } from 'react'
import useGetUserFilms from './useGetUserFilms'

const useIsFavoriteFilm = (film: Films) => {
    const [isFavorite, setIsFavorite] = useState<Films[] | string[] | string>()
    const { filmsFav } = useGetUserFilms()

    useEffect(() => {
        const fav =
            filmsFav &&
            filmsFav.filter((el: Films) => {
                if (el.film.kinopoiskId) {
                    return el.film.kinopoiskId === film.kinopoiskId
                } else {
                    return el.film.filmId === film.filmId
                }
            })

        setIsFavorite(fav)
    }, [filmsFav])

    return { isFavorite, setIsFavorite }
}

export default useIsFavoriteFilm
