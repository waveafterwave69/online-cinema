import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Trends.module.css'
import { motion } from 'framer-motion'
// @ts-ignore
import 'swiper/css'
import type { Films } from '../../types'
import type { RootState } from '../../store/store'
import FilmSwiper from '../FilmSwiper/FilmSwiper'

const Trends: React.FC = () => {
    const data = useSelector((state: RootState) => state.data.data) as Films[]

    return (
        <>
            <motion.section
                initial={{ right: -100, opacity: 0 }}
                animate={{ right: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                }}
                className={styles.trends}
            >
                <FilmSwiper
                    title="Лучшие фильмы"
                    films={data}
                    buttonMore={true}
                />
            </motion.section>
        </>
    )
}

export default Trends
