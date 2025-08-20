import type { Films } from '../../../types'
import FilmSwiper from '../../FilmSwiper/FilmSwiper'
import styles from './ProfileContentItem.module.css'

interface ProfileContentItemProps {
    films: Films[]
    title: string
    buttonFav?: boolean
}

const ProfileContentItem: React.FC<ProfileContentItemProps> = ({
    films,
    title,
    buttonFav = true,
}) => {
    return (
        <>
            <div className={styles.fav}>
                <ul className={styles.fav__list}>
                    {films?.length > 0 && (
                        <FilmSwiper
                            buttonFav={buttonFav}
                            films={films}
                            title={title}
                            fromDataBase={true}
                        />
                    )}
                </ul>
            </div>
        </>
    )
}

export default ProfileContentItem
