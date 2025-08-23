import styles from './SignIn.module.css'
import { motion } from 'motion/react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../../../firebase/firebase'
import {
    setUserInfo,
    switchForm,
} from '../../../store/slices/loginSlice/loginSlice'
import close from '../../../img/close.png'
import type { RootState } from '../../../store/store'
import useForm from '../../../hooks/useForm'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'

const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const { login } = useAppSelector((state: RootState) => state)

    const { handleLinkClick, swithFormType } = useForm()

    const dispatch = useAppDispatch()

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
