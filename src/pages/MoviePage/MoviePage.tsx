import { useEffect } from 'react'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import MoviePromo from '../../components/MovieComponents/MoviePromo/MoviePromo'
import useGetOneFilm from '../../hooks/useGetOneFilm'
import { useParams } from 'react-router'
import FilmAbout from '../../components/FilmComponents/FilmAbout/FilmAbout'
import Actors from '../../components/ActorComponets/Actors/Actors'
import { getActors } from '../../utils/utils'
import SameFilms from '../../components/SameFilms/SameFilms'
import SequelPrequelFilm from '../../components/SequelPrequelFilm/SequelPrequelFilm'
import UsersReviews from '../../components/UsersReviews/UsersReviews'
import FilmFacts from '../../components/FilmComponents/FilmFacts/FilmFacts'
import FilmCategory from '../../components/FilmComponents/FilmCategory/FilmCategory'
import Spinner from '../../UI/Spinner/Spinner'

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
        favColor,
        likeColor,
        dislikeColor,
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
                        favColor={favColor}
                        likeColor={likeColor}
                        dislikeColor={dislikeColor}
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
                    {filmFacts && filmFacts?.length > 0 && (
                        <FilmFacts film={film} filmFacts={filmFacts} />
                    )}
                    {sequalPrequal && sequalPrequal?.length > 0 && (
                        <SequelPrequelFilm sequalPrequal={sequalPrequal} />
                    )}
                    {sameFilms && sameFilms?.length > 0 && (
                        <SameFilms sameFilms={sameFilms} />
                    )}
                    {userReview && userReview?.length > 0 && (
                        <UsersReviews userReview={userReview} />
                    )}
                </>
            ) : (
                <Spinner />
            )}
        </>
    )
}

export default MoviePage
