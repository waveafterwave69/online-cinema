import React from 'react'
import type { Films } from '../../types'
import styles from './TrendsItem.module.css'
import { motion } from 'framer-motion'

interface TrendsItemProps {
    film: Films
}

const TrendsItem: React.FC<TrendsItemProps> = ({ film }) => {
    return (
        <>
            <a href={`/movie/${film.filmId}`}>
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

export default TrendsItem
