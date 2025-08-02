import { Link } from 'react-router'
import type { Films } from '../../types'
import styles from './FilmCategory.module.css'
import { motion } from 'motion/react'

interface FilmCategoryProps {
    film: Films | undefined
}

const FilmCategory: React.FC<FilmCategoryProps> = ({ film }) => {
    return (
        <>
            <section className={styles.category}>
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
            </section>
        </>
    )
}

export default FilmCategory
