import ActorPage from '@/pages/ActorPage/UI/ActorPage'
import FilmsPage from '@/pages/FilmsPage/UI/FilmsPage'
import HomePage from '@/pages/HomePage/UI/HomePage'
import MoviePage from '@/pages/MoviePage/UI/MoviePage'
import NewsPage from '@/pages/NewsPage/UI/NewsPage'
import ProfilePage from '@/pages/ProfilePage/UI/ProfilePage'

export const routesConfig = [
    {
        page: <HomePage />,
        url: '/',
    },
    {
        page: <FilmsPage />,
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
        page: <ProfilePage />,
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
