import { useEffect } from 'react'
import Promo from '../../components/Promo/Promo'
import Trends from '../../components/Trends/Trends'
import Categories from '../../components/NewFilms/NewFilms'
import NewsPromo from '../../components/NewsPromo/NewsPromo'
import Category from '../../components/Category/Category'

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
                <Categories />
            </div>
        </>
    )
}

export default HomePage
