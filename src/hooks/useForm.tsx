import { useEffect } from 'react'
import { switchForm, switchType } from '../store/slices/loginSlice/loginSlice'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../store/store'

const useForm = () => {
    const { login } = useSelector((state: RootState) => state)
    const dispatch = useDispatch()

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
