import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import WelcomePage from '../../pages/WelcomePage/WelcomePage'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
import NotesPage from '../../pages/NotesPage/NotesPage'
import App from '../App'
import WeatherPage from '../../pages/WeatherPage/WeatherPage'
import CalculatorPage from '../../pages/CalculatorPage/CalculatorPage'

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
                element: <NotesPage />,
            },
            {
                path: '/weather',
                element: <WeatherPage />,
            },
        ],
    },
])
