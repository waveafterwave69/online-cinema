import { Link } from 'react-router'
import styles from './ActorFilmItem.module.css'
import star from '../../../../img/star.svg'
import more from '../../../../img/more.svg'
import { motion } from 'motion/react'
import type { Films } from '@/shared/types'

interface ActorFilmItemProps {
    film: Films
}

const ActorFilmItem: React.FC<ActorFilmItemProps> = ({ film }) => {
    return (
        <>
            <motion.li className={styles.item} whileHover={{ scale: 1.018 }}>
                <div className={styles.item__column}>
                    <Link to={`/movie/${film.filmId}`}>
                        <h3 className={styles.item__name}>
                            Фильм: {film.nameRu ? film.nameRu : film.nameEn}
                        </h3>
                    </Link>
                    <div className={styles.item__list}>
                        <p className={styles.list__text}>
                            Рейтинг: {film.rating}
                        </p>
                        <img
                            className={styles.list__img}
                            src={star}
                            alt="rating"
                        />
                    </div>
                </div>
                <Link to={`/movie/${film.filmId}`}>
                    <img src={more} alt="more" className={styles.item__more} />
                </Link>
            </motion.li>
        </>
    )
}

export default ActorFilmItem
