import React, { useState, useEffect } from 'react'
import MovieList from 'components/MovieList/MovieList'
import SearchForm from 'components/SearchForm/SearchForm'
import { ReactComponent as Loader } from '../assets/loader.svg'

const fetchMovies = (url, setState, setLoading) => {
    fetch(url)
        .then((res) => res.json())
        .then(({ data: { movies } }) => setState(movies))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false))
}

const MovieMain = () => {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetchMovies(
            `https://yts.mx/api/v2/list_movies.json`,
            setMovies,
            setLoading
        )
    }, [])

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        fetchMovies(
            `https://yts.mx/api/v2/list_movies.json?query_term=${query}`,
            setMovies,
            setLoading
        )
    }
    return (
        <div className="App">
            <SearchForm
                query={query}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
            {loading ? <Loader /> : <MovieList movies={movies} />}
        </div>
    )
}

export default MovieMain
