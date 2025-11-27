import { useEffect, useState } from "react";
import { getPopular } from "../lib/tmdb";
import { Link } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import Pagination from "../components/Pagination";
import Footer from "../components/footer";

export default function Home() {
  const [listMovies, setListMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchMovies() {
      const movies = await getPopular(currentPage);
      console.log(movies.results); // pour debug, vérifier la structure
      setListMovies(movies.results);
    }
    fetchMovies();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
    <div className="pt-16 pl-5 pr-8">
      <h1 className="text-3xl mb-4">Films Populaires :</h1>
      <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
        {listMovies.map((movie) => (
          <Link
            to={"movie/" + movie.id}
            key={movie.id}
            className="relative rounded-lg shadow-md overflow-hidden h-[430px] w-full hover:scale-105 transition-transform"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w300/${movie.poster_path})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent p-4 flex items-end">
              <h1 className="text-white text-lg font-semibold">
                {movie.title}
              </h1>
            </div>
          </Link>
        ))}
      </div>
      <Pagination currentPage={currentPage} onPageChange={handlePageChange}/>
    </div>
    <Footer />
    </>
  );
}
