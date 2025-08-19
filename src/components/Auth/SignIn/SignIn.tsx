import styles from './SignIn.module.css'
import { motion } from 'motion/react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from '../../../firebase/firebase'
import {
    setUserInfo,
    switchForm,
    switchType,
} from '../../../store/slices/loginSlice/loginSlice'
import { useDispatch, useSelector } from 'react-redux'
import close from '../../../img/close.png'

const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const { login }: any = useSelector((state) => state)

    const dispatch = useDispatch()

    const handleLogin = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user)
                setEmail('')
                setPassword('')
                setError('')
                dispatch(
                    setUserInfo({
                        password: password,
                        email: email,
                    })
                )
                dispatch(switchForm())
            })
            .catch((error) => {
                console.log(error)
                setError('Аккаунт не найден')
            })
    }

    useEffect(() => {
        if (login.formType === 'open') {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [login.formType])

    const handleLinkClick = () => {
        dispatch(switchForm())
    }
    const swithFormType = () => {
        dispatch(switchType())
    }

    return (
        <>
            {login.formType === 'open' && login.type === 'signin' && (
                <>
                    <div
                        className={styles.overlay}
                        onClick={handleLinkClick}
                    ></div>
                    <motion.section
                        className={styles.signin}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.3,
                        }}
                    >
                        <button onClick={handleLinkClick}>
                            {' '}
                            <img
                                src={close}
                                alt="закрыть"
                                className={styles.close}
                            />
                        </button>
                        <h2 className={styles.signin__title}>
                            Войти в аккаунт
                        </h2>
                        {error && (
                            <p className={styles.error}>Ошибка: {error}</p>
                        )}
                        <div className={styles.signin__form}>
                            <input
                                type="email"
                                value={email}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => setEmail(e.target.value)}
                                className={styles.signin__input}
                                placeholder="Почта"
                            />
                            <input
                                type="password"
                                className={styles.signin__input}
                                value={password}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => setPassword(e.target.value)}
                                placeholder="Пароль"
                            />
                            <button
                                onClick={handleLogin}
                                className={styles.signin__button}
                                disabled={
                                    email.length < 1 || password.length < 1
                                }
                            >
                                Войти
                            </button>
                            <button
                                onClick={swithFormType}
                                className={styles.switch}
                            >
                                Зарегистрироваться
                            </button>
                        </div>
                    </motion.section>
                </>
            )}
        </>
    )
}

export default SignIn
