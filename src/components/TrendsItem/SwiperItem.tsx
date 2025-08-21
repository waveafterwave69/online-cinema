import React from 'react'
import type { Films } from '../../types'
import styles from './SwiperItem.module.css'
import { motion } from 'framer-motion'
import useAddFilmsToDb from '../../hooks/useAddFilmsToDb'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import useIsFavoriteFilm from '../../hooks/useIsFavoriteFilm'

interface SwiperItemProps {
    film: Films
    buttonFav: boolean
}

const SwiperItem: React.FC<SwiperItemProps> = ({ film, buttonFav }) => {
    const { login } = useSelector((state: RootState) => state)
    const { isFavorite, setIsFavorite } = useIsFavoriteFilm(film)
    const { addToFav, deleteFromFav } = useAddFilmsToDb(film)

    return (
        <>
            <motion.li className={styles.item}>
                {buttonFav && (
                    <motion.button
                        whileHover={{
                            backgroundColor: '#EC5BAA',
                        }}
                        style={{
                            backgroundColor:
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
                )}
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

export default SwiperItem
