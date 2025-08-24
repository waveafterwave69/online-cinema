import Tags from '../../Tags/Tags'
import styles from './FilmPagePromo.module.css'
import { useMediaQuery } from 'react-responsive'
import useGetFilmPage from '../../../hooks/useGetFilmPage'
import promoImg from '../../../img/searchImg.png'
import searchImg from '../../../img/searchInput.svg'
import FilmPageList from '../FilmPageList/FilmPageList'
import { themes } from '../../../api/categoryData'
import { useCallback } from 'react'
import Spinner from '../../../UI/Spinner/Spinner'

const FilmPagePromo: React.FC = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 475 })
    const isMedium2 = useMediaQuery({ maxWidth: 768 })
    const isMediumScreen = useMediaQuery({ maxWidth: 1024 })
    const { films, setPageCount, setSearchWord, pageCount, isLoading, error } =
        useGetFilmPage()

    const debounce = (func: Function, delay: number) => {
        let timerId: NodeJS.Timeout
        return function (...args: any[]) {
            clearTimeout(timerId)
            timerId = setTimeout(() => {
                func(...args)
            }, delay)
        }
    }

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchWord(e.target.value)
        },
        [setSearchWord]
    )

    const debouncedHandleChange = useCallback(debounce(handleChange, 350), [
        handleChange,
    ])

    return (
        <>
            <section className={styles.promo}>
                <h2 className={styles.promo__title}>Поиск фильмов</h2>
                <div className={styles.promo__content}>
                    <div className={styles.promo__column}>
                        <div className={styles.promo__row}>
                            <img
                                src={promoImg}
                                alt="search"
                                className={styles.search__img}
                            />
                            <div className={styles.search}>
                                <div className={styles.label__text}>Поиск:</div>
                                <div className={styles.search__content}>
                                    <label className={styles.form__label}>
                                        <input
                                            onChange={debouncedHandleChange}
                                            type="text"
                                            placeholder="Поиск"
                                            className={styles.search__input}
                                        />
                                    </label>
                                    <button>
                                        <img
                                            src={searchImg}
                                            alt="search button"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Tags
                        themes={themes}
                        isSmallScreen={isSmallScreen}
                        isMediumScreen={isMediumScreen}
                        isMedium2={isMedium2}
                    />
                </div>
            </section>
            {!isLoading ? (
                <>
                    <FilmPageList
                        films={films}
                        pageCount={pageCount}
                        setPageCount={setPageCount}
                        error={error}
                    />
                </>
            ) : (
                <Spinner />
            )}
        </>
    )
}

export default FilmPagePromo
