import { routesConfig } from '@/routes/routesConfig'
import type { IRoutes } from '@/shared/types'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router'
import { useAppDispatch } from '../appStore'
import { SignUp, SignIn } from '@/entitites/auth/UI'
import { Header } from '@/widgets/header/UI'
import { fetchData } from '../appSlice'

const BaseLayout: React.FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchData(1))
    }, [])

    return (
        <>
            <div className="container">
                <SignUp />
                <SignIn />
                <Header />
            </div>
            <Routes>
                {routesConfig.map(({ page, url }: IRoutes) => (
                    <Route path={url} element={page} />
                ))}
            </Routes>
        </>
    )
}

export default BaseLayout
