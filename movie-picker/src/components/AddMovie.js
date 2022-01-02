import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { data } from '../data/data'
import './AddMovie.css'

const AddMovie = () => {
    let navigate = useNavigate();

    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [image, setImage] = useState('')

    const nameHandler = (event) => {
        setName(event.target.value);
    }

    const genreHandler = (event) => {
        setGenre(event.target.value);
    }

    const imageHandler = (event) => {
        setImage(event.target.value);
    }

    const addMovieHandler = (event) => {
        data.push({
            name: name,
            genre: genre,
            img: image
        })
        navigate("../", ({replace: true}));
    }



    return (
        <div className="form">
            <h1 className="title">Add Movie</h1>
            <label>Movie Title</label>
            <input onChange={nameHandler}></input>
            <label>Genre</label>
            <input onChange={genreHandler}></input>
            <label>Image</label>
            <input onChange={imageHandler}></input>
            <button onClick={addMovieHandler}>Add Movie</button>
        </div>
    )
}

export default AddMovie
