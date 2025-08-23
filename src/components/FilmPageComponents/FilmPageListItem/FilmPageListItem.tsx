import React from 'react'
import styles from './FilmPageListItem.module.css'
import { motion } from 'framer-motion'
import type { Films } from '../../../types'
import useAddFilmsToDb from '../../../hooks/useAddFilmsToDb'
import useIsFavoriteFilm from '../../../hooks/useIsFavoriteFilm'
import { useAppSelector } from '../../../hooks/hooks'

interface TrendsItemProps {
    film: Films
}

const FilmPageListItem: React.FC<TrendsItemProps> = ({ film }) => {
    const { login } = useAppSelector((state) => state)
    const { isFavorite, setIsFavorite } = useIsFavoriteFilm(film)
    const { addToFav, deleteFromFav } = useAddFilmsToDb(film)

    return (
        <>
            <motion.li className={styles.item}>
                <motion.button
                    whileHover={{
                        backgroundColor: '#EC5BAA',
                    }}
                    style={{
                        backgroundColor:
                            isFavorite &&
                            isFavorite?.length > 0 &&
                            login?.userProfile?.email
                                ? '#EC5BAA'
                                : 'transparent',
                    }}
                    transition={{ duration: 0.1 }}
                    className={styles.item__button}
                    onClick={(
                        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                    ) => {
                        e.stopPropagation()
                        if (isFavorite && isFavorite?.length > 0) {
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
