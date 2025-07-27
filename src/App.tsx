import Header from './components/Header/Header'
import { routesConfig } from './routes/routesConfig'
import type { IRoutes } from './types'
import { Route, Routes } from 'react-router'

const App: React.FC = () => {
    return (
        <>
            <div className="container">
                <Header />
                <Routes>
                    {routesConfig.map(({ page, url }: IRoutes) => (
                        <Route path={url} element={page} />
                    ))}
                </Routes>
            </div>
        </>
    )
}

export default App
