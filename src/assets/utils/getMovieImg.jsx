
export function getMovieImg(path, width = 500){
    return path ? `https://image.tmdb.org/t/p/w${width}/${path}` : "/public/images/palomitas-de-maiz.png"
}