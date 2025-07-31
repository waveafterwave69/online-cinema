import React, { useCallback } from 'react'
import type { Theme } from '../../types'
import styles from './CategoryItem.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../../store/slices/categorySlice/categorySlice'
import { motion } from 'framer-motion'

interface CategoryItemProps {
    category: Theme
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
    const { theme } = useSelector((state: any) => state.category)
    const dispatch = useDispatch()
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
