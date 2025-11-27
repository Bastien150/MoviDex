import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../lib/tmdb";
import Footer from "../components/footer.jsx";

// Fonction pour formater la durée en heures et minutes
function timeMovie(time) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours}h ${minutes}min`;
}

export default function MovieDetails() {
  const { id } = useParams();
  const [detailMovie, setDetailMovie] = useState(null);

  // Récupérer les détails du film lors du chargement du composant
  useEffect(() => {
    async function fetchMovieDetails() {
      const movie = await getMovieDetails(id);
      setDetailMovie(movie);
    }
    fetchMovieDetails();
  }, [id]);

  // Afficher un message de chargement en attendant les données
  if (!detailMovie) {
    return (
      <div className="flex items-center justify-center h-screen text-white text-xl">
        Chargement ...
      </div>
    );
  }

  return (
    <div
      className="relative w-screen min-h-screen h-[107vh] max-w-full flex flex-col justify-end"
      style={{
        backgroundImage: `
      linear-gradient(
        to bottom,
        rgba(0,0,0,0) 20%,
        rgba(0,0,0,0.4) 55%,
        rgba(0,0,0,0.9) 85%,
        rgba(0,0,0,1) 100%
      ),
      url(https://image.tmdb.org/t/p/original/${detailMovie.backdrop_path})
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Détails du film */}
      <div className="w-full px-8 pb-16 text-white bg-gradient-to-t from-black via-black/60 to-transparent">
        <h1 className="text-5xl font-extrabold drop-shadow-2xl">
          {detailMovie.title}
        </h1>

        {detailMovie.tagline && (
          <p className="mt-2 text-lg italic opacity-80 drop-shadow-md">
            {detailMovie.tagline}
          </p>
        )}

        <p className="mt-4 max-w-3xl text-base opacity-90 leading-relaxed drop-shadow-sm">
          {detailMovie.overview}
        </p>

        <div className="mt-6 flex flex-wrap gap-4 text-sm opacity-80">
          <span>📅 {detailMovie.release_date}</span>
          <span>🎬 {timeMovie(detailMovie.runtime)}</span>
          <span>⭐ {detailMovie.vote_average} / 10</span>
          <span>👥 {detailMovie.vote_count} votes</span>
          <span>
            {detailMovie.budget > 0 &&
              "💰" + detailMovie.budget.toLocaleString() + " €"}
          </span>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
