import styles from './NewFilms.module.css'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
// @ts-ignore
import 'swiper/css'

import TrendsItem from '../TrendsItem/TrendsItem'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router'

import arrowImg from '../../img/more.svg'
import useGetNewFilms from '../../hooks/useGetNewFilms'

const NewFilms: React.FC = () => {
    const { films } = useGetNewFilms()

    const isSmallScreen = useMediaQuery({ maxWidth: 475 })
    const isMediumScreen = useMediaQuery({ maxWidth: 1024 })

    return (
        <>
            <motion.section
                initial={{ left: -100, opacity: 0 }}
                animate={{ left: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                }}
                className={styles.trends}
            >
                <div className={styles.trends__row}>
                    <h2 className={styles.trends__title}>Новинки</h2>
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
                    {films &&
                        films.map((film) => (
                            <SwiperSlide key={film.filmId}>
                                <TrendsItem film={film} />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </motion.section>
        </>
    )
}

export default NewFilms
