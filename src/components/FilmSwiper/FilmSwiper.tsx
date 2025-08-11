import styles from './FilmSwiper.module.css'
import { Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
// @ts-ignore
import 'swiper/css'

import { useMediaQuery } from 'react-responsive'
import TrendsItem from '../TrendsItem/TrendsItem'
import type { Films } from '../../types'

interface FilmSwiperProps {
    films: Films[] | undefined
    title: string
}

const FilmSwiper: React.FC<FilmSwiperProps> = ({ films, title }) => {
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
                className={styles.film}
            >
                <div className="container">
                    <h2 className={styles.film__title}>{title}</h2>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={10}
                        slidesPerView={
                            isSmallScreen ? 3 : isMediumScreen ? 4 : 6
                        }
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop
                    >
                        {films &&
                            films.map((film: Films) => (
                                <SwiperSlide key={film.nameOriginal}>
                                    <TrendsItem film={film} />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </motion.section>
        </>
    )
}

export default FilmSwiper
