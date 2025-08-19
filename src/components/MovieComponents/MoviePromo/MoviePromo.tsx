import styles from './MoviePromo.module.css'
import { validatefilmLength } from '../../../utils/utils'
import { motion } from 'motion/react'

import star from '../../../img/star.svg'
import play from '../../../img/play.svg'
import fav from '../../../img/addFav.svg'
import like from '../../../img/like.svg'
import dislike from '../../../img/dislike.svg'

import type { Films, ScreenShots } from '../../../types'
import MovieScreenShots from '../MovieScreenShots/MovieScreenShots'
import { useDispatch, useSelector } from 'react-redux'

import {
    switchForm,
    // toggleDislike,
    // toggleFav,
    // toggleLike,
} from '../../../store/slices/loginSlice/loginSlice'

interface MoviePromoProps {
    film: Films | undefined
    filmBg: ScreenShots[]
    currFilm: string
    setCurrFilm: (arg: string) => void
    favColor: boolean
    likeColor: boolean
    dislikeColor: boolean
}

const MoviePromo: React.FC<MoviePromoProps> = ({
    film,
    filmBg,
    currFilm,
    setCurrFilm,
    favColor,
    likeColor,
    dislikeColor,
}) => {
    const dispatch = useDispatch()
    const { login }: any = useSelector((state) => state)

    const handleFav = () => {
        if (film) {
            if (login.userProfile) {
                // dispatch(toggleFav(film))
            } else {
                dispatch(switchForm())
            }
        }
    }

    const handleLike = () => {
        if (film) {
            if (login.userProfile) {
                // dispatch(toggleLike(film))

                if (dislikeColor) {
                    // dispatch(toggleDislike(film))
                }
            } else {
                dispatch(switchForm())
            }
        }
    }

    const handleDisLike = () => {
        if (film) {
            if (login.userProfile) {
                // dispatch(toggleDislike(film))

                if (likeColor) {
                    // dispatch(toggleLike(film))
                }
            } else {
                dispatch(switchForm())
            }
        }
    }

    return (
        <>
            <motion.section
                className={styles.promo}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.6,
                }}
            >
                <img
                    src={currFilm}
                    alt={film?.nameOriginal}
                    className={styles.promo__image}
                />
                <div className="container">
                    <div className={styles.promo__content}>
                        <h2 className={styles.promo__title}>{film?.nameRu}</h2>
                        <p className={styles.promo__info}>
                            {validatefilmLength(film?.filmLength)} -{' '}
                            {film?.countries && film.countries.length > 0 && (
                                <span>
                                    {film.countries
                                        .map((el) => el.country)
                                        .join(', ')}
                                </span>
                            )}
                            {film?.ratingFilmCritics && (
                                <span className={styles.promo__rating}>
                                    <img
                                        src={star}
                                        alt="rating"
                                        className={styles.rating__img}
                                    />
                                    <span className={styles.rating__text}>
                                        {film?.ratingFilmCritics}
                                    </span>
                                </span>
                            )}
                        </p>
                        <p className={styles.add__info}>
                            жанры:{' '}
                            {film?.genres && film.genres.length > 0 ? (
                                <span>
                                    {film.genres
                                        .map((el) => el.genre)
                                        .join(', ')}
                                </span>
                            ) : (
                                <span>Нет доступных жанров</span>
                            )}
                        </p>
                        <motion.div
                            whileHover={{
                                scale: 1.03,
                            }}
                            className={styles.play__button__1}
                        >
                            <motion.button
                                className={styles.play__button}
                                whileHover={{
                                    backgroundColor: '#fff',
                                    color: '#228EE5',
                                }}
                                transition={{ duration: 0 }}
                            >
                                <img
                                    src={play}
                                    alt="play"
                                    className={styles.play__img}
                                />
                                <p>Смотреть</p>
                            </motion.button>
                        </motion.div>
                        <div className={styles.buttons__row}>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className={styles.button}
                            >
                                <button
                                    onClick={handleFav}
                                    style={{
                                        filter: favColor
                                            ? 'invert(0%) sepia(233%) saturate(665%) hue-rotate(590deg) brightness(96%) contrast(94%)'
                                            : 'none',
                                    }}
                                >
                                    <img src={fav} alt="fav" />
                                </button>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className={styles.button}
                            >
                                <button onClick={handleLike}>
                                    <img
                                        src={like}
                                        alt="like"
                                        className={styles.button__img}
                                        style={{
                                            filter: likeColor
                                                ? 'invert(0%) sepia(233%) saturate(665%) hue-rotate(90deg) brightness(96%) contrast(94%)'
                                                : 'none',
                                        }}
                                    />
                                </button>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className={styles.button}
                            >
                                <button onClick={handleDisLike}>
                                    <img
                                        src={dislike}
                                        alt="dislike"
                                        className={styles.button__img}
                                        style={{
                                            filter: dislikeColor
                                                ? 'invert(0%) sepia(233%) saturate(665%) hue-rotate(310deg) brightness(96%) contrast(94%)'
                                                : 'none',
                                        }}
                                    />
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <MovieScreenShots films={filmBg} setCurrFilm={setCurrFilm} />
            </motion.section>
        </>
    )
}

export default MoviePromo
