import { Link } from 'react-router'
import styles from './MovieCategory.module.css'
import { motion } from 'motion/react'
import type { Films } from '@/shared/types'

interface MovieCategoryProps {
    film: Films | undefined
}

const MovieCategory: React.FC<MovieCategoryProps> = ({ film }) => {
    return (
        <>
            <section className={styles.category}>
                <div className="container">
                    <h2 className={styles.category__title}>Категории:</h2>
                    <ul className={styles.category__list}>
                        {film &&
                            film?.genres.map(({ genre }) => (
                                <motion.li
                                    whileHover={{ scale: 1.1 }}
                                    key={genre}
                                    className={styles.category__item}
                                >
                                    <Link
                                        to={''}
                                        className={styles.category__button}
                                    >
                                        {genre}
                                    </Link>
                                </motion.li>
                            ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default MovieCategory
