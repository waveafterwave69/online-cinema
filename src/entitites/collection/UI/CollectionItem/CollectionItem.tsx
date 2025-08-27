import { Link } from 'react-router'
import styles from './CollectionItem.module.css'
import { setTheme } from '../../../category/model/categorySlice'
import type { Theme } from '../../model/types'
import { useAppDispatch } from '@/app/appStore'

interface CollectionItemProps {
    collection: Theme
}

const CollectionItem: React.FC<CollectionItemProps> = ({ collection }) => {
    const dispatch = useAppDispatch()

    const handleTheme = () => {
        dispatch(setTheme(collection.theme))
    }

    return (
        <>
            <li className={styles.item}>
                <Link to="/movies" onClick={handleTheme}>
                    <img
                        src={collection.img}
                        alt=""
                        className={styles.item__img}
                    />
                    <p className={styles.item__text}>{collection.name}</p>
                </Link>
            </li>
        </>
    )
}

export default CollectionItem
