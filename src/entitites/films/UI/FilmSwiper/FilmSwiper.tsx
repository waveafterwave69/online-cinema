import styles from './FilmSwiper.module.css'
import { Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
// @ts-ignore
import 'swiper/css'
import arrowImg from '../../../../img/more.svg'
import { useMediaQuery } from 'react-responsive'
import { themes } from '@/entitites/category/api/categoryApi'
import Tags from '@/entitites/category/UI/Category/Category'
import type { Films } from '@/shared/types'
import { Link } from 'react-router'
import SwiperItem from '@/entitites/swiper/UI/SwiperItem/SwiperItem'
import Spinner from '@/shared/UI/Spinner/Spinner'

interface FilmSwiperProps {
    films: Films[] | undefined
    title: string
    buttonMore?: boolean
    tags?: boolean
    isLoading?: boolean
    buttonFav?: boolean
    fromDataBase?: boolean
}

const FilmSwiper: React.FC<FilmSwiperProps> = ({
    films,
    title,
    buttonMore = false,
    buttonFav = true,
    tags = false,
    isLoading,
    fromDataBase = false,
}) => {
    const isSmallScreen = useMediaQuery({ maxWidth: 475 })
    const isMedium2 = useMediaQuery({ maxWidth: 768 })
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
                <div className={styles.film__row}>
                    <h2 className={styles.film__title}>{title}</h2>
                    {buttonMore && (
                        <Link to="/movies" className={styles.row__title}>
                            <p className={styles.row__text}>Больше</p>
                            <img
                                src={arrowImg}
                                alt="more"
                                className={styles.row__img}
                            />
                        </Link>
                    )}
                </div>
                {tags && (
                    <Tags
                        themes={themes}
                        isSmallScreen={isSmallScreen}
                        isMediumScreen={isMediumScreen}
                        isMedium2={isMedium2}
                    />
                )}
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
                            films.map((film: Films) => (
                                <SwiperSlide key={film.kinopoiskId}>
                                    <SwiperItem
                                        film={fromDataBase ? film.film : film}
                                        buttonFav={buttonFav}
                                    />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                ) : (
                    <Spinner />
                )}
            </motion.section>
        </>
    )
}

export default FilmSwiper
