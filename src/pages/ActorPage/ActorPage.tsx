import { useEffect } from 'react'
import useGetUserInfo from '../../hooks/useGetUserInfo'
import { useParams } from 'react-router'
import ActorFilms from '../../components/ActorComponets/ActorFilms/ActorFilms'
import ActorProfile from '../../components/ActorComponets/ActorProfile/ActorProfile'
import Spinner from '../../UI/Spinner/Spinner'

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
