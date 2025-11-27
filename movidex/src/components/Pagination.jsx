import { useState, useEffect } from "react";

export default function Pagination({ currentPage = 1, onPageChange }) {
  const [page, setPage] = useState(currentPage);

  // Synchroniser le state local page si currentPage change de l'extérieur
  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  // Fonction pour mettre à jour la page locale et prévenir le parent
  const changePage = (newPage) => {
    setPage(newPage);
    onPageChange(newPage);
  };

  return (
    <div className="flex justify-center mt-6 mb-2">
      <button onClick={() => page > 1 && changePage(page - 1)}disabled={page <= 1} className="px-4 py-2 mx-1 bg-gray-800 text-white rounded hover:bg-gray-700 disabled:bg-gray-500">
        Précédent
      </button>

      <span className="px-4 py-2 mx-1 bg-gray-900 text-white rounded"> {"Page " + page} </span>

      <button onClick={() => changePage(page + 1)} className="px-4 py-2 mx-1 bg-gray-800 text-white rounded hover:bg-gray-700">
        Suivant
      </button>
    </div>
  );
}
