import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails, getPlateformMovieDetails } from "../lib/tmdb";
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
  const [platforms, setPlatforms] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      const movie = await getMovieDetails(id);
      const plateformInfo = await getPlateformMovieDetails(id);
      console.log(plateformInfo);

      // Récupération des plateformes disponibles en France (FR)
      const frPlatforms = plateformInfo?.results?.FR || null;

      setDetailMovie(movie);
      setPlatforms(frPlatforms);
    }

    fetchMovieDetails();
  }, [id]);

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
        
        {/* Titre */}
        <h1 className="text-5xl font-extrabold drop-shadow-2xl">
          {detailMovie.title}
        </h1>

        {/* Tagline */}
        {detailMovie.tagline && (
          <p className="mt-2 text-lg italic opacity-80 drop-shadow-md">
            {detailMovie.tagline}
          </p>
        )}

        {/* Description */}
        <p className="mt-4 max-w-3xl text-base opacity-90 leading-relaxed drop-shadow-sm">
          {detailMovie.overview}
        </p>

        {/* Infos */}
        <div className="mt-6 flex flex-wrap gap-4 text-sm opacity-80">
          <span>📅 {detailMovie.release_date}</span>
          <span>🎬 {timeMovie(detailMovie.runtime)}</span>
          <span>⭐ {detailMovie.vote_average} / 10</span>
          <span>👥 {detailMovie.vote_count} votes</span>
          {detailMovie.budget > 0 && (
            <span>💰 {detailMovie.budget.toLocaleString()} €</span>
          )}
        </div>

        {/* Où regarder */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-3 drop-shadow-xl">
            Où regarder ?
          </h2>

          {/* Si aucune plateforme */}
          {!platforms && (
            <p className="text-slate-300">Aucune plateforme disponible en France.</p>
          )}

          {/* Plateformes */}
          {platforms && (
            <div className="flex flex-wrap gap-6 mt-4">
              
              {/* Streaming */}
              {platforms.flatrate && (
                <div>
                  <h3 className="font-semibold mb-1 text-purple-300">
                    Streaming
                  </h3>
                  <div className="flex gap-3 flex-wrap">
                    {platforms.flatrate.map((p) => (
                      <div key={p.provider_id} className="w-12">
                        <img
                          src={`https://image.tmdb.org/t/p/w92${p.logo_path}`}
                          className="rounded-md shadow-lg"
                          alt={p.provider_name}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Location */}
              {platforms.rent && (
                <div>
                  <h3 className="font-semibold mb-1 text-yellow-300">
                    Location
                  </h3>
                  <div className="flex gap-3 flex-wrap">
                    {platforms.rent.map((p) => (
                      <div key={p.provider_id} className="w-12">
                        <img
                          src={`https://image.tmdb.org/t/p/w92${p.logo_path}`}
                          className="rounded-md shadow-lg"
                          alt={p.provider_name}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Achat */}
              {platforms.buy && (
                <div>
                  <h3 className="font-semibold mb-1 text-green-300">
                    Achat
                  </h3>
                  <div className="flex gap-3 flex-wrap">
                    {platforms.buy.map((p) => (
                      <div key={p.provider_id} className="w-12">
                        <img
                          src={`https://image.tmdb.org/t/p/w92${p.logo_path}`}
                          className="rounded-md shadow-lg"
                          alt={p.provider_name}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
