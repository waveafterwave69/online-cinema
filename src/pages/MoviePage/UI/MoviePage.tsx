import Actors from '@/widgets/movie/UI/MovieActors/MovieActors'
import FilmAbout from '@/widgets/movie/UI/MovieAbout/MovieAbout'
import FilmCategory from '@/entitites/movie/UI/FilmCategory/MovieCategory'
import FilmFacts from '@/widgets/movie/UI/MovieFacts/MovieFacts'
import MoviePromo from '@/widgets/movie/UI/MoviePromo/MoviePromo'
import SameFilms from '@/widgets/movie/UI/SameFilms/SameFilms'
import SequelPrequelFilm from '@/widgets/movie/UI/SequelPrequelFilm/SequelPrequelFilm'
import UsersReviews from '@/widgets/movie/UI/MovieReviews/MovieReviews'
import VideoPlayer from '@/widgets/movie/UI/MovieVideoPlayer/MovieVideoPlayer'

import { getActors } from '@/shared/helpers/helpers'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import useGetOneFilm from '@/features/hooks/filmsHooks/useGetOneFilm'
import Spinner from '@/shared/UI/Spinner/Spinner'

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
