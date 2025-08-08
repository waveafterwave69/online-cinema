import Tags from '../../Tags/Tags'
import styles from './FilmPagePromo.module.css'
import { useMediaQuery } from 'react-responsive'
import { themes } from '../../../data/data'
import useGetFilmPage from '../../../hooks/useGetFilmPage'
import TrendsItem from '../../TrendsItem/TrendsItem'
import promoImg from '../../../img/searchImg.png'
import searchImg from '../../../img/searchInput.svg'

const FilmPagePromo: React.FC = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 475 })
    const isMedium2 = useMediaQuery({ maxWidth: 768 })
    const isMediumScreen = useMediaQuery({ maxWidth: 1024 })
    const { films, setPageCount } = useGetFilmPage()
    const setPageHandle = () => {
        setPageCount((prev) => prev + 1)
    }

    return (
        <>
            <section className={styles.promo}>
                <button onClick={setPageHandle}>БОЛЬШЕ</button>
                <h2 className={styles.promo__title}>Поиск фильмов</h2>
                <div className={styles.promo__content}>
                    <div className={styles.promo__column}>
                        <div className={styles.promo__row}>
                            <img
                                src={promoImg}
                                alt="search"
                                className={styles.search__img}
                            />
                            <form className={styles.form}>
                                <div className={styles.form__row}>
                                    <label className={styles.form__label}>
                                        <div className={styles.label__text}>
                                            Год:
                                        </div>
                                        <input
                                            placeholder="Год"
                                            type="number"
                                            className={styles.form__input}
                                        />
                                    </label>
                                    <label className={styles.form__label}>
                                        <div className={styles.label__text}>
                                            Страна:
                                        </div>
                                        <input
                                            placeholder="Страна"
                                            type="text"
                                            className={styles.form__input}
                                        />
                                    </label>
                                </div>

                                <div className={styles.search}>
                                    <div className={styles.label__text}>
                                        Поиск:
                                    </div>
                                    <div className={styles.search__content}>
                                        <label className={styles.form__label}>
                                            <input
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
                            </form>
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
            <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
                {films && films.map((film) => <TrendsItem film={film} />)}
            </ul>
        </>
    )
}

export default FilmPagePromo
