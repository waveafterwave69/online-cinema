import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Trends.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
// @ts-ignore
import 'swiper/css'

import type { Films } from '../../types'
import type { RootState } from '../../store/store'
import TrendsItem from '../TrendsItem/TrendsItem'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router'

import arrowImg from '../../img/more.svg'

const Trends: React.FC = () => {
    const data = useSelector((state: RootState) => state.data.data) as Films[]
    const isSmallScreen = useMediaQuery({ maxWidth: 475 })
    const isMediumScreen = useMediaQuery({ maxWidth: 1024 })

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
                <div className={styles.trends__row}>
                    <h2 className={styles.trends__title}>Лучшие фильмы</h2>
                    <Link to="/movies" className={styles.row__title}>
                        <p className={styles.row__text}>Больше</p>
                        <img
                            src={arrowImg}
                            alt="more"
                            className={styles.row__img}
                        />
                    </Link>
                </div>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={10}
                    slidesPerView={isSmallScreen ? 3 : isMediumScreen ? 4 : 6}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop
                >
                    {data.map((film) => (
                        <SwiperSlide key={film.nameOriginal}>
                            <TrendsItem film={film} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.section>
        </>
    )
}

export default Trends
