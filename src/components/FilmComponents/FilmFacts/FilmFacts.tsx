import styles from './FilmFacts.module.css'

import FactsItem from '../FactsItem/FactsItem'
import { useState } from 'react'
import { motion } from 'motion/react'
import type { FilmFactss, Films } from '../../../types'

interface FilmFactsProps {
    film: Films | undefined
    filmFacts: FilmFactss[] | undefined
}

const FilmFacts: React.FC<FilmFactsProps> = ({ filmFacts, film }) => {
    const [max, setMax] = useState<number>(3)

    return (
        <>
            {filmFacts && (
                <div className={styles.facts}>
                    <div className="container">
                        <h2 className={styles.facts__title}>
                            Факты о фильме "{film?.nameRu}"
                        </h2>
                        <ul className={styles.facts__list}>
                            {filmFacts.map(({ text }, index) => (
                                <FactsItem
                                    key={index}
                                    text={text}
                                    index={index + 1}
                                    max={max}
                                />
                            ))}
                        </ul>
                        <motion.div
                            className={styles.facts__btn}
                            whileHover={{ scale: 1.05 }}
                        >
                            {max < filmFacts.length ? (
                                <button
                                    className={styles.facts__button}
                                    onClick={() => setMax((prev) => prev + 5)}
                                >
                                    Больше фактов
                                </button>
                            ) : (
                                <button
                                    className={styles.facts__button}
                                    onClick={() => setMax(() => 3)}
                                >
                                    Скрыть факты
                                </button>
                            )}
                        </motion.div>
                    </div>
                </div>
            )}
        </>
    )
}

export default FilmFacts
