import { useEffect, useState } from "react"
import { getMovies } from "../../data/httpClient"
import { MovieCard } from "../MovieCard/MovieCard"
import "./ContextCard.css"
export function ContextCard() {
    const [movies, setMovies] = useState([])
    const [hoverId, setHoverId] = useState(null);
    useEffect(() => {
        async function fetchMovies(){
            const data = await getMovies("/discover/movie")
            console.log(data.results);
            setMovies(data.results);
        }
        fetchMovies()
    }, [])
    return(
        <ul className="movie__list">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} hoverId={hoverId} setHoverId={setHoverId} />
            ))}
        </ul>
    )
}