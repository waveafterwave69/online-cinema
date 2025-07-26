import styles from './Promo.module.css'
import useGetRandomFilms from '../hooks/useGetRandomFilms'
import { Link } from 'react-router'
import PromoContent from '../PromoContent/PromoContent'
import { motion } from 'motion/react'

import download from '../../img/download.svg'

const Promo: React.FC = () => {
    const { film } = useGetRandomFilms()

    return (
        <>
            {film ? (
                <section className={styles.promo}>
                    <motion.div
                        initial={{ left: -200 }}
                        animate={{ left: 0 }}
                        transition={{
                            duration: 0.5,
                        }}
                        className={styles.promo__row}
                    >
                        <Link to="/">
                            <img
                                src={film.posterUrl}
                                alt={film.nameOriginal}
                                className={styles.promo__bg}
                            />
                        </Link>
                        <PromoContent film={film} />
                    </motion.div>
                </section>
            ) : (
                <img src={download} className={styles.download} />
            )}
        </>
    )
}

export default Promo
