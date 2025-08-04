import { useEffect } from 'react'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import MoviePromo from '../../components/MoviePromo/MoviePromo'
import useGetOneFilm from '../../hooks/useGetOneFilm'
import { useParams } from 'react-router'
import FilmAbout from '../../components/FilmAbout/FilmAbout'
import FilmCategory from '../../components/FilmCategory/FilmCategory'
import download from '../../img/download.svg'

import styles from './MoviePage.module.css'
import FilmFacts from '../../components/FilmFacts/FilmFacts'
import Actors from '../../components/Actors/Actors'
import { getActors } from '../../utils/utils'
import SameFilms from '../../components/SameFilms/SameFilms'

const MoviePage: React.FC = () => {
    const { id } = useParams()
    const {
        film,
        filmBg,
        currFilm,
        setCurrFilm,
        filmWatch,
        isLoading,
        filmFacts,
        actors,
        sameFilms,
    } = useGetOneFilm(id)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    console.log(sameFilms)

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
                    <VideoPlayer filmWatch={filmWatch} />
                    <Actors
                        actors={getActors(actors, 'ACTOR')}
                        title={'Актёры'}
                    />
                    <Actors
                        actors={getActors(actors, 'DIRECTOR')}
                        title={'Режиссёр'}
                    />
                    <FilmFacts film={film} filmFacts={filmFacts} />
                    <SameFilms sameFilms={sameFilms} />
                </>
            ) : (
                <img src={download} className={styles.download} />
            )}
        </>
    )
}

export default MoviePage
