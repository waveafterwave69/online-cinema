import React from 'react'
import type { Films } from '../../types'
import styles from './SwiperItem.module.css'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { switchForm } from '../../store/slices/loginSlice/loginSlice'
import { doc, updateDoc, arrayUnion } from 'firebase/firestore'
import { db } from '../../firebase/firebase'
import useGetMoviesFromDb from '../../hooks/useGetMoviesFromDb'

interface SwiperItemProps {
    film: Films
    buttonFav: boolean
}

const SwiperItem: React.FC<SwiperItemProps> = ({ film, buttonFav }) => {
    const dispatch = useDispatch()
    const { login }: any = useSelector((state) => state)
    const { movieFav } = useGetMoviesFromDb()

    let docId = ''

    if (login?.userProfile?.email) {
        const needEl: any = movieFav.filter(
            (el: any) => el.email === login.userProfile.email
        )

        docId = needEl[0]?.email
    }

    const addToFav = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.stopPropagation()

        if (!login.userProfile) {
            dispatch(switchForm())
            return
        }

        const userId = login.userProfile.email

        if (!userId) {
            console.error('User ID is missing from userProfile.')
            return
        }

        try {
            async function addDataToField(
                documentPath: string,
                fieldName: string,
                dataToAdd: any
            ) {
                const docRef = doc(db, documentPath)

                try {
                    await updateDoc(docRef, {
                        [fieldName]: arrayUnion(dataToAdd),
                    })
                    console.log('Данные успешно добавлены в поле', fieldName)
                } catch (error) {
                    console.error('Ошибка при добавлении данных:', error)
                }

                console.log('Film added to favorites with ID: ', docRef.id)
            }

            const documentPath = `users/${docId}`
            const fieldName = 'fav'
            const dataToAdd = { film }

            addDataToField(documentPath, fieldName, dataToAdd)
        } catch (error) {
            console.error('Error adding film to favorites: ', error)
        }
    }

    const isFavorite = movieFav.filter(
        (el: Films) => el.kinopoiskId === film.kinopoiskId
    )

    return (
        <>
            <motion.li className={styles.item}>
                {buttonFav && (
                    <motion.button
                        whileHover={{
                            backgroundColor: '#EC5BAA',
                        }}
                        style={{
                            backgroundColor:
                                isFavorite.length > 0
                                    ? '#EC5BAA'
                                    : 'transparent',
                        }}
                        transition={{ duration: 0.1 }}
                        className={styles.item__button}
                        onClick={addToFav}
                    >
                        +
                    </motion.button>
                )}
                <a
                    href={
                        film.kinopoiskId
                            ? `/movie/${film.kinopoiskId}`
                            : `/movie/${film.filmId}`
                    }
                >
                    <img
                        src={film.posterUrlPreview}
                        alt={film.nameOriginal}
                        className={styles.item__image}
                    />
                </a>
            </motion.li>
        </>
    )
}

export default SwiperItem
