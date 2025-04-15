import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router'

const Home = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>

    )
}

export default Home