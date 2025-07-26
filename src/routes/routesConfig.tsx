import HomePage from '../pages/HomePage/HomePage'

export const routesConfig = [
    {
        page: <HomePage />,
        url: '/',
    },
    {
        page: <HomePage />,
        url: '/movies',
        isNav: true,
        text: 'Movies',
    },
    {
        page: <HomePage />,
        url: '/series',
        isNav: true,
        text: 'Series',
    },
    {
        page: <HomePage />,
        url: '/profile',
    },
]
