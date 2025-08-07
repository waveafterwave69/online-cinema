import { Link } from 'react-router'
import type { Theme } from '../../../types'
import styles from './CollectionItem.module.css'

interface CollectionItemProps {
    collection: Theme
}

const CollectionItem: React.FC<CollectionItemProps> = ({ collection }) => {
    return (
        <>
            <li className={styles.item}>
                <Link to={''}>
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
