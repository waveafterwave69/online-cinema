import HomePage from '../pages/HomePage/HomePage'
import NewsPage from '../pages/NewsPage/NewsPage'
import MoviePage from '../pages/MoviePage/MoviePage'
import ActorPage from '../pages/ActorPage/ActorPage'

export const routesConfig = [
    {
        page: <HomePage />,
        url: '/',
    },
    {
        page: <HomePage />,
        url: '/movies',
        isNav: true,
        text: 'Фильмы',
    },
    {
        page: <NewsPage />,
        url: '/news',
        isNav: true,
        text: 'Новости',
    },
    {
        page: <HomePage />,
        url: '/profile',
    },
    {
        page: <MoviePage />,
        url: '/movie/:id',
    },
    {
        page: <ActorPage />,
        url: '/actor/:id',
    },
]
