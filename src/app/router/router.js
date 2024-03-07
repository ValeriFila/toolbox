import { createHashRouter } from 'react-router-dom'
import React from 'react'
import {
    WelcomePage,
    NotFoundPage,
    NotesPage,
    WeatherPage,
    CalculatorPage,
} from '../../pages'
import App from '../App'

export const router = createHashRouter([
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
