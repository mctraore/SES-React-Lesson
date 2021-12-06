import React from 'react'
import './Movie.css'

const Movie = ({name, genre, image}) => {
    return (
        <div>
            <img src={image}></img>
            <p>{name}</p>
            <p>{genre}</p>
        </div>
    )
}

export default Movie
