import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import WelcomePage from '../pages/WelcomePage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import Calculator from '../pages/Calculator'
import Notes from '../pages/Notes'
import App from '../App'
import Weather from '../pages/Weather'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                element: <WelcomePage />,
            },
            {
                path: '/calculator',
                element: <Calculator />,
            },
            {
                path: '/notes',
                element: <Notes />,
            },
            {
                path: '/weather',
                element: <Weather />,
            },
        ],
    },
])
