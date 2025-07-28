import { useEffect } from 'react'
import Promo from '../../components/Promo/Promo'
import Trends from '../../components/Trends/Trends'
import Categories from '../../components/Categories/Categories'
import NewsPromo from '../../components/NewsPromo/NewsPromo'

const HomePage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="container">
                <Promo />
                <Trends />
            </div>
            <NewsPromo />
            <div className="container">
                <Categories />
            </div>
        </>
    )
}

export default HomePage
