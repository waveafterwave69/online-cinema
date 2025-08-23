import { useEffect, lazy, Suspense } from 'react'
import Promo from '../../components/Promo/Promo'
import Trends from '../../components/Trends/Trends'
import Category from '../../components/CategoyComponents/Category/Category'
import NewFilms from '../../components/NewFilms/NewFilms'
import Collection from '../../components/CollectionComponents/Collection/Collection'

const LazyNewsPromo = lazy(
    () => import('../../components/NewsComponents/NewsPromo/NewsPromo')
)
const LazyFamily = lazy(() => import('../../components/Family/Family'))

const HomePage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="container">
                <Promo />
                <Trends />
                <Category />
            </div>
            <Suspense fallback={<div>Loading News...</div>}>
                <LazyNewsPromo />
            </Suspense>
            <div className="container">
                <NewFilms />
                <Collection />
            </div>
            <Suspense fallback={<div>Loading Family...</div>}>
                <LazyFamily />
            </Suspense>
        </>
    )
}

export default HomePage
