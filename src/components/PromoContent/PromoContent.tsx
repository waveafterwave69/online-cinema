import type { Films } from '../../types'
import styles from './PromoContent.module.css'

import imdbImg from '../../img/imdb.svg'
import kinopoiskImg from '../../img/kinopoiskImg.jpg'

interface PromoContentProps {
    film: Films
}

const PromoContent: React.FC<PromoContentProps> = ({ film }) => {
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
                        <div className={styles.imdb}>
                            <img
                                src={imdbImg}
                                alt="imdbImg"
                                className={styles.imdb__img}
                            />
                            <p className={styles.imdb__text}>
                                {film.ratingImdb}
                            </p>
                        </div>
                    )}
                    {film.ratingKinopoisk && (
                        <div className={styles.ratingKinopoisk}>
                            <img
                                src={kinopoiskImg}
                                alt="imdbImg"
                                className={styles.ratingKinopoisk__img}
                            />
                            <p className={styles.ratingKinopoisk__text}>
                                {film.ratingKinopoisk}
                            </p>
                        </div>
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
