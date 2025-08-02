import type { Films } from '../../types'
import styles from './FilmAbout.module.css'

interface FilmAboutProps {
    film: Films | undefined
}

const FilmAbout: React.FC<FilmAboutProps> = ({ film }) => {
    return (
        <>
            <section className={styles.about}>
                <h2 className={styles.about__title}>
                    Про фильм "{film?.nameRu}"
                </h2>
                <p className={styles.about__short}>
                    {film?.slogan} {film?.shortDescription}
                </p>
                <p className={styles.about__long}>{film?.description}</p>
            </section>
        </>
    )
}

export default FilmAbout
