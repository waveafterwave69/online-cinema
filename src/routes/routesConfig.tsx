import HomePage from '../pages/HomePage/HomePage'
import PlayerPage from '../pages/PlayerPage/PlayerPage'

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
        page: <HomePage />,
        url: '/series',
        isNav: true,
        text: 'Сериалы',
    },
    {
        page: <HomePage />,
        url: '/profile',
    },
    {
        page: <PlayerPage />,
        url: '/movie/:id',
    },
]
