import { useEffect } from 'react'
import Promo from '../../components/Promo/Promo'
import Trends from '../../components/Trends/Trends'

const HomePage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Promo />
            <Trends />
        </>
    )
}

export default HomePage
