import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1 className="logo"> Movie Picker</h1>
            <div className="links">
                <Link to="/movie">Pick Movie</Link>
                <Link to="/">Movie Catalog</Link>
                <Link to="/add">Add a Movie</Link>
            </div>
        </div>
    )
}

export default Header
