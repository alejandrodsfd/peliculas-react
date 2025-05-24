import { useParams } from "react-router-dom"
import { getMovies } from "../../data/httpClient"
import { useEffect, useState } from "react"
import { getMovieImg } from "../../assets/utils/getMovieImg"
import "./MovieDetails.css"
export function MovieDetails() {

    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    useEffect(() => {
        async function fetchMovie() {
            const data = await getMovies(`/movie/${id}`)
            setMovie(data)
        }
        fetchMovie()
    }, [id])
    return (
        <div>
            {movie && (
                <div className="movie__details">
                    <h2>{movie.title}</h2>
                    <div className="movie__img">
                        <img src={getMovieImg(movie.backdrop_path, 500)} alt={movie.title} />
                    </div>
                    <div className="movie__info">
                        <p>{movie.overview}</p>
                        <p>Release Date: {movie.release_date}</p>
                        <p>Rating: {movie.vote_average}</p>
                    </div>
                </div>
            )}
        </div>
    )
}