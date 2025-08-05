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
import SequelPrequelFilm from '../../components/SequelPrequelFilm/SequelPrequelFilm'
import UsersReviews from '../../components/UsersReviews/UsersReviews'

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
        sequalPrequal,
        userReview,
    } = useGetOneFilm(id)

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
                    <VideoPlayer filmWatch={filmWatch} />
                    <Actors
                        actors={getActors(actors, 'ACTOR')}
                        title={'Актёры'}
                    />
                    <Actors
                        actors={getActors(actors, 'DIRECTOR')}
                        title={'Режиссёр'}
                    />
                    {filmFacts && (
                        <FilmFacts film={film} filmFacts={filmFacts} />
                    )}
                    {sequalPrequal && (
                        <SequelPrequelFilm sequalPrequal={sequalPrequal} />
                    )}
                    <SameFilms sameFilms={sameFilms} />
                    <UsersReviews userReview={userReview} />
                </>
            ) : (
                <img src={download} className={styles.download} />
            )}
        </>
    )
}

export default MoviePage
