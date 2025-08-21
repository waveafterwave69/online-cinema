import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { Films } from '../../../types'
import ProfileContentItem from '../ProfileContentItem/ProfileContentItem'
import styles from './ProfileContent.module.css'
import { setUserInfo } from '../../../store/slices/loginSlice/loginSlice'
import { Link } from 'react-router-dom'
import useGetUserFilms from '../../../hooks/useGetUserFilms'
import type { RootState } from '../../../store/store'

interface Profile {
    fav: Films[]
    like: Films[]
    dislike: Films[]
}

interface ProfileContentProps {
    profile: Profile
}

const ProfileContent: React.FC<ProfileContentProps> = () => {
    const { login } = useSelector((state: RootState) => state)
    const { filmsFav, filmsLike, filmsDisLike, movieFav } = useGetUserFilms()

    const dispatch = useDispatch()

    const unLogIn = () => {
        dispatch(setUserInfo(undefined))
    }

    return (
        <>
            <section className={styles.profile}>
                <div className="container">
                    <div className={styles.profile__content}>
                        <h2 className={styles.profile__title}>
                            Аккаунт: {login?.userProfile?.email}
                        </h2>
                        <Link
                            to={'/'}
                            className={styles.profile__leave}
                            onClick={unLogIn}
                        >
                            выйти из аккаунта
                        </Link>
                    </div>
                </div>
                <div className={styles.content__list}>
                    <div className="container">
                        {movieFav.length > 0 && (
                            <>
                                <ProfileContentItem
                                    films={filmsFav}
                                    title={'Избранные'}
                                />
                                <ProfileContentItem
                                    buttonFav={false}
                                    films={filmsLike}
                                    title={'Понравившиеся'}
                                />
                                <ProfileContentItem
                                    buttonFav={false}
                                    films={filmsDisLike}
                                    title={'Непонравившиеся'}
                                />
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProfileContent
