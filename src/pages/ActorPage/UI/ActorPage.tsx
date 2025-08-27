import { useEffect } from 'react'
import { useParams } from 'react-router'
import ActorFilms from '../../../widgets/actors/UI/ActorFilms/ActorFilms'
import ActorProfile from '../../../widgets/actors/UI/ActorProfile/ActorProfile'
import useGetUserInfo from '@/features/hooks/userHooks/useGetUserInfo'
import Spinner from '@/shared/UI/Spinner/Spinner'

const ActorPage: React.FC = () => {
    const { id } = useParams()
    const { isLoading, actorInfo } = useGetUserInfo(id)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="container">
                {!isLoading ? (
                    <>
                        {actorInfo && <ActorProfile actorInfo={actorInfo} />}
                        {actorInfo?.films && (
                            <ActorFilms films={actorInfo?.films} />
                        )}
                    </>
                ) : (
                    <Spinner />
                )}
            </div>
        </>
    )
}

export default ActorPage
