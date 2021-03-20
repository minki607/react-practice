import { movieItem, movieTitle } from './MovieList.module.scss'

const MovieList = ({ movies }) => {
    return (
        <ul className="movie-list">
            {movies &&
                movies.map((movie) => (
                    <li key={movie.id} className={movieItem}>
                        <span className={movieTitle}>
                            {movie.title} ({movie.year})
                        </span>
                        <img src={movie.small_cover_image} alt={movie.title} />
                    </li>
                ))}
        </ul>
    )
}

export default MovieList
