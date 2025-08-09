import { useEffect } from 'react'
import FilmPagePromo from '../../components/FilmPageComponents/FilmPagePromo/FilmPagePromo'

const FilmsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="container">
                <FilmPagePromo />
            </div>
        </>
    )
}

export default FilmsPage
