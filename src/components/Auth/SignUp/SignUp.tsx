import styles from './SignUp.module.css'
import { motion } from 'motion/react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from '../../../firebase/firebase'
import { useDispatch, useSelector } from 'react-redux'
import {
    setUserInfo,
    switchForm,
    switchType,
} from '../../../store/slices/loginSlice/loginSlice'
import close from '../../../img/close.png'

const SignUp: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [copyPassword, setCopyPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const { login }: any = useSelector((state) => state)

    const dispatch = useDispatch()

    const register = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (password !== copyPassword) {
            setError('пароли не совпадают')
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user)
                setEmail('')
                setPassword('')
                setCopyPassword('')
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
            {login.formType === 'open' && login.type === 'login' && (
                <>
                    <div
                        className={styles.overlay}
                        onClick={handleLinkClick}
                    ></div>
                    <motion.section
                        className={styles.signup}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.3,
                        }}
                    >
                        <button onClick={handleLinkClick}>
                            <img
                                src={close}
                                alt="закрыть"
                                className={styles.close}
                            />
                        </button>
                        <h2 className={styles.signup__title}>
                            Создать аккаунт
                        </h2>
                        {error && (
                            <p className={styles.error}>Ошибка: {error}</p>
                        )}
                        <form
                            className={styles.signup__form}
                            onSubmit={register}
                        >
                            <input
                                type="email"
                                value={email}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => setEmail(e.target.value)}
                                className={styles.signup__input}
                                placeholder="Почта"
                            />
                            <input
                                type="password"
                                className={styles.signup__input}
                                value={password}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => setPassword(e.target.value)}
                                placeholder="Пароль"
                            />
                            <input
                                type="password"
                                className={styles.signup__input}
                                value={copyPassword}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => setCopyPassword(e.target.value)}
                                placeholder="Повторить Пароль"
                            />
                            <button
                                className={styles.signup__button}
                                disabled={
                                    email.length < 1 ||
                                    password.length < 1 ||
                                    copyPassword.length < 1
                                }
                            >
                                Создать
                            </button>
                            <button
                                onClick={swithFormType}
                                className={styles.switch}
                            >
                                Войти в аккаунт
                            </button>
                        </form>
                    </motion.section>
                </>
            )}
        </>
    )
}

export default SignUp
