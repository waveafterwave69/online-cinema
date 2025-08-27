import type { Films } from '@/shared/types'
import FilmPageListItem from '../FilmPageListItem/FilmPageListItem'
import styles from './FilmPageList.module.css'

interface FilmPageListProps {
    films: Films[] | undefined
    setPageCount: (page: any) => void
    pageCount: number
    error: boolean
}

const FilmPageList: React.FC<FilmPageListProps> = ({
    films,
    setPageCount,
    pageCount,
    error,
}) => {
    const setPageHandle = () => {
        setPageCount((prev: number) => prev + 1)
        window.scrollTo(0, 0)
    }

    const setPageHandleMinus = () => {
        setPageCount((prev: number) => prev - 1)
        window.scrollTo(0, 0)
    }

    return (
        <>
            <section className={styles.list}>
                {films && films.length !== 0 ? (
                    <>
                        <ul className={styles.list__films}>
                            {films &&
                                films.map((film) => (
                                    <FilmPageListItem
                                        key={film.nameOriginal}
                                        film={film}
                                    />
                                ))}
                        </ul>
                    </>
                ) : (
                    <p className={styles.film__error}>Фильмы не найдены.</p>
                )}
                <div className={styles.list__page}>
                    <p className={styles.page__count}>Страница: {pageCount}</p>
                    <div className={styles.page__buttons}>
                        <button
                            disabled={pageCount === 1}
                            onClick={setPageHandleMinus}
                            className={styles.page__button}
                        >
                            Предыдущая
                        </button>
                        <button
                            disabled={error}
                            onClick={setPageHandle}
                            className={styles.page__button}
                        >
                            Следущая
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FilmPageList
