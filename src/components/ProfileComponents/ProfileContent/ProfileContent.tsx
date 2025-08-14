import type { Films } from '../../../types'
import ProfileContentItem from '../ProfileContentItem/ProfileContentItem'
import styles from './ProfileContent.module.css'

interface Profile {
    fav: Films[]
    like: Films[]
    dislike: Films[]
}

interface ProfileContentProps {
    profile: Profile
}

const ProfileContent: React.FC<ProfileContentProps> = ({ profile }) => {
    return (
        <>
            <section className={styles.profile}>
                <div className="container">
                    <div className={styles.profile__content}>
                        <h2 className={styles.profile__title}>
                            Профиль зрителя
                        </h2>
                    </div>
                </div>
                <div className={styles.content__list}>
                    <div className="container">
                        <ProfileContentItem
                            films={profile?.fav}
                            title={'Избранные'}
                        />
                        <ProfileContentItem
                            films={profile?.like}
                            title={'Понравившиеся '}
                        />
                        <ProfileContentItem
                            films={profile?.dislike}
                            title={'Непонравившиеся '}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProfileContent
