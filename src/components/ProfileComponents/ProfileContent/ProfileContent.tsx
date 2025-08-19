import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { Films } from '../../../types'
import ProfileContentItem from '../ProfileContentItem/ProfileContentItem'
import styles from './ProfileContent.module.css'
import { setUserInfo } from '../../../store/slices/loginSlice/loginSlice'
import { Link } from 'react-router-dom'
import useGetMoviesFromDb from '../../../hooks/useGetMoviesFromDb'

interface Profile {
    fav: Films[]
    like: Films[]
    dislike: Films[]
}

interface ProfileContentProps {
    profile: Profile
}

const ProfileContent: React.FC<ProfileContentProps> = () => {
    const { login }: any = useSelector((state: any) => state)
    const dispatch = useDispatch()

    const { movieFav } = useGetMoviesFromDb()

    const unLogIn = () => {
        dispatch(setUserInfo(undefined))
    }

    return (
        <>
            <section className={styles.profile}>
                <div className="container">
                    <div className={styles.profile__content}>
                        <h2 className={styles.profile__title}>
                            Аккаунт: {login.userProfile.email}
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
                            <ProfileContentItem
                                films={movieFav}
                                title={'Избранные'}
                            />
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProfileContent
