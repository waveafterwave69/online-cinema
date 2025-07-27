import type { Films } from '../../types'
import styles from './PromoContent.module.css'
import { motion } from 'motion/react'

import imdbImg from '../../img/imdb.svg'
import kinopoiskImg from '../../img/kinopoiskImg.jpg'

interface PromoContentProps {
    film: Films
}

const PromoContent: React.FC<PromoContentProps> = ({ film }) => {
    const imdbHref = film.imdbId
        ? `https://www.imdb.com/title/${film.imdbId}`
        : undefined

    const kinopoiskHref = film.kinopoiskId
        ? `https://www.kinopoisk.ru/film/${film.kinopoiskId}`
        : undefined

    return (
        <>
            <div className={styles.row__content}>
                <h2 className={styles.content__title}>{film.nameRu}</h2>
                <p className={styles.content__description}>
                    {film.description}
                </p>
                <p className={styles.content__dop}>{film.shortDescription}</p>
                <div className={styles.film__rating}>
                    {film.ratingImdb && (
                        <a
                            href={imdbHref}
                            target="_blank"
                            className={styles.imdb}
                        >
                            <motion.img
                                whileHover={{
                                    scale: 1.1,
                                }}
                                src={imdbImg}
                                alt="imdbImg"
                                className={styles.imdb__img}
                            />
                            <p className={styles.imdb__text}>
                                {film.ratingImdb}
                            </p>
                        </a>
                    )}
                    {film.ratingKinopoisk && (
                        <a
                            href={kinopoiskHref}
                            target="_blank"
                            className={styles.ratingKinopoisk}
                        >
                            <motion.img
                                whileHover={{
                                    scale: 1.11,
                                }}
                                src={kinopoiskImg}
                                alt="imdbImg"
                                className={styles.ratingKinopoisk__img}
                            />
                            <p className={styles.ratingKinopoisk__text}>
                                {film.ratingKinopoisk}
                            </p>
                        </a>
                    )}
                </div>
                <a
                    href={`/movie/${film.kinopoiskId}`}
                    className={styles.watch__button}
                >
                    Смотреть
                </a>
            </div>
        </>
    )
}

export default PromoContent
