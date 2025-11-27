import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../lib/tmdb";

export default function MovieDetails() {
    const { id } = useParams();
    const [detailMovie, setDetailMovie] = useState(null);

    useEffect(() => {
        async function fetchMovieDetails() {
            const movie = await getMovieDetails(id);
            setDetailMovie(movie);
            console.log(movie);
        }
        fetchMovieDetails();
    }, [id]);

    if (!detailMovie) {
        return <div className="flex items-center justify-center h-screen text-white text-xl">Chargement ...</div>;
    }

    return (
        <div
            className="relative w-screen h-screen flex items-end"
            style={{
                backgroundImage: `
                    linear-gradient(
                        to bottom,
                        rgba(0,0,0,0) 20%,
                        rgba(0,0,0,0.4) 50%,
                        rgba(0,0,0,0.95) 100%
                    ),
                    url(https://image.tmdb.org/t/p/original/${detailMovie.backdrop_path})
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="w-full px-8 pb-12 text-white bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <h1 className="text-5xl font-extrabold drop-shadow-2xl">
                    {detailMovie.title}
                </h1>

                {detailMovie.tagline && (
                    <p className="mt-2 text-lg italic opacity-80 drop-shadow-md">{detailMovie.tagline}</p>
                )}

                <p className="mt-4 max-w-3xl text-base opacity-90 leading-relaxed drop-shadow-sm">{detailMovie.overview}</p>

                <div className="mt-6 flex flex-wrap gap-4 text-sm opacity-80">
                    <span>📅 {detailMovie.release_date}</span>
                    <span>🎬 {detailMovie.runtime} min</span>
                    <span>⭐ {detailMovie.vote_average} / 10</span>
                    <span>👥 {detailMovie.vote_count} votes</span>
                    <span>{detailMovie.budget>0 && "💰"+detailMovie.budget.toLocaleString() + " €"}</span>
                </div>
            </div>
        </div>
    );
}
