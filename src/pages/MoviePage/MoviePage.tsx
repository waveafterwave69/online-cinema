import { useEffect } from 'react'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import MoviePromo from '../../components/MoviePromo/MoviePromo'
import useGetOneFilm from '../../hooks/useGetOneFilm'
import { useParams } from 'react-router'
import FilmAbout from '../../components/FilmAbout/FilmAbout'
import FilmCategory from '../../components/FilmCategory/FilmCategory'
import download from '../../img/download.svg'

import styles from './MoviePage.module.css'

const MoviePage: React.FC = () => {
    const { id } = useParams()
    const { film, filmBg, currFilm, setCurrFilm, filmWatch, isLoading } =
        useGetOneFilm(id)
    console.log(film)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            {!isLoading ? (
                <>
                    <MoviePromo
                        film={film}
                        filmBg={filmBg}
                        currFilm={currFilm}
                        setCurrFilm={setCurrFilm}
                    />
                    <FilmAbout film={film} />
                    <FilmCategory film={film} />
                    <VideoPlayer filmWatch={filmWatch} />{' '}
                </>
            ) : (
                <img src={download} className={styles.download} />
            )}
        </>
    )
}

export default MoviePage
