import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { MovieDetails } from "../pages/MovieDetails/MovieDetails";
export function MyRoutes(){
    return(
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/movie/:id" element={<MovieDetails/>}/>
            </Routes>
    )
}