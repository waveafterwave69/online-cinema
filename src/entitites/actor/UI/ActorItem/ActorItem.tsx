import { Link } from 'react-router'
import styles from './ActorItem.module.css'
import type { Actor } from '../../model/types'

interface ActorItemProps {
    actor: Actor
}

const ActorItem: React.FC<ActorItemProps> = ({ actor }) => {
    return (
        <>
            <li className={styles.actor}>
                <Link to={`/actor/${actor.staffId}`}>
                    <img
                        src={actor.posterUrl}
                        className={styles.actor__img}
                        alt={actor.nameRu}
                    />
                </Link>
                <p className={styles.actor__name}>{actor.nameRu}</p>
            </li>
        </>
    )
}

export default ActorItem
