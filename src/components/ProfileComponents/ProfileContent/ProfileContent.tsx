import React from 'react'
import ProfileContentItem from '../ProfileContentItem/ProfileContentItem'
import styles from './ProfileContent.module.css'
import { setUserInfo } from '../../../store/slices/loginSlice/loginSlice'
import { Link } from 'react-router-dom'
import useGetUserFilms from '../../../hooks/useGetUserFilms'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'

const ProfileContent: React.FC = () => {
    const { login } = useAppSelector((state) => state)
    const { filmsFav, filmsLike, filmsDisLike, movieFav } = useGetUserFilms()

    const dispatch = useAppDispatch()

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
                                {filmsFav && (
                                    <ProfileContentItem
                                        films={filmsFav}
                                        title={'Избранные'}
                                    />
                                )}
                                {filmsLike && (
                                    <ProfileContentItem
                                        buttonFav={false}
                                        films={filmsLike}
                                        title={'Понравившиеся'}
                                    />
                                )}
                                {filmsDisLike && (
                                    <ProfileContentItem
                                        buttonFav={false}
                                        films={filmsDisLike}
                                        title={'Непонравившиеся'}
                                    />
                                )}
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProfileContent
