import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from './appStore'
import BaseLayout from './layouts/BaseLayout'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <BaseLayout />
            </Provider>
        </BrowserRouter>
    </StrictMode>
)
