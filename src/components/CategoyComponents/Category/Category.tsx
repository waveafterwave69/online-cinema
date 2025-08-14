import styles from './Category.module.css'
import React from 'react'
import { motion } from 'framer-motion'
import useGetCategory from '../../../hooks/useGetCategory'
import download from '../../../img/download.svg'
import FilmSwiper from '../../FilmSwiper/FilmSwiper'

const Category: React.FC = () => {
    const { films, isLoading } = useGetCategory()

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
                {!isLoading ? (
                    <FilmSwiper
                        title="Категории"
                        films={films}
                        buttonMore={true}
                        tags={true}
                    />
                ) : (
                    <img src={download} className={styles.download} />
                )}
            </motion.section>
        </>
    )
}

export default Category
