import React from 'react'
import type { Films } from '../../types'
import styles from './SwiperItem.module.css'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFav } from '../../store/slices/profileSlice/profileSlice'

interface SwiperItemProps {
    film: Films
}

const SwiperItem: React.FC<SwiperItemProps> = ({ film }) => {
    const dispatch = useDispatch()
    const { profile } = useSelector((state: any) => state)

    const addToFav = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        dispatch(toggleFav(film))
    }

    const isFavorite = profile.fav.filter(
        (el: Films) => el.kinopoiskId === film.kinopoiskId
    )

    return (
        <>
            <motion.li className={styles.item}>
                <motion.button
                    whileHover={{
                        backgroundColor: '#EC5BAA',
                    }}
                    style={{
                        backgroundColor:
                            isFavorite.length > 0 ? '#EC5BAA' : 'transparent',
                    }}
                    transition={{ duration: 0.1 }}
                    className={styles.item__button}
                    onClick={addToFav}
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

export default SwiperItem
