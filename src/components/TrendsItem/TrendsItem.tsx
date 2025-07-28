import type { Films } from '../../types'
import styles from './TrendsItem.module.css'
import { motion } from 'motion/react'

interface TrendsItemProps {
    film: Films
}

const TrendsItem: React.FC<TrendsItemProps> = ({ film }) => {
    return (
        <>
            <a href={`/movie/${film.kinopoiskId}`}>
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
