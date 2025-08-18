import { useEffect, useState } from 'react'
import { getUserInfo } from '../api/userData'

const useGetUserInfo = (id: string | undefined) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [actorInfo, setActorInfo] = useState<any>()

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
