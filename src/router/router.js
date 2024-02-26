import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import WelcomePage from '../pages/WelcomePage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import Notes from '../pages/Notes/Notes'
import App from '../App'
import Weather from '../pages/Weather'
import CalculatorPage from '../pages/CalculatorPage/CalculatorPage'

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
                element: <CalculatorPage />,
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
