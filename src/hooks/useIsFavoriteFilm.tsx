import { useEffect, useState } from 'react'
import useGetUserFilms from './useGetUserFilms'

const useIsFavoriteFilm = (film: any) => {
    const [isFavorite, setIsFavorite] = useState<any>()
    const { filmsFav } = useGetUserFilms()

    useEffect(() => {
        const fav =
            filmsFav &&
            filmsFav.filter((el: any) => {
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
