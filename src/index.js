import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { router } from './app/router/router'
import store from './app/store/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
)
