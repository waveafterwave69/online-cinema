import { useAppDispatch, useAppSelector } from '@/app/appStore'
import { switchForm } from '@/entitites/auth/model/loginSlice'
import { db } from '@/firebase/firebase'
import type { Films } from '@/shared/types'
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'
import useGetMoviesFromDb from './useGetMoviesFromDb'

const useAddFilmsToDb = (film: Films | undefined) => {
    const { movieFav } = useGetMoviesFromDb()
    const dispatch = useAppDispatch()
    const login = useAppSelector((state) => state.login)
    let docId = ''

    if (login?.userProfile?.email) {
        const needEl: Films[] = movieFav.filter(
            (el: Films) => el.email === login?.userProfile?.email
        )

        if (needEl[0]?.email) {
            docId = needEl[0]?.email
        }
    }

    const addToFav = async () => {
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
                } catch (error) {
                    console.error('Ошибка при добавлении данных:', error)
                }
            }

            const documentPath = `users/${docId}`
            const fieldName = 'fav'
            const dataToAdd = { film }

            addDataToField(documentPath, fieldName, dataToAdd)
        } catch (error) {
            console.error('Error adding film to favorites: ', error)
        }
    }

    const deleteFromFav = async () => {
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
            async function removeDataFromField(
                documentPath: string,
                fieldName: string,
                dataToRemove: any
            ) {
                const docRef = doc(db, documentPath)

                try {
                    await updateDoc(docRef, {
                        [fieldName]: arrayRemove(dataToRemove),
                    })
                } catch (error) {
                    console.error('Ошибка при удалении данных:', error)
                }
            }

            const documentPath = `users/${docId}`
            const fieldName = 'fav'
            const dataToRemove = { film }

            removeDataFromField(documentPath, fieldName, dataToRemove)
        } catch (error) {
            console.error('Error removing film from favorites: ', error)
        }
    }

    const addToLike = async () => {
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
                } catch (error) {
                    console.error('Ошибка при добавлении данных:', error)
                }
            }

            const documentPath = `users/${docId}`
            const fieldName = 'like'
            const dataToAdd = { film }

            addDataToField(documentPath, fieldName, dataToAdd)
        } catch (error) {
            console.error('Error adding film to favorites: ', error)
        }
    }

    const deleteFromLike = async () => {
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
            async function removeDataFromField(
                documentPath: string,
                fieldName: string,
                dataToRemove: any
            ) {
                const docRef = doc(db, documentPath)

                try {
                    await updateDoc(docRef, {
                        [fieldName]: arrayRemove(dataToRemove),
                    })
                } catch (error) {
                    console.error('Ошибка при удалении данных:', error)
                }
            }

            const documentPath = `users/${docId}`
            const fieldName = 'like'
            const dataToRemove = { film }

            removeDataFromField(documentPath, fieldName, dataToRemove)
        } catch (error) {
            console.error('Error removing film from favorites: ', error)
        }
    }

    const addToDisLike = async () => {
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
                } catch (error) {
                    console.error('Ошибка при добавлении данных:', error)
                }
            }

            const documentPath = `users/${docId}`
            const fieldName = 'dislike'
            const dataToAdd = { film }

            addDataToField(documentPath, fieldName, dataToAdd)
        } catch (error) {
            console.error('Error adding film to favorites: ', error)
        }
    }

    const deleteFromDislike = async () => {
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
            async function removeDataFromField(
                documentPath: string,
                fieldName: string,
                dataToRemove: any
            ) {
                const docRef = doc(db, documentPath)

                try {
                    await updateDoc(docRef, {
                        [fieldName]: arrayRemove(dataToRemove),
                    })
                } catch (error) {
                    console.error('Ошибка при удалении данных:', error)
                }
            }

            const documentPath = `users/${docId}`
            const fieldName = 'dislike'
            const dataToRemove = { film }

            removeDataFromField(documentPath, fieldName, dataToRemove)
        } catch (error) {
            console.error('Error removing film from favorites: ', error)
        }
    }

    return {
        addToFav,
        addToLike,
        addToDisLike,
        deleteFromFav,
        deleteFromLike,
        deleteFromDislike,
    }
}

export default useAddFilmsToDb
