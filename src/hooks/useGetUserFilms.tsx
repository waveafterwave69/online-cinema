import useGetMoviesFromDb from './useGetMoviesFromDb'
import { useSelector } from 'react-redux'

const useGetUserFilms = () => {
    const { login }: any = useSelector((state: any) => state)
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
