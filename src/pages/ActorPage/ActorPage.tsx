import { useEffect } from 'react'
import download from '../../img/download.svg'
import useGetUserInfo from '../../hooks/useGetUserInfo'
import { useParams } from 'react-router'
import ActorProfile from '../../components/ActorProfile/ActorProfile'

import styles from './ActorPage.module.css'
import ActorFilms from '../../components/ActorFilms/ActorFilms'

const ActorPage: React.FC = () => {
    const { id } = useParams()
    const { isLoading, actorInfo } = useGetUserInfo(id)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    console.log(actorInfo)

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
                    <img src={download} className={styles.download} />
                )}
            </div>
        </>
    )
}

export default ActorPage
