import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1>Movie Picker</h1>
            <div className="links">
                <Link to="/movie">Pick a Movie</Link>
                <Link to="/">Movie Catalog</Link>
                <Link to="/add">Add a Movie</Link>
            </div>
        </div>
    )
}

export default Header
