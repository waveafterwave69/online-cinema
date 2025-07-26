import styles from './Promo.module.css'
import useGetRandomFilms from '../hooks/useGetRandomFilms'

import PromoContent from '../PromoContent/PromoContent'
import { Link } from 'react-router'

const Promo: React.FC = () => {
    const { film } = useGetRandomFilms()
    console.log(film?.posterUrl)

    return (
        <>
            {film && (
                <section className={styles.promo}>
                    <div className={styles.promo__row}>
                        <Link to="/">
                            <img
                                src={film.posterUrl}
                                alt={film.nameOriginal}
                                className={styles.promo__bg}
                            />
                        </Link>
                        <PromoContent film={film} />
                    </div>
                </section>
            )}
        </>
    )
}

export default Promo
