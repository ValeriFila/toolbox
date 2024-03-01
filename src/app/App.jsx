import './App.scss'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { CustomNavbar } from '../widgets'

function App() {
    return (
        <div className='App'>
            <CustomNavbar />
            <Outlet />
        </div>
    )
}

export default App
