import './App.scss'
import React from 'react'
import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { store } from './store/store'
import CustomNavbar from './components/CustomNavbar/CustomNavbar'

function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <CustomNavbar />
                <Outlet />
            </div>
        </Provider>
    )
}

export default App
