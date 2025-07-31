import useGetNews from '../../hooks/useGetNews'
import type { News } from '../../types'
import NewsItem from '../NewsItem/NewsItem'
import styles from './NewsContent.module.css'
import { motion } from 'motion/react'

import download from '../../img/download.svg'

const NewsContent: React.FC = () => {
    const { news, isLoading } = useGetNews()

    return (
        <>
            <section className={styles.news}>
                <motion.h1
                    className={styles.news__title}
                    initial={{ top: -100, opacity: 0 }}
                    animate={{ top: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                    }}
                >
                    Новости
                </motion.h1>
                {!isLoading ? (
                    <motion.ul
                        initial={{ left: -100, opacity: 0 }}
                        animate={{ left: 0, opacity: 1 }}
                        transition={{
                            duration: 0.6,
                        }}
                        className={styles.news__list}
                    >
                        {news &&
                            news.map((el: News) => (
                                <NewsItem news={el} key={el.kinopoiskId} />
                            ))}
                    </motion.ul>
                ) : (
                    <img src={download} className={styles.download} />
                )}
            </section>
        </>
    )
}

export default NewsContent
