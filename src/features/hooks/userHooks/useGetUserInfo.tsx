import { useEffect, useState } from 'react'
import type { ActorProfilee } from '@/shared/types'
import { getActorInfo } from '@/entitites/actor/api/actorApi'

const useGetUserInfo = (id: string | undefined) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [actorInfo, setActorInfo] = useState<ActorProfilee>()

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const data = await getActorInfo(id)
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
