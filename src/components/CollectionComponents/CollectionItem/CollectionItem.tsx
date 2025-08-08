import { Link } from 'react-router'
import type { Theme } from '../../../types'
import styles from './CollectionItem.module.css'
import { useDispatch } from 'react-redux'
import { setTheme } from '../../../store/slices/categorySlice/categorySlice'

interface CollectionItemProps {
    collection: Theme
}

const CollectionItem: React.FC<CollectionItemProps> = ({ collection }) => {
    const dispatch = useDispatch()

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
