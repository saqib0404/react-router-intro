import "./Header.css"
import React from 'react'
import { Link } from 'react-router'

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/users">Users</Link>
        </nav>
    )
}

export default Header