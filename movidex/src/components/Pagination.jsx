import { useState } from "react";

export default function Pagination({currentPage = 1, onPageChange}) {
    const [page, setPage] = useState(currentPage);
    onPageChange(page);
  return (
    <div className="flex justify-center mt-6">
    {/* Ajoute 1 si supérieur à 0 */}
      <button onClick={()=> {page>0 && setPage(page-1)}} disabled = {page<= 1} className="px-4 py-2 mx-1 bg-gray-800 text-white rounded hover:bg-gray-700 disabled:bg-gray-500">Précédent</button>
      <span className="px-4 py-2 mx-1 bg-gray-900 text-white rounded">{"Page "+ page}</span>
      <button onClick={()=> setPage(page+1)} className="px-4 py-2 mx-1 bg-gray-800 text-white rounded hover:bg-gray-700">Suivant</button>
    </div>
  );
}