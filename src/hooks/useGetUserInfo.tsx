import { useEffect, useState } from 'react'
import { getUserInfo } from '../api/userData'
import type { ActorProfilee } from '../types'

const useGetUserInfo = (id: string | undefined) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [actorInfo, setActorInfo] = useState<ActorProfilee>()

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const data = await getUserInfo(id)
                setActorInfo(data?.data)
                setIsLoading(false)
            } catch (error) {
                console.error('Ошибка при получении данных:', error)
            }
        }

        fetchData()
    }, [])

    return {
        actorInfo,
        isLoading,
    }
}

export default useGetUserInfo
