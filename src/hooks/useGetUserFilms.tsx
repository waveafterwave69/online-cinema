import type { Films } from '../types'
import { useAppSelector } from './hooks'
import useGetMoviesFromDb from './useGetMoviesFromDb'

const useGetUserFilms = () => {
    const login = useAppSelector((state) => state.login)
    const { movieFav } = useGetMoviesFromDb()

    const needUser: Films[] = movieFav.filter(
        (el: Films) => el?.email === login?.userProfile?.email
    )

    const filmsFav = needUser[0]?.fav
    const filmsLike = needUser[0]?.like
    const filmsDisLike = needUser[0]?.dislike

    return {
        filmsFav,
        filmsLike,
        filmsDisLike,
        movieFav,
    }
}

export default useGetUserFilms
