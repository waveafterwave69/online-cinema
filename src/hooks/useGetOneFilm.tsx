import { useEffect, useState } from 'react'
import type { Actor, Films, Review } from '../types'
import {
    getFilmBg,
    getFilmsActors,
    getFilmsFacts,
    getFilmVideo,
    getOneFilm,
    getSameFilms,
    getSequelPrequelFilm,
} from '../api/filmsData'
import { getUserReview } from '../api/userData'
import useGetUserFilms from './useGetUserFilms'

const useGetOneFilm = (id: string | undefined) => {
    const { filmsFav, filmsLike, filmsDisLike } = useGetUserFilms()

    const [film, setFilm] = useState<Films>()
    const [currFilm, setCurrFilm] = useState<any>()
    const [filmBg, setFilmBg] = useState<any>()
    const [filmWatch, setFilmWatch] = useState<any>()
    const [filmFacts, setFilmFacts] = useState<any>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [actors, setActors] = useState<Actor[]>()
    const [sameFilms, setSameFilms] = useState<Films[]>()
    const [sequalPrequal, setSequalPrequal] = useState<Films[]>()
    const [userReview, setUserReview] = useState<Review[]>()

    const [favColor, setFavColor] = useState<boolean>(false)
    const [likeColor, setLikeColor] = useState<boolean>(false)
    const [dislikeColor, setDislikeColor] = useState<boolean>(false)

    useEffect(() => {
        if (film) {
            const fav =
                filmsFav &&
                filmsFav.filter(
                    (el: any) => el.film.kinopoiskId === film.kinopoiskId
                )

            setFavColor(fav)

            const like =
                filmsLike &&
                filmsLike.filter(
                    (el: any) => el.film.kinopoiskId === film.kinopoiskId
                )

            setLikeColor(like)

            const dislike =
                filmsDisLike &&
                filmsDisLike.filter(
                    (el: any) => el.film.kinopoiskId === film.kinopoiskId
                )

            setDislikeColor(dislike)
        }
    }, [film])

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const data = await getOneFilm(id)
                const data2 = await getFilmBg(id)
                const data3 = await getFilmVideo(id)
                const data4 = await getFilmsFacts(id)
                const data5 = await getFilmsActors(id)
                const data6 = await getSameFilms(id)
                const data7 = await getSequelPrequelFilm(id)
                const data8 = await getUserReview(id)
                setFilm(data?.data)
                setFilmBg(data2?.data.items)
                setCurrFilm(data2?.data?.items[0]?.imageUrl)
                setFilmWatch(data3?.data.items)
                setFilmFacts(data4?.data.items)
                setActors(data5?.data)
                setSameFilms(data6?.data.items)
                setSequalPrequal(data7?.data)
                setUserReview(data8?.data.items)
                setIsLoading(false)
            } catch (error) {
                console.error('Ошибка при получении данных:', error)
            }
        }

        fetchData()
    }, [])

    return {
        film,
        filmBg,
        currFilm,
        setCurrFilm,
        filmWatch,
        isLoading,
        filmFacts,
        actors,
        sameFilms,
        sequalPrequal,
        userReview,
        favColor,
        likeColor,
        dislikeColor,
    }
}

export default useGetOneFilm
