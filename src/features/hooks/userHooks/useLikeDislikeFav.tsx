import type { Films } from '@/shared/types'
import { useEffect, useState } from 'react'
import useAddFilmsToDb from './useAddFilmsToDb'
import useGetUserFilms from './useGetUserFilms'

const useLikeDislikeFav = (film: Films | undefined) => {
    const { filmsFav, filmsLike, filmsDisLike } = useGetUserFilms()
    const [isFavorite, setIsFavorite] = useState<Films[] | undefined | string>(
        filmsFav
    )
    const [isLike, setIsLike] = useState<Films[] | undefined | string>(
        filmsLike
    )
    const [isDisLike, setIsDisLike] = useState<Films[] | undefined | string>(
        filmsLike
    )

    const {
        addToFav,
        addToLike,
        addToDisLike,
        deleteFromFav,
        deleteFromLike,
        deleteFromDislike,
    } = useAddFilmsToDb(film)

    useEffect(() => {
        if (film) {
            const fav =
                filmsFav &&
                filmsFav.filter(
                    (el: Films) => el.film.kinopoiskId === film.kinopoiskId
                )

            setIsFavorite(fav)
        }
    }, [filmsFav])

    useEffect(() => {
        if (film) {
            const like =
                filmsLike &&
                filmsLike.filter(
                    (el: Films) => el.film.kinopoiskId === film.kinopoiskId
                )

            setIsLike(like)
        }
    }, [filmsLike])

    useEffect(() => {
        if (film) {
            const dislike =
                filmsDisLike &&
                filmsDisLike.filter(
                    (el: Films) => el.film.kinopoiskId === film.kinopoiskId
                )

            setIsDisLike(dislike)
        }
    }, [filmsDisLike])

    const handleFav = () => {
        if (film) {
            if (isFavorite !== undefined) {
                if (isFavorite?.length > 0) {
                    setIsFavorite('')
                    deleteFromFav()
                } else {
                    setIsFavorite('content')
                    addToFav()
                }
            }
        }
    }

    const handleLike = () => {
        if (film) {
            if (isLike !== undefined) {
                if (isLike?.length > 0) {
                    setIsLike('')
                    deleteFromLike()
                } else {
                    setIsLike('content')
                    deleteFromDislike()
                    setIsDisLike('')
                    addToLike()
                }
            }
        }
    }

    const handleDisLike = () => {
        if (film) {
            if (isDisLike !== undefined) {
                if (isDisLike?.length > 0) {
                    setIsDisLike('')
                    deleteFromDislike()
                } else {
                    deleteFromLike()
                    setIsDisLike('content')
                    setIsLike('')
                    addToDisLike()
                }
            }
        }
    }

    return {
        handleFav,
        isFavorite,
        handleLike,
        isLike,
        handleDisLike,
        isDisLike,
    }
}

export default useLikeDislikeFav
