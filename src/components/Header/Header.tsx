import styles from './Header.module.css'
import { routesConfig } from '../../routes/routesConfig'
import { Link } from 'react-router'

import logoImg from '../../img/logo.svg'
import profileImg from '../../img/profile.svg'
import searchImg from '../../img/search.svg'

import type { IRoutes } from '../../types'

const Header: React.FC = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__row}>
                    <div className={styles.main__row}>
                        <Link to="/" className={styles.header__logo}>
                            <img src={logoImg} alt="logo" />
                        </Link>
                        <nav className={styles.header__nav}>
                            {routesConfig.map(
                                ({ url, text, isNav }: IRoutes) => (
                                    <div key={url}>
                                        {isNav && (
                                            <Link
                                                to={url}
                                                className={styles.nav__item}
                                            >
                                                {text}
                                            </Link>
                                        )}
                                    </div>
                                )
                            )}
                        </nav>
                    </div>
                    <div className={styles.profile}>
                        <button className={styles.profile__search}>
                            <img
                                src={searchImg}
                                alt="search"
                                className={styles.profile__icon}
                            />
                        </button>
                        <Link to="/profile" className={styles.profile__open}>
                            <img
                                src={profileImg}
                                alt="profile"
                                className={styles.profile__icon}
                            />
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
