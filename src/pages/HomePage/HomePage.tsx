import { useEffect } from 'react'
import Promo from '../../components/Promo/Promo'
import Trends from '../../components/Trends/Trends'
import NewsPromo from '../../components/NewsComponents/NewsPromo/NewsPromo'
import Category from '../../components/CategoyComponents/Category/Category'
import NewFilms from '../../components/NewFilms/NewFilms'
import Collection from '../../components/CollectionComponents/Collection/Collection'
import Family from '../../components/Family/Family'

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
            <NewsPromo />
            <div className="container">
                <NewFilms />
                <Collection />
            </div>
            <Family />
        </>
    )
}

export default HomePage
