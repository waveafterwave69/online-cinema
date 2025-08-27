import { useAppSelector, useAppDispatch } from '@/app/appStore'
import { switchForm, switchType } from '@/entitites/auth/model/loginSlice'
import { useEffect } from 'react'

const useForm = () => {
    const login = useAppSelector((state) => state.login)
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
