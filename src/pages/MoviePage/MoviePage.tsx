import { useEffect } from 'react'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import MoviePromo from '../../components/MoviePromo/MoviePromo'

const MoviePage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <MoviePromo />
            <div className="container">
                <VideoPlayer />
            </div>
        </>
    )
}

export default MoviePage
