import { useEffect } from 'react'
import NewsContent from '../../../widgets/news/UI/NewsContent/NewsContent'

const NewsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="container">
                <NewsContent />
            </div>
        </>
    )
}

export default NewsPage
