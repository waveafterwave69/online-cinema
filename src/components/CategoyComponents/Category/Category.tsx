import styles from './Category.module.css'
import React from 'react'
import { motion } from 'framer-motion'
import useGetCategory from '../../../hooks/useGetCategory'
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
                <FilmSwiper
                    isLoading={isLoading}
                    title="Категории"
                    films={films}
                    buttonMore={true}
                    tags={true}
                />
            </motion.section>
        </>
    )
}

export default Category
