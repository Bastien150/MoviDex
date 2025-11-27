import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Navbar from "./components/Navbar";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
  );
}
