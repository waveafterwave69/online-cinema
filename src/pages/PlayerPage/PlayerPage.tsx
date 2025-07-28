import { useEffect } from 'react'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'

const PlayerPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="container">
                <VideoPlayer />
            </div>
        </>
    )
}

export default PlayerPage
