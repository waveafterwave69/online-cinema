import type { ScreenShots } from '../../types'
import styles from './ScreenShotItem.module.css'
import { motion } from 'motion/react'

interface ScreenShotItemProps {
    screen: ScreenShots
    setCurrFilm: (arg: string) => void
}

const ScreenShotItem: React.FC<ScreenShotItemProps> = ({
    screen,
    setCurrFilm,
}) => {
    return (
        <>
            <button className={styles.screen}>
                <motion.img
                    onHoverStart={() => setCurrFilm(screen.imageUrl)}
                    whileHover={{ opacity: 1 }}
                    src={screen.imageUrl}
                    className={styles.screen__img}
                    alt="screen"
                />
            </button>
        </>
    )
}

export default ScreenShotItem
