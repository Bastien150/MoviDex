import { Link } from "react-router-dom";
import SearchMovie from "../components/SearchMovie";

export default function Navbar() {
  return (
    <nav className="bg-gray-900/20 fixed top-0 left-0 w-full z-20 border-b border-default">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo + Titre */}
        <div className="flex items-center gap-3">
          <img src="/icon.png" className="h-7" alt="Logo MoviDex" />
          <span className="text-xl font-semibold text-heading whitespace-nowrap">MoviDex</span>
        </div>

        {/* Barre de recherche */}
        <div className="flex">
          <SearchMovie />
        </div>

        {/* Liens */}
        <ul className="flex items-center gap-6 text-sm font-medium">
          <li>
            <Link to="/" className="py-1 hover:opacity-80">Accueil</Link>
          </li>
          <li>
            <Link to="/about" className="py-1 hover:opacity-80">À propos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
