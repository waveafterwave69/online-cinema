import React, { useCallback } from 'react'
import type { Theme } from '../../../types'
import styles from './CategoryItem.module.css'
import { setTheme } from '../../../store/slices/categorySlice/categorySlice'
import { motion } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'

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
                    className={styles.category__button}
                    onClick={handleClick}
                    style={{
                        backgroundColor: isActive
                            ? '#EC5BAA'
                            : 'rgba(2, 7, 19, 0)',
                    }}
                    transition={{ duration: 0.1 }}
                    whileHover={{
                        backgroundColor: !isActive ? '#020713' : '#EC5BAA',
                    }}
                >
                    <p className={styles.category__text}>{category.name}</p>
                </motion.button>
            </li>
        </>
    )
}

export default CategoryItem
