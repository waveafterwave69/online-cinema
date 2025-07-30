import styles from './Category.module.css'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import { A11y } from 'swiper/modules'

// @ts-ignore
import 'swiper/css'

import TrendsItem from '../TrendsItem/TrendsItem'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router'

import arrowImg from '../../img/more.svg'
import useGetCategory from '../hooks/useGetCategory'
import { themes } from '../../data/data'
import type { Theme } from '../../types'
import CategoryItem from '../CategoryItem/CategoryItem'

import download from '../../img/download.svg'

const Category: React.FC = () => {
    const { films, isLoading } = useGetCategory()

    const isSmallScreen = useMediaQuery({ maxWidth: 475 })
    const isMedium2 = useMediaQuery({ maxWidth: 768 })
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
                    <h2 className={styles.trends__title}>Категории</h2>
                    <Link to="/movies" className={styles.row__title}>
                        <p className={styles.row__text}>Больше</p>
                        <img
                            src={arrowImg}
                            alt="more"
                            className={styles.row__img}
                        />
                    </Link>
                </div>

                <div className={styles.tags}>
                    <Swiper
                        modules={[A11y]}
                        spaceBetween={25}
                        slidesPerView={
                            isMedium2
                                ? 3
                                : isSmallScreen
                                ? 3
                                : isMediumScreen
                                ? 4
                                : 6
                        }
                    >
                        {themes &&
                            themes.map((el: Theme) => (
                                <SwiperSlide key={el.theme}>
                                    <CategoryItem category={el} />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>

                {!isLoading ? (
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
                            films.map((film) => (
                                <SwiperSlide key={film.nameOriginal}>
                                    <TrendsItem film={film} />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                ) : (
                    <img src={download} className={styles.download} />
                )}
            </motion.section>
        </>
    )
}

export default Category
