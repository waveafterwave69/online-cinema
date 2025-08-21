import { useEffect, useState } from 'react'
import type { Films } from '../types'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase/firebase'

const useGetMoviesFromDb = () => {
    const [movieFav, setMovieFav] = useState<Films[]>([])

    useEffect(() => {
        const getCollectionData = () => {
            const citiesRef = collection(db, 'users')
            const unsubscribe = onSnapshot(citiesRef, (snapshot) => {
                const newMovies: Films[] = []
                snapshot.docChanges().forEach((change) => {
                    if (change.type === 'added') {
                        newMovies.push(change.doc.data() as Films)
                    }
                })
                setMovieFav((prevMovieFav) => [...prevMovieFav, ...newMovies])
            })

            return () => unsubscribe()
        }

        return getCollectionData()
    }, [db])

    return { movieFav }
}

export default useGetMoviesFromDb
