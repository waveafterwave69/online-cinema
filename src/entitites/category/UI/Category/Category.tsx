import styles from './Category.module.css'
import { A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// @ts-ignore
import 'swiper/css'
import CategoryItem from '../CategoryItem/CategoryItem'
import type { Theme } from '../../model/types'

interface CategoryProps {
    themes: Theme[]
    isSmallScreen: boolean
    isMediumScreen: boolean
    isMedium2: boolean
}

const Category: React.FC<CategoryProps> = ({
    themes,
    isSmallScreen,
    isMediumScreen,
    isMedium2,
}) => {
    return (
        <>
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
        </>
    )
}

export default Category
