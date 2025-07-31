import styles from './Header.module.css'
import { routesConfig } from '../../routes/routesConfig'
import { Link, NavLink } from 'react-router' // Changed import from Link to NavLink
import { motion } from 'motion/react'

import logoImg from '../../img/logo.svg'
import profileImg from '../../img/profile.svg'
import searchImg from '../../img/search.svg'

import type { IRoutes } from '../../types'

const Header: React.FC = () => {
    return (
        <>
            <motion.header
                initial={{ top: -100, opacity: 0 }}
                animate={{ top: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                }}
                className={styles.header}
            >
                <div className={styles.header__row}>
                    <div className={styles.main__row}>
                        <Link to="/" className={styles.header__logo}>
                            <motion.img
                                whileHover={{ scale: 1.15 }}
                                src={logoImg}
                                alt="logo"
                            />
                        </Link>
                        <nav className={styles.header__nav}>
                            {routesConfig.map(
                                ({ url, text, isNav }: IRoutes) => (
                                    <div key={url}>
                                        {isNav && (
                                            <NavLink // Changed Link to NavLink
                                                to={url}
                                                className={(
                                                    { isActive } //  Add isActive check
                                                ) =>
                                                    `${styles.nav__item} ${
                                                        isActive
                                                            ? styles.item__active
                                                            : ''
                                                    }`
                                                }
                                            >
                                                {text}
                                            </NavLink>
                                        )}
                                    </div>
                                )
                            )}
                        </nav>
                    </div>
                    <div className={styles.profile}>
                        <button className={styles.profile__search}>
                            <motion.img
                                whileHover={{ scale: 1.15 }}
                                src={searchImg}
                                alt="search"
                                className={styles.profile__icon}
                            />
                        </button>
                        <Link to="/profile" className={styles.profile__open}>
                            <motion.img
                                whileHover={{ scale: 1.15 }}
                                src={profileImg}
                                alt="profile"
                                className={styles.profile__icon}
                            />
                        </Link>
                    </div>
                </div>
            </motion.header>
        </>
    )
}

export default Header
