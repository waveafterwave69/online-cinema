import { useEffect } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/firebase'

const useAddUserToDb = (user: any) => {
    useEffect(() => {
        const addUser = async () => {
            try {
                const docRef = await addDoc(collection(db, 'users'), {
                    ...user,
                })
                console.log('Document written with ID: ', docRef.id)
            } catch (e) {
                console.error('Error adding document: ', e)
            }
        }

        addUser()
    }, [])
}

export default useAddUserToDb
