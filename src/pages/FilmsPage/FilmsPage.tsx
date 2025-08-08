import { useEffect } from 'react'
import download from '../../img/download.svg'

import styles from './FilmsPage.module.css'
import FilmPagePromo from '../../components/FilmPageComponents/FilmPagePromo/FilmPagePromo'
import useGetFilmPage from '../../hooks/useGetFilmPage'

const FilmsPage: React.FC = () => {
    const { films, isLoading } = useGetFilmPage()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="container">
                <FilmPagePromo />
                {!isLoading ? (
                    <></>
                ) : (
                    <img src={download} className={styles.download} />
                )}
            </div>
        </>
    )
}

export default FilmsPage
