import type { RootState } from '../store/store'
import { useAppSelector } from './hooks'
import useGetMoviesFromDb from './useGetMoviesFromDb'

const useGetUserFilms = () => {
    const { login }: any = useAppSelector((state: RootState) => state)
    const { movieFav } = useGetMoviesFromDb()

    const needUser: any = movieFav.filter(
        (el: any) => el?.email === login?.userProfile?.email
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
