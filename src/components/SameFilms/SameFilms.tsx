import type { Films } from '../../types'
import styles from './SameFilms.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
// @ts-ignore
import 'swiper/css'

import { useMediaQuery } from 'react-responsive'
import TrendsItem from '../TrendsItem/TrendsItem'

interface SameFilmsProps {
    sameFilms: Films[] | undefined
}

const SameFilms: React.FC<SameFilmsProps> = ({ sameFilms }) => {
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
                className={styles.same}
            >
                <div className="container">
                    <h2 className={styles.same__title}>Похожие фильмы</h2>
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
                        {sameFilms &&
                            sameFilms.map((film: Films) => (
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

export default SameFilms
