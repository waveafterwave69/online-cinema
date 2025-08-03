import type { News } from '../../types'
import { validateTime } from '../../utils/utils'
import styles from './NewsItem.module.css'
import { motion } from 'motion/react'

import arrow from '../../img/more.svg'

interface NewsItemProps {
    news: News
}

const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
    return (
        <>
            <motion.li whileHover={{ scale: 1.03 }} className={styles.item}>
                <a
                    href={news.url}
                    target="_blank"
                    className={styles.item__link}
                >
                    <img
                        src={news.imageUrl}
                        alt=""
                        className={styles.item__img}
                    />
                </a>
                <div className={styles.column__content}>
                    <div className={styles.text__content}>
                        <h3 className={styles.item__title}>{news.title}</h3>
                        <h3 className={styles.item__description}>
                            {news.description}
                        </h3>
                        <p className={styles.item__publish}>
                            Опубликовано: {validateTime(news.publishedAt)}
                        </p>
                    </div>
                    <div className={styles.arrow__content}>
                        <a
                            href={news.url}
                            className={styles.item__read}
                            target="_blank"
                        >
                            <p className={styles.read__text}>читать новость</p>
                            <img
                                src={arrow}
                                className={styles.read__img}
                                alt="arrow"
                            />
                        </a>
                    </div>
                </div>
            </motion.li>
        </>
    )
}

export default NewsItem
