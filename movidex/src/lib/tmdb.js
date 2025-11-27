const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const LANG = import.meta.env.VITE_TMDB_LANG || "fr-FR";
const TDMBURL = import.meta.env.VITE_TDMBURL;

// Fonction pour faire des requêtes à l'API TMDB
async function tmdbFetch(path, params = {}) {
  const url = new URL(TDMBURL + path);

  url.searchParams.set("api_key", API_KEY);
  url.searchParams.set("language", LANG || "fr-FR");

  for (const key in params) {
    url.searchParams.set(key, params[key]);
  }

  const res = await fetch(url);
  if (!res.ok) throw new Error("Erreur TMDB : " + res.status);

  return res.json();
}

// Films populaires
export function getPopular(page = 1) {
  return tmdbFetch("/movie/popular", { page });
}

// Recherche
export function searchMovies(query, page = 1) {
  return tmdbFetch("/search/movie", { query, page });
}

// Détails film
export function getMovieDetails(id, append = "") {
  return tmdbFetch(`/movie/${id}`, append ? { append_to_response: append } : {});
}
