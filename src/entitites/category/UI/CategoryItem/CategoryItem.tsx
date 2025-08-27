import React, { useCallback } from 'react'
import styles from './CategoryItem.module.css'
import { setTheme } from '../../model/categorySlice'
import { motion } from 'framer-motion'
import type { Theme } from '../../model/types'
import { useAppSelector, useAppDispatch } from '@/app/appStore'

interface CategoryItemProps {
    category: Theme
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
    const { theme } = useAppSelector((state) => state.category)
    const dispatch = useAppDispatch()
    const isActive = theme === category.theme

    const handleClick = useCallback(() => {
        dispatch(setTheme(isActive ? undefined : category.theme))
    }, [category.theme, dispatch, isActive])

    return (
        <>
            <li className={styles.category__item}>
                <motion.button
                    whileHover={{
                        backgroundColor: !isActive ? '#020713' : '#EC5BAA',
                    }}
                    transition={{
                        duration: 0.4,
                    }}
                    className={styles.category__button}
                    onClick={handleClick}
                    style={{
                        backgroundColor: isActive ? '#EC5BAA' : 'transparent',
                    }}
                >
                    <p className={styles.category__text}>{category.name}</p>
                </motion.button>
            </li>
        </>
    )
}

export default CategoryItem
