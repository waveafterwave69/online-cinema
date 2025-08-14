import type { Films } from '../../types'
import styles from './SameFilms.module.css'
import { motion } from 'framer-motion'
import FilmSwiper from '../FilmSwiper/FilmSwiper'

interface SameFilmsProps {
    sameFilms: Films[] | undefined
}

const SameFilms: React.FC<SameFilmsProps> = ({ sameFilms }) => {
    return (
        <>
            <motion.section
                initial={{ right: -100, opacity: 0 }}
                animate={{ right: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                }}
                className={styles.same}
            >
                <div className="container">
                    <FilmSwiper title="Похожие фильмы" films={sameFilms} />
                </div>
            </motion.section>
        </>
    )
}

export default SameFilms
