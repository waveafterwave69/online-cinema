import styles from './FilmSwiper.module.css'
import { Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
// @ts-ignore
import 'swiper/css'
import download from '../../img/download.svg'
import arrowImg from '../../img/more.svg'
import { useMediaQuery } from 'react-responsive'
import TrendsItem from '../TrendsItem/SwiperItem'
import type { Films } from '../../types'
import { Link } from 'react-router'
import Tags from '../Tags/Tags'
import { themes } from '../../api/categoryData'

interface FilmSwiperProps {
    films: Films[] | undefined
    title: string
    buttonMore?: boolean
    tags?: boolean
    isLoading?: boolean
    buttonFav?: boolean
}

const FilmSwiper: React.FC<FilmSwiperProps> = ({
    films,
    title,
    buttonMore = false,
    buttonFav = true,
    tags = false,
    isLoading,
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
                                    <TrendsItem
                                        film={film}
                                        buttonFav={buttonFav}
                                    />
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

export default FilmSwiper
