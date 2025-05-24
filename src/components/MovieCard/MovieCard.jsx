import { getMovieImg } from "../../assets/utils/getMovieImg";
import "./MovieCard.css"
import { Link } from "react-router-dom";
export function MovieCard({ movie, hoverId, setHoverId }) {
    const isFaded = hoverId !== null && hoverId !== movie.id;
    // const linkName = movie.title.replace(/\s+/g, "-").toLowerCase();
    return (
        <li className={`movie__card ${isFaded ? "faded" : ""}`}
            onMouseEnter={() => setHoverId(movie.id)} onMouseLeave={() => setHoverId(null)}
        >
            <Link className="movie__link" to={"/movie/"+movie.id}>
                <img width={230} height={345} src={getMovieImg(movie.poster_path, 500)} alt={movie.title} />
                <h2 className="movie__title">{movie.title}</h2>
            </Link>
        </li>
    )
}