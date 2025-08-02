import { useEffect } from 'react'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import MoviePromo from '../../components/MoviePromo/MoviePromo'
import useGetOneFilm from '../../hooks/useGetOneFilm'
import { useParams } from 'react-router'
import FilmAbout from '../../components/FilmAbout/FilmAbout'
import FilmCategory from '../../components/FilmCategory/FilmCategory'

const MoviePage: React.FC = () => {
    const { id } = useParams()
    const { film, filmBg, currFilm, setCurrFilm } = useGetOneFilm(id)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <MoviePromo
                film={film}
                filmBg={filmBg}
                currFilm={currFilm}
                setCurrFilm={setCurrFilm}
            />
            <div className="container">
                <FilmAbout film={film} />
                <FilmCategory film={film} />
                <VideoPlayer />
            </div>
        </>
    )
}

export default MoviePage
