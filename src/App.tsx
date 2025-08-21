import { useEffect } from 'react'
import Header from './components/Header/Header'
import { routesConfig } from './routes/routesConfig'
import type { IRoutes } from './types'
import { Route, Routes } from 'react-router'
import { fetchData } from './store/slices/dataSlice/dataSlice'
import SignUp from './components/Auth/SignUp/SignUp'
import SignIn from './components/Auth/SignIn/SignIn'
import { useAppDispatch } from './hooks/hooks'

const App: React.FC = () => {
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

export default App
