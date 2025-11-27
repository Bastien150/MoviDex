import { searchMovies } from "../lib/tmdb";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function search() {
  const [query, setQuery] = useState("");
  const [focus, setFocus] = useState(false);
  const [moviesSearch, setMoviesSearch] = useState([]);

  // Fonction de recherche de films qui appelle l'API TMDB
  async function searchMovie(event) {
    const value = event.target.value;
    setQuery(value);
    const movies = await searchMovies(value); // utilise la valeur courante
    setMoviesSearch(movies.results);
  }


  return (
    <div className="w-full max-w-sm min-w-[200px] relative">
      {/* Champ de recherche */}
      <div className="relative">
        <input
          onChange={(e) => searchMovie(e)}
          onFocus={() => setFocus(true)}
          onBlur={() => setTimeout(() => setFocus(false), 150)}
          className="w-full bg-transparent text-sm border rounded-md pl-3 pr-28 py-2 "
          placeholder="Chercher un film..."
        />
        <button
          className="absolute top-1/2 right-1 flex items-center rounded bg-slate-800 py-1 px-2.5  hover:shadow hover:bg-slate-700 -translate-y-1/2"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {/* Dropdown resultat des films */}

      {focus && (
        <div
          className="absolute mt-2 w-full bg-slate-900 border border-slate-700 rounded-xl 
                     shadow-xl overflow-hidden animate-[fadeIn_0.15s_ease-out] z-40"
        >
          {moviesSearch.map(
            (movie) =>
              movie.title.toLowerCase().includes(query.toLowerCase()) && (
                <Link to={"movie/" + movie.id} key={movie.id} className="flex items-center gap-3 px-4 py-1 hover:bg-slate-800 cursor-pointer">
                  <img src={"https://image.tmdb.org/t/p/w92/" + movie.poster_path} className="w-8 rounded-md"/>
                  <div className="text-sm text-slate-300">{movie.title}</div>
                </Link>
              )
          )}
        </div>
      )}
    </div>
  );
}
