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

const Trends: React.FC = () => {
    const data = useSelector((state: RootState) => state.data.data) as Films[]
    const loading = useSelector((state: RootState) => state.data.loading)
    const isSmallScreen = useMediaQuery({ maxWidth: 475 })
    const isMediumScreen = useMediaQuery({ maxWidth: 1024 })

    console.log(data)

    if (loading) {
        return <p>Loading...</p>
    }

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
                <h2 className={styles.trends__title}>Лучшие фильмы</h2>

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
