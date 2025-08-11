import type { Films } from '../../../types'
import FilmSwiper from '../../FilmSwiper/FilmSwiper'
import styles from './ProfileContentItem.module.css'

interface ProfileContentItemProps {
    films: Films[]
    title: string
}

const ProfileContentItem: React.FC<ProfileContentItemProps> = ({
    films,
    title,
}) => {
    return (
        <>
            <div className={styles.fav}>
                <ul className={styles.fav__list}>
                    {films?.length > 0 && (
                        <FilmSwiper films={films} title={title} />
                    )}
                </ul>
            </div>
        </>
    )
}

export default ProfileContentItem
