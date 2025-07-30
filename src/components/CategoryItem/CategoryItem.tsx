import React, { useCallback } from 'react'
import type { Theme } from '../../types'
import styles from './CategoryItem.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../../store/slices/categorySlice/categorySlice'

interface CategoryItemProps {
    category: Theme
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
    const { theme } = useSelector((state: any) => state.category)
    const dispatch = useDispatch()
    const isActive = theme === category.theme

    const handleClick = useCallback(() => {
        console.log('LOCAL: ', category.theme)
        console.log('GLOBAL: ', theme)
        dispatch(setTheme(isActive ? undefined : category.theme))
    }, [category.theme, dispatch, isActive])

    return (
        <>
            <li className={styles.category__item}>
                <button
                    className={styles.category__button}
                    onClick={handleClick}
                    style={{
                        backgroundColor: isActive ? '#EC5BAA' : 'transparent',
                    }}
                >
                    <p className={styles.category__text}>{category.name}</p>
                </button>
            </li>
        </>
    )
}

export default CategoryItem
