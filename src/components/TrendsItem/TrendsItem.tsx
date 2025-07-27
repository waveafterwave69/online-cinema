import type { Films } from '../../types'
import styles from './TrendsItem.module.css'
import { motion } from 'motion/react'

interface TrendsItemProps {
    film: Films
}

const TrendsItem: React.FC<TrendsItemProps> = ({ film }) => {
    return (
        <>
            <li className={styles.item}>
                <motion.button
                    className={styles.item__button}
                    whileHover={{
                        fontSize: '42px',
                        padding: '5px 18px',
                        background:
                            'linear-gradient(228deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.30) 100%)',
                        borderRadius: '60px',
                    }}
                    transition={{
                        duration: 0.1,
                    }}
                >
                    +
                </motion.button>
                <img
                    src={film.posterUrlPreview}
                    alt={film.nameOriginal}
                    className={styles.item__image}
                />
            </li>
        </>
    )
}

export default TrendsItem
