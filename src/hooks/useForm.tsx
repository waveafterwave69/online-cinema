import { useEffect } from 'react'
import { switchForm, switchType } from '../store/slices/loginSlice/loginSlice'
import { useAppDispatch, useAppSelector } from './hooks'

const useForm = () => {
    const { login } = useAppSelector((state) => state)
    const dispatch = useAppDispatch()

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

    return {
        handleLinkClick,
        swithFormType,
    }
}

export default useForm
