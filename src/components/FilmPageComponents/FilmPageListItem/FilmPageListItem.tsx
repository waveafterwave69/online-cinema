import React from 'react'
import styles from './FilmPageListItem.module.css'
import { motion } from 'framer-motion'
import type { Films } from '../../../types'

interface TrendsItemProps {
    film: Films
}

const FilmPageListItem: React.FC<TrendsItemProps> = ({ film }) => {
    return (
        <>
            <a
                href={
                    film.kinopoiskId
                        ? `/movie/${film.kinopoiskId}`
                        : `/movie/${film.filmId}`
                }
            >
                <motion.li className={styles.item}>
                    <button className={styles.item__button}>+</button>
                    <img
                        src={film.posterUrlPreview}
                        alt={film.nameOriginal}
                        className={styles.item__image}
                    />
                </motion.li>
            </a>
        </>
    )
}

export default FilmPageListItem
