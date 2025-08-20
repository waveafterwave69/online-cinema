import React, { useEffect, useState } from 'react'
import styles from './FilmPageListItem.module.css'
import { motion } from 'framer-motion'
import type { Films } from '../../../types'
import useGetUserFilms from '../../../hooks/useGetUserFilms'
import useAddFilmsToDb from '../../../hooks/useAddFilmsToDb'
import { useSelector } from 'react-redux'

interface TrendsItemProps {
    film: Films
}

const FilmPageListItem: React.FC<TrendsItemProps> = ({ film }) => {
    const { filmsFav } = useGetUserFilms()
    const [isFavorite, setIsFavorite] = useState<any>()
    const { login }: any = useSelector((state: any) => state)

    const { addToFav, deleteFromFav } = useAddFilmsToDb(film)

    console.log(film)

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

    return (
        <>
            <motion.li className={styles.item}>
                <motion.button
                    whileHover={{
                        backgroundColor: '#EC5BAA',
                    }}
                    style={{
                        backgroundColor:
                            isFavorite?.length > 0 && login?.userProfile?.email
                                ? '#EC5BAA'
                                : 'transparent',
                    }}
                    transition={{ duration: 0.1 }}
                    className={styles.item__button}
                    onClick={(
                        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                    ) => {
                        e.stopPropagation()
                        if (isFavorite?.length > 0) {
                            setIsFavorite('')
                            deleteFromFav()
                        } else {
                            setIsFavorite(['content'])
                            addToFav()
                        }
                    }}
                >
                    +
                </motion.button>
                <a
                    href={
                        film.kinopoiskId
                            ? `/movie/${film.kinopoiskId}`
                            : `/movie/${film.filmId}`
                    }
                >
                    <img
                        src={film.posterUrlPreview}
                        alt={film.nameOriginal}
                        className={styles.item__image}
                    />
                </a>
            </motion.li>
        </>
    )
}

export default FilmPageListItem
