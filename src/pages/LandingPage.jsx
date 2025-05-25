import { ContextCard } from "../components/ContextCard/ContextCard";
import { Helmet } from "react-helmet-async";
export function LandingPage() {
    return(
        <div>
            <Helmet>
                <title>Peliculas App</title>
                <meta name="description" content="Una app para buscar peliculas" />
            </Helmet>
            <ContextCard/>
        </div>
    )
}