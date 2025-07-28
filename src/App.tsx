import { useEffect } from 'react'
import Header from './components/Header/Header'
import { routesConfig } from './routes/routesConfig'
import type { IRoutes } from './types'
import { Route, Routes } from 'react-router'
import { useDispatch } from 'react-redux'
import { fetchData } from './store/slices/dataSlice/dataSlice'

const App: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData(1))
    }, [])

    return (
        <>
            <div className="container">
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
